#!/usr/bin/env python3
"""
Semantic Router - 可配置的语义检查与模型路由脚本
支持从配置文件读取模型池和任务类型
支持自动模型切换 (--execute / -e)
"""

import json
import sys
import os
import subprocess
import argparse
from datetime import datetime

# ── Force offline mode for HuggingFace BEFORE any HF imports ──────────────
# Remove proxy env vars that cause connection failures when proxy is down.
# The local embedding model is fully cached; no network access needed.
os.environ['HF_HUB_OFFLINE'] = '1'
os.environ['TRANSFORMERS_OFFLINE'] = '1'
for _proxy_key in ('HTTP_PROXY', 'HTTPS_PROXY', 'ALL_PROXY',
                    'http_proxy', 'https_proxy', 'all_proxy'):
    os.environ.pop(_proxy_key, None)

# 获取脚本目录
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# 配置目录优先级：skill config/ → ~/.openclaw/workspace/.lib → 脚本同目录
_SKILL_CONFIG_DIR = os.path.join(os.path.dirname(SCRIPT_DIR), 'config')
_LIB_CONFIG_DIR = os.path.expanduser('~/.openclaw/workspace/.lib')

if os.path.exists(os.path.join(_SKILL_CONFIG_DIR, 'pools.json')):
    CONFIG_DIR = _SKILL_CONFIG_DIR
elif os.path.exists(os.path.join(_LIB_CONFIG_DIR, 'pools.json')):
    CONFIG_DIR = _LIB_CONFIG_DIR
else:
    CONFIG_DIR = SCRIPT_DIR

def load_json(filename, default=None):
    """加载 JSON 配置文件"""
    path = os.path.join(CONFIG_DIR, filename)
    try:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
    except Exception as e:
        print(f"Warning: Failed to load {filename}: {e}", file=sys.stderr)
    return default or {}

def get_recent_messages(limit: int = 3) -> list:
    """从 jsonl 文件获取最近的用户消息作为上下文"""
    import glob
    
    sessions_dir = os.path.expanduser('~/.openclaw/agents/main/sessions')
    
    # 找到最新的 jsonl 文件
    jsonl_files = glob.glob(f"{sessions_dir}/*.jsonl")
    if not jsonl_files:
        return []
    
    # 按修改时间排序
    jsonl_files.sort(key=os.path.getmtime, reverse=True)
    
    user_messages = []
    
    for jsonl_file in jsonl_files[:3]:
        try:
            with open(jsonl_file, 'r') as f:
                lines = f.readlines()
            
            # 从后往前找用户消息
            for line in reversed(lines[-100:]):
                try:
                    data = json.loads(line)
                    msg = data.get('message', {})
                    role = msg.get('role', '')
                    content_list = msg.get('content', [])
                    
                    if role == 'user' and content_list:
                        content = content_list[0].get('text', '')
                        if content and len(user_messages) < limit:
                            user_messages.append(content)
                            
                    if len(user_messages) >= limit:
                        break
                except:
                    continue
            
            if len(user_messages) >= limit:
                break
                
        except:
            continue
    
    return user_messages

# 加载配置
MODEL_POOLS = load_json('pools.json', {})
TASK_PATTERNS = load_json('tasks.json', {})

# 备用硬编码（配置文件不存在时）
if not MODEL_POOLS:
    MODEL_POOLS = {
        "Intelligence": {"name": "智能池", "primary": "openai-codex/gpt-5.3-codex", "fallback_1": "kimi-k2.5", "fallback_2": "minimax-cn/MiniMax-M2.5"},
        "Highspeed": {"name": "高速池", "primary": "openai/gpt-4o-mini", "fallback_1": "glm-4.7-flashx", "fallback_2": "minimax-cn/MiniMax-M2.5"},
        "Humanities": {"name": "人文池", "primary": "openai/gpt-4o", "fallback_1": "kimi-k2.5", "fallback_2": "minimax-cn/MiniMax-M2.5"}
    }

if not TASK_PATTERNS:
    TASK_PATTERNS = {
        "continue": {"keywords": ["继续", "接着"], "pool": None, "action": "延续"},
        "development": {"keywords": ["开发", "写代码"], "pool": "Intelligence", "action": "执行开发任务"},
    }

# 指示词配置
CONTINUATION_INDICATORS = {
    "pronouns": ["这个", "那个", "它", "这", "那"],
    "possessives": ["你的", "我的", "你说的", "你提的", "你建议的", "刚说的", "上面说的"],
    "supplements": ["还有", "另外", "补充", "再加上", "还是", "仍然", "依然"],
    "confirmations": ["对的", "是的", "好的", "没问题", "同意", "就这样"],
    "references": ["按照", "根据", "按你", "用你"]
}

import re as _re

# ── System Message Filter (v7.4) ──────────────────────────────────────────
# System-level messages (heartbeat polls, cron events, slash commands,
# "continue where you left off", etc.) should NOT be treated as user topic
# input for context relevance scoring.  They are either:
#   - Transparent signals → force "continue" (no model switch, no /new)
#   - Internal machinery → skip semantic scoring entirely
#
# This filter runs BEFORE keyword/indicator/embedding checks.

# Regex patterns that identify system / internal messages
_SYSTEM_MESSAGE_PATTERNS: list[_re.Pattern] = [
    # Heartbeat poll prompt (exact or prefix)
    _re.compile(r'^Read HEARTBEAT\.md', _re.IGNORECASE),
    _re.compile(r'^Heartbeat\b', _re.IGNORECASE),
    # OpenClaw internal: "continue where you left off" variants
    _re.compile(r'^continue\s+where\s+you\s+left', _re.IGNORECASE),
    _re.compile(r'^pick\s+up\s+where', _re.IGNORECASE),
    _re.compile(r'^resume\s+(the\s+)?(previous|last|prior)', _re.IGNORECASE),
    # Slash commands (e.g. /new, /model, /status, /help, /reasoning, etc.)
    _re.compile(r'^/[a-zA-Z]'),
    # Cron event system messages
    _re.compile(r'^\[cron:', _re.IGNORECASE),
    _re.compile(r'^\[System\s+Message\]', _re.IGNORECASE),
    # Subagent completion notifications
    _re.compile(r'^\[Subagent\b', _re.IGNORECASE),
    # OpenClaw conversation metadata preamble (injected by Gateway)
    _re.compile(r'^Conversation\s+info\s+\(untrusted\s+metadata\)', _re.IGNORECASE),
    # Explicit semantic-router directives (e.g. "[语义路由]")
    _re.compile(r'^\[语义路由\]'),
]


def is_system_message(text: str) -> bool:
    """
    Return True if the message is a system/internal signal that should
    bypass semantic topic detection and be treated as a continuation.
    """
    stripped = text.strip()
    if not stripped:
        return False
    for pattern in _SYSTEM_MESSAGE_PATTERNS:
        if pattern.search(stripped):
            return True
    return False


# Keywords requiring word-boundary matching (short/ambiguous, would cause substring false positives)
# e.g. "code" matches "%{http_code}" without boundary, "bug" matches "debug" variants are OK
_WORD_BOUNDARY_KEYWORDS = {"code", "coding"}

def keyword_match(user_input: str):
    """关键词匹配"""
    text = user_input.lower().strip()

    for task_type, config in TASK_PATTERNS.items():
        is_standalone = config.get("standalone", False)

        for kw in config.get("keywords", []):
            if is_standalone:
                if text == kw or text.startswith(kw + " ") or text.startswith(kw + "?"):
                    return task_type, config.get("action"), config.get("pool"), task_type == "continue"
            elif kw in _WORD_BOUNDARY_KEYWORDS:
                # ASCII word boundary: "code" must not be preceded/followed by [a-zA-Z0-9_]
                # Uses lookahead/lookbehind instead of \b because Python \w includes CJK chars,
                # making \b fail between Chinese text and English keywords.
                if _re.search(r'(?<![a-zA-Z0-9_])' + _re.escape(kw) + r'(?![a-zA-Z0-9_])', text):
                    return task_type, config.get("action"), config.get("pool"), task_type == "continue"
            else:
                if kw in text:
                    return task_type, config.get("action"), config.get("pool"), task_type == "continue"

    return None, None, None, False

def indicator_match(user_input: str) -> bool:
    """指示词检测"""
    text = user_input.lower().strip()
    for indicators in CONTINUATION_INDICATORS.values():
        for indicator in indicators:
            if indicator in text:
                return True
    return False


# ── Local Embedding Model (sentence-transformers, zero API cost) ──────────

_LOCAL_MODEL_PATH = os.path.expanduser(
    '~/.cache/huggingface/hub/models--sentence-transformers--all-MiniLM-L6-v2/'
    'snapshots/c9745ed1d9f207416be6d2e6f8de32d1f16199bf'
)

_st_model = None  # lazy singleton

def _get_local_model():
    """Lazy-load local sentence-transformers model (all-MiniLM-L6-v2, 384-dim)."""
    global _st_model
    if _st_model is not None:
        return _st_model

    # Force offline mode — never hit network
    os.environ['HF_HUB_OFFLINE'] = '1'
    os.environ['TRANSFORMERS_OFFLINE'] = '1'

    try:
        import warnings
        warnings.filterwarnings('ignore')
        from sentence_transformers import SentenceTransformer
        _st_model = SentenceTransformer(_LOCAL_MODEL_PATH, local_files_only=True)
        return _st_model
    except Exception as e:
        print(f"Warning: Local embedding model load failed: {e}", file=sys.stderr)
        return None


def get_embedding_client():
    """获取 embedding 客户端 — 优先本地模型，无需 API key"""
    model = _get_local_model()
    if model is not None:
        return model, "local"

    # Fallback: try OpenAI API (legacy path)
    api_key = os.environ.get("OPENAI_API_KEY", "")
    api_base = os.environ.get("OPENAI_API_BASE", "https://api.openai.com/v1")
    try:
        from openai import OpenAI
        if api_key:
            return OpenAI(api_key=api_key, base_url=api_base), "openai"
    except ImportError:
        pass

    print("Warning: No embedding backend available, falling back to Jaccard", file=sys.stderr)
    return None, "fallback"


def embed_text(text: str, client=None, provider: str = "local") -> list:
    """
    获取文本的向量表示。
    Local model: all-MiniLM-L6-v2 (384-dim), ~10ms/call, zero API cost.
    Returns: list of floats or None on failure.
    """
    if not text or not text.strip():
        return None

    if client is None:
        client, provider = get_embedding_client()

    if client is None:
        return None

    try:
        if provider == "local":
            # sentence-transformers model — returns numpy array
            vec = client.encode(text.strip())
            return vec.tolist()
        elif provider == "openai":
            response = client.embeddings.create(
                input=text.strip(),
                model="text-embedding-3-small"
            )
            return response.data[0].embedding
    except Exception as e:
        print(f"Warning: Embedding failed ({provider}): {e}", file=sys.stderr)
        return None

    return None


def cosine_similarity(vec1: list, vec2: list) -> float:
    """计算两个向量的余弦相似度"""
    if not vec1 or not vec2:
        return 0.0

    try:
        import numpy as np
        v1 = np.array(vec1)
        v2 = np.array(vec2)
        denom = np.linalg.norm(v1) * np.linalg.norm(v2)
        if denom == 0:
            return 0.0
        return float(np.dot(v1, v2) / denom)
    except ImportError:
        import math
        dot_product = sum(a * b for a, b in zip(vec1, vec2))
        norm1 = math.sqrt(sum(a * a for a in vec1))
        norm2 = math.sqrt(sum(b * b for b in vec2))
        if norm1 == 0 or norm2 == 0:
            return 0.0
        return dot_product / (norm1 * norm2)

def jaccard_similarity(text1: str, text2: str) -> float:
    """Jaccard 相似度 (legacy fallback, used when embedding unavailable)"""
    tokens1 = set(_re.findall(r'[\u4e00-\u9fff]+|[a-zA-Z]+', text1.lower()))
    tokens2 = set(_re.findall(r'[\u4e00-\u9fff]+|[a-zA-Z]+', text2.lower()))
    if not tokens1 or not tokens2:
        return 0.0
    intersection = len(tokens1 & tokens2)
    union = len(tokens1 | tokens2)
    return intersection / union if union > 0 else 0.0

# ── Context Relevance (双通道: Embedding (Primary) + Entity Overlap (Secondary)) ──────────

# Thresholds for graded session action (based on embedding cosine similarity or Jaccard fallback)
THRESHOLD_CONTINUE = 0.40   # ≥ 0.40 → 延续 (Branch B/C) — embedding cosine 或 Jaccard ≥0.40
THRESHOLD_WARN = 0.20       # 0.20~0.40 → 延续但警告话题可能漂移 (Branch B+)
# < 0.20 → 建议 /new (Branch C-auto) — 向量空间中距离太远，属于新话题

def tokenize_zh_enhanced(text: str) -> set:
    """中文字符级(unigram + bigram + trigram) + 英文词级 分词"""
    text = text.lower().strip()
    tokens = set()
    # 英文单词（含下划线、连字符、点号的标识符）
    tokens.update(_re.findall(r'[a-zA-Z][a-zA-Z0-9_\-\.]+', text))
    # 英文短词（单字母的也要，但通过 entity 通道处理）
    tokens.update(_re.findall(r'[a-zA-Z]+', text))
    # 中文单字
    cn_chars = _re.findall(r'[\u4e00-\u9fff]', text)
    tokens.update(cn_chars)
    # 中文 bigram
    for i in range(len(cn_chars) - 1):
        tokens.add(cn_chars[i] + cn_chars[i + 1])
    # 中文 trigram（抓名词短语）
    for i in range(len(cn_chars) - 2):
        tokens.add(cn_chars[i] + cn_chars[i + 1] + cn_chars[i + 2])
    return tokens

def extract_entities(text: str) -> set:
    """提取关键实体（英文标识符、路径名、大写缩写、版本号等）"""
    entities = set()
    # 英文标识符（webhook, semantic_check, etc），2+ 字符
    entities.update(w for w in _re.findall(r'[a-zA-Z][a-zA-Z0-9_\-]+', text.lower()) if len(w) >= 2)
    # 路径A/B/C 这种标识
    entities.update(_re.findall(r'路径[A-Za-z0-9]', text))
    # Branch X
    entities.update(_re.findall(r'branch\s*[a-zA-Z]', text.lower()))
    # 版本号 v2.0 等
    entities.update(_re.findall(r'v\d+\.\d+', text.lower()))
    # 数字+单位 (端口号、阈值等) — 不作为entity，噪声太多
    return entities

def context_relevance_score(user_input: str, context_messages: list) -> tuple:
    """
    分层上下文关联度评分（v7.3: Embedding Primary → Jaccard Safety Net）。
    
    Architecture:
        Layer 1: Embedding (local all-MiniLM-L6-v2) — primary, semantic-aware
        Layer 2: Jaccard (token overlap) — safety net when embedding unavailable
        Layer 3: Entity overlap — supplementary signal in both layers
        
    Layered Fallback (P0 fix from QA audit):
        - Embedding available: use embed score directly (no Jaccard needed)
        - Embedding unavailable + Jaccard < 0.30: conservative → grade as "warn" not "new_session"
          (prevents aggressive context reset when only using token overlap)
    
    Returns:
        (score: float, method: str, grade: str)
        - score: 0.0 ~ 1.0
        - method: 'embed' | 'jaccard_fallback' | 'no_context'
        - grade: 'continue' | 'warn' | 'new_session'
    """
    if not context_messages:
        return 0.0, "no_context", "continue"  # 无上下文时保守延续
    
    # 获取客户端（重用或创建）
    client, provider = get_embedding_client()
    
    # Channel 1: 尝试 Embedding（精准语义匹配）
    msg_embedding = embed_text(user_input, client, provider) if client else None
    msg_entities = extract_entities(user_input)
    
    best_score = 0.0
    method = "jaccard_fallback"  # 默认降级方案
    embedding_available = False
    
    if msg_embedding:
        # Embedding 可用 — 使用语义向量匹配
        for ctx in context_messages:
            ctx_embedding = embed_text(ctx, client, provider)
            
            if ctx_embedding:
                embedding_available = True
                # Channel 1: Cosine similarity（向量空间中的语义相似度）
                embed_score = cosine_similarity(msg_embedding, ctx_embedding)
                
                # Channel 2: Entity overlap（关键词匹配补充）
                ctx_entities = extract_entities(ctx)
                if msg_entities and ctx_entities:
                    intersection_e = len(msg_entities & ctx_entities)
                    union_e = len(msg_entities | ctx_entities)
                    entity_score = intersection_e / union_e if union_e > 0 else 0.0
                else:
                    entity_score = 0.0
                
                # 综合：embed 权重 0.7，entity 权重 0.3，cap 到 1.0
                combined = min(1.0, embed_score * 0.7 + entity_score * 0.3)
                
                if combined > best_score:
                    best_score = combined
                    method = "embed"
    
    if not embedding_available:
        # Embedding 不可用，降级到 Jaccard（兼容模式）
        msg_tokens = tokenize_zh_enhanced(user_input)
        
        for ctx in context_messages:
            ctx_tokens = tokenize_zh_enhanced(ctx)
            ctx_entities = extract_entities(ctx)
            
            # Channel 1: token Jaccard（降级）
            intersection_t = len(msg_tokens & ctx_tokens)
            union_t = len(msg_tokens | ctx_tokens)
            token_score = intersection_t / union_t if union_t > 0 else 0.0
            
            # Channel 2: entity overlap
            if msg_entities and ctx_entities:
                intersection_e = len(msg_entities & ctx_entities)
                union_e = len(msg_entities | ctx_entities)
                entity_score = intersection_e / union_e if union_e > 0 else 0.0
            else:
                entity_score = 0.0
            
            combined = min(1.0, max(token_score, entity_score * 1.5))
            
            if combined > best_score:
                best_score = combined
                method = "jaccard_fallback"
    
    # ── 分级判定（v7.3 分层 Fallback） ──────────
    if best_score >= THRESHOLD_CONTINUE:
        grade = "continue"
    elif best_score >= THRESHOLD_WARN:
        grade = "warn"
    else:
        if embedding_available:
            # Embedding 判定为低关联 — 可信度高，允许 new_session
            grade = "new_session"
        else:
            # Jaccard-only 判定低关联 — 可信度低（语义近义盲区）
            # P0 safety net: 保守降级为 warn 而非 new_session
            # 防止 Jaccard 无法识别的语义关联导致误触 C-auto
            if best_score > 0.05:
                grade = "warn"  # 有一些词重叠，保守延续
            else:
                grade = "new_session"  # 完全无关联才允许 new_session
    
    return best_score, method, grade

def detect_task_type(user_input: str, context_messages: list = None):
    """
    检测任务类型 (v7.4: 系统消息过滤 + 优先级修正)
    
    Returns:
        (task_type, action, pool, branch, detection, context_score, context_grade)
        
    branch values:
        "B"  = 延续（关键词/指示词/高关联度/系统消息）
        "B+" = 延续但警告（中等关联度，话题可能漂移）
        "C"  = 新任务类型（关键词匹配到非延续任务）
        "C-auto" = 建议自动 /new（低关联度，与上下文无关）
    """
    # Step 0: 系统消息过滤（v7.4）— 最最高优先级
    # Heartbeat, cron events, slash commands, system notifications → 强制延续
    # 这些消息不是用户的话题输入，不应影响语义路由决策
    if is_system_message(user_input):
        return "continue", "系统信号(透传)", None, "B", "system_passthrough", 1.0, "continue"
    
    # Step 1: 任务关键词匹配（ALL 任务，包括 continue） — 最高优先级
    task_type, action, pool, is_continue = keyword_match(user_input)
    
    if task_type:
        if is_continue:
            # "继续"、"接着" 等延续关键词 → B分支
            return task_type, action, pool, "B", "keyword_continue", 1.0, "continue"
        else:
            # 其他任务关键词（开发/查询/内容等） → C分支
            return task_type, action, pool, "C", "keyword", None, None
    
    # Step 2: 指示词检测（"这个"、"那个"、"还有" 等 → 强制延续）
    # ⚠️ 仅在无任务关键词时才检查！避免 "这个bug" 中的"个"误匹配
    if indicator_match(user_input):
        return "continue", "延续", None, "B", "indicator", 1.0, "continue"
    
    # Step 3: 上下文关联度评分（双通道 Embedding + Entity）
    # 用于判断是否与历史上下文有关
    ctx_msgs = context_messages or []
    score, method, grade = context_relevance_score(user_input, ctx_msgs)
    
    if grade == "continue":
        # 高关联度（≥0.40）→ 延续当前
        return "continue", "延续", None, "B", f"context_{method}", score, grade
    elif grade == "warn":
        # 中等关联度（0.20~0.40）→ 延续但警告
        return "continue", "延续(话题可能漂移)", None, "B+", f"context_{method}", score, grade
    else:
        # 低关联度（<0.20）→ 建议自动 /new + 切换模型
        # Step 3a: 尝试从新话题的内容推断任务类型
        #         (可能是开发/查询/内容等)，决定目标模型池
        inferred_type, _, inferred_pool, _ = keyword_match(user_input)
        
        # 如果从关键词检测出任务类型，用对应池；否则默认 Highspeed
        target_pool = inferred_pool if inferred_pool else "Highspeed"
        
        return "new_topic", "自动/new+切池", target_pool, "C-auto", f"context_{method}", score, grade

def get_pool_info(pool_name: str):
    if pool_name and pool_name in MODEL_POOLS:
        return MODEL_POOLS[pool_name]
    return None

def get_current_pool():
    return os.environ.get("CURRENT_POOL", "Highspeed")

def generate_declaration(result: dict, current_pool: str, current_model: str = None) -> str:
    task_type = result["task_type"]
    action = result["action"]
    branch = result.get("branch", "C")
    detection_method = result.get("detection_method", "unknown")
    ctx_score = result.get("context_score", 0)

    p_level = {
        "development": "P1", "automation": "P1", "system_ops": "P1",
        "info_retrieval": "P2", "coordination": "P2", "web_search": "P2",
        "content_generation": "P3", "reading": "P3", "q_and_a": "P3", "training": "P3", "multimodal": "P3",
        "continue": "P2", "new_session": "P4"
    }.get(task_type, "P2")

    # 标记检测方法（embed/jaccard_fallback/keyword/indicator/system）
    method_marker = {
        "context_embed": "📊",
        "embed": "📊",
        "context_jaccard_fallback": "⚙️",
        "jaccard_fallback": "⚙️",
        "context_token": "⚙️",
        "keyword_continue": "🔑",
        "indicator": "🔍",
        "keyword": "🔑",
        "no_context": "○",
        "system_passthrough": "🛡️"
    }.get(detection_method, "")

    if branch == "B":
        # B分支: 延续（高关联度 ≥0.40）
        pool_chinese = MODEL_POOLS.get(current_pool, {}).get("name", current_pool)
        model_short = (current_model or "").split("/")[-1] or current_pool
        score_str = f" {ctx_score:.2f}" if ctx_score > 0 else ""
        return f"【语义检查】{p_level}-延续{method_marker}{score_str}｜模型池:【{pool_chinese}】｜实际模型:{model_short}"
    elif branch == "B+":
        # B+分支: 延续但警告话题漂移（中关联度 0.20~0.40）
        pool_chinese = MODEL_POOLS.get(current_pool, {}).get("name", current_pool)
        model_short = (current_model or "").split("/")[-1] or current_pool
        return f"【语义检查】{p_level}-延续(漂移⚠️{method_marker}{ctx_score:.2f})｜模型池:【{pool_chinese}】｜实际模型:{model_short}"
    elif branch == "C-auto":
        # C-auto分支: 低关联度（<0.20），自动 /new + 切换到目标池 primary
        target_pool_key = result.get("pool", "Highspeed")
        pool_info = get_pool_info(target_pool_key)
        pool_chinese = pool_info.get("name", target_pool_key) if pool_info else (target_pool_key or "高速池")
        primary = result.get("primary_model", "")
        model_short = primary.split("/")[-1] if primary else "未知"
        return f"【语义检查】{p_level}-新话题({method_marker}{ctx_score:.2f}<0.20)｜/new→{pool_chinese}｜实际模型:{model_short}"
    else:
        # C分支: 新任务类型（关键词匹配），建议切模型但不切会话
        target_pool_key = result.get("pool")
        pool_info = get_pool_info(target_pool_key)
        pool_chinese = pool_info.get("name", target_pool_key) if pool_info else (target_pool_key or "未知池")
        primary = result.get("primary_model", "")
        model_short = primary.split("/")[-1] if primary else "未知"
        return f"【语义检查】{p_level}-{action}({method_marker})｜新池→{pool_chinese}｜实际模型:{model_short}"

def build_context_archive_prompt():
    return """[上下文截止符] 之前的对话已归档。从本条消息开始作为新的上下文起点。"""

def execute_model_switch(model: str) -> bool:
    """执行模型切换 - 尝试通过 Gateway API"""
    # 由于没有直接的 CLI 命令，这里输出需要手动执行的命令
    # 后续可以通过 WebSocket API 自动化
    print(f"⚠️ 请手动执行: /model {model}", file=sys.stderr)
    return False

def execute_fallback_chain(primary: str, fallback_1: str = None, fallback_2: str = None) -> dict:
    """
    执行 Fallback 回路
    返回: {"attempted": [...], "success": bool, "current_model": str}
    """
    results = {
        "attempted": [],
        "success": False,
        "current_model": primary
    }
    
    models_to_try = [primary]
    if fallback_1:
        models_to_try.append(fallback_1)
    if fallback_2:
        models_to_try.append(fallback_2)
    
    for model in models_to_try:
        print(f"🔄 Trying model: {model}", file=sys.stderr)
        results["attempted"].append(model)
        
        if execute_model_switch(model):
            results["success"] = True
            results["current_model"] = model
            print(f"✅ Fallback success: {model}", file=sys.stderr)
            return results
    
    print(f"❌ All fallback attempts failed", file=sys.stderr)
    return results

def main():
    parser = argparse.ArgumentParser(description="Semantic Router - 模型路由脚本")
    parser.add_argument("user_input", nargs="?", help="用户输入消息")
    parser.add_argument("current_pool", nargs="?", help="当前模型池")
    parser.add_argument("context_messages", nargs="*", help="上下文消息列表")
    parser.add_argument("--current-model", default=None, help="当前实际使用的模型 ID（用于B分支声明）")
    parser.add_argument("-e", "--execute", action="store_true", help="自动执行模型切换（主模型）")
    parser.add_argument("-f", "--fallback", action="store_true", help="执行 Fallback 回路（主模型失败时自动切换备用）")
    
    args = parser.parse_args()
    
    # 如果没有参数，显示用法
    if len(sys.argv) < 2:
        print("Usage: semantic_check.py <user_input> [current_pool] [context1] [context2] ...] [-e|--execute] [-f|--fallback]")
        print("Example: semantic_check.py '查一下天气' 'Intelligence' -e")
        print("Example: semantic_check.py --fallback 'openai/gpt-4o-mini' 'glm-4.7-flashx' 'MiniMax-M2.5'")
        sys.exit(1)
    
    # Fallback 模式：手动指定模型链
    if args.fallback:
        fallback_models = []
        if args.user_input:
            fallback_models.append(args.user_input)
        if args.current_pool:
            fallback_models.append(args.current_pool)
        fallback_models.extend(args.context_messages)
        
        fallback_results = execute_fallback_chain(
            fallback_models[0] if len(fallback_models) > 0 else None,
            fallback_models[1] if len(fallback_models) > 1 else None,
            fallback_models[2] if len(fallback_models) > 2 else None
        )
        print(json.dumps(fallback_results, ensure_ascii=False, indent=2))
        return
    
    user_input = args.user_input
    current_pool = args.current_pool if args.current_pool else get_current_pool()
    current_model = args.current_model
    context_messages = args.context_messages if args.context_messages else get_recent_messages(limit=3)
    
    task_type, action, pool_name, branch, detection, ctx_score, ctx_grade = detect_task_type(user_input, context_messages)
    
    # B/B+ 分支延续时，pool_name 可能为 None（continue 类型没有定义 pool）
    # 此时应保持 current_pool
    if pool_name is None and branch in ("B", "B+"):
        pool_name = current_pool
    
    pool_info = get_pool_info(pool_name)
    
    # 判断是否需要切换模型
    need_switch = bool(task_type not in ("continue",) and pool_info and pool_info.get("primary"))
    target_model = pool_info.get("primary") if (need_switch or branch == "C-auto") else None
    if branch == "C-auto" and pool_info:
        need_switch = True
        target_model = pool_info.get("primary")
    
    # action_command: 代理必须无条件执行的原子指令
    # "continue"       → 不切换，直接回复
    # "continue_warn"  → 延续但在声明中标注漂移警告
    # "switch"         → 切换到 target_model，然后回复（同会话内切模型）
    # "new_and_switch"  → 执行 /new 清空上下文 + 切换到目标池 primary（C-auto 专用）
    if branch == "B":
        action_command = "continue"
    elif branch == "B+":
        action_command = "continue_warn"
    elif branch == "C-auto":
        action_command = "new_and_switch"  # v7.2: 自动 /new + 切到目标池 primary
    else:  # C
        action_command = "switch"
    
    result = {
        "branch": branch,
        "task_type": task_type,
        "action": action,
        "pool": pool_name,
        "pool_name": pool_info.get("name") if pool_info else None,
        "primary_model": target_model,
        "fallback_1": pool_info.get("fallback_1") if pool_info else None,
        "fallback_2": pool_info.get("fallback_2") if pool_info else None,
        "need_archive": branch in ("C", "C-auto"),
        "need_reset": branch == "C-auto",  # C-auto: 自动 /new 清空上下文
        "need_switch": need_switch or branch == "C-auto",  # C-auto 也需要切换
        "action_command": action_command,
        # legacy compat
        "session_action": action_command,
        "detection_method": detection,
        "context_score": ctx_score,
        "context_grade": ctx_grade,
        "fallback_chain": [target_model, pool_info.get("fallback_1"), pool_info.get("fallback_2")] if pool_info else [],
        "declaration": None,
        "context_cutoff_prompt": build_context_archive_prompt() if branch in ("C", "C-auto") else None,
        "auto_executed": False
    }
    
    result["declaration"] = generate_declaration(result, current_pool, current_model)
    
    # 记录日志
    log_file = os.path.expanduser("~/.openclaw/workspace/.lib/semantic_check.log")
    try:
        with open(log_file, "a", encoding="utf-8") as f:
            method_icon = {
                "context_embed": "📊",
                "embed": "📊",
                "context_jaccard_fallback": "⚙️",
                "jaccard_fallback": "⚙️",
                "context_token": "⚙️",
                "keyword_continue": "🔑",
                "indicator": "🔍",
                "keyword": "🔑",
                "no_context": "○",
                "system_passthrough": "🛡️"
            }.get(detection, "?")
            f.write(f"[{datetime.now().isoformat()}] {user_input[:40]:40} | {branch:5} {task_type:20} {method_icon} score={ctx_score:.3f} grade={ctx_grade}\n")
    except Exception as e:
        pass
    
    # 如果需要切换且启用了自动执行
    if need_switch and args.execute and target_model:
        print(f"🔄 Auto-switching model to: {target_model}", file=sys.stderr)
        success = execute_model_switch(target_model)
        result["auto_executed"] = success
    
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
