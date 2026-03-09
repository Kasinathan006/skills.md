---
name: skill-manager-all-in-one
description: One-stop skill management for OpenClaw. 一站式技能管理，引导式使用，嵌套搜索、审计、创建、发布、批量更新等必要 skill，有这个就够了！Use when (1) reviewing installed skills, (2) searching ClawHub for new skills, (3) comparing skills before installation, (4) checking for updates, (5) auditing skill security, (6) creating new skills, (7) publishing skills to ClawHub, (8) batch updating local skills. Triggers: "帮我看看有没有更好的 X 技能", "审查我的 skill 体系", "这个 skill 值得装吗", "检查 skill 更新", "创建一个 skill", "发布 skill", "批量更新 skill".
---

# Skill Manager

全面的 OpenClaw 技能管理工具。一站式解决 skill 管理问题。

## 核心原则

1. **先本地，后网络** — 优先使用本地已有资源
2. **决定权交给用户** — 任何安装/更新操作需用户确认
3. **命名规范化** — 统一格式，便于管理

---

## 命名规范

| 字段 | 格式 | 示例 |
|------|------|------|
| **slug** (部署名/文件夹名) | 全小写 + 连字符 | `skill-finder-cn` |
| **显示名** (--name) | 首字母大写英文，可加中文后缀 | `Skill Finder CN \| Skill 查找器` |
| **描述** (description) | 中英文双语 | `Find skills from ClawHub. 从 ClawHub 查找技能。` |

**示例 frontmatter：**
```yaml
---
name: skill-finder-cn
description: Find skills from ClawHub. 从 ClawHub 查找技能。Use when user asks "有什么技能可以X" or "find a skill".
---
```

---

## 扫描本地 Skills

```bash
# 用户自定义 skills
ls -la ~/.openclaw/skills/

# OpenClaw 内置 skills
ls -la ~/.npm-global/lib/node_modules/openclaw/skills/
```

读取 SKILL.md frontmatter（name + description）匹配需求。

---

## ClawHub 搜索与对比

**流程：先本地，后网络**

1. 检查本地是否有搜索类 skill：
```bash
ls ~/.openclaw/skills/ | grep -E "find-skills|skill-finder"
```

2. 本地有 → 读取并使用

3. 本地没有 → 提示用户选择安装或跳过

**对比维度：**

| 维度 | 权重 |
|------|------|
| 下载量 | 高 |
| 评分 ⭐ | 高 |
| 更新频率 | 中 |
| 评论反馈 | 中 |

---

## 安装前评估

**检查清单：**
- [ ] 本地是否有功能重叠的 skill？
- [ ] ClawHub 上是否有更好的替代？
- [ ] 评分/下载量/评论如何？
- [ ] 是否需要安全审计？

---

## 安全审计

安装第三方 skill 前，建议审计。

**流程：先本地，后网络**

1. 检查本地是否有审计 skill：
```bash
ls ~/.openclaw/skills/ | grep -E "scanner|audit|vetter"
```

2. 本地有 → 读取并使用
3. 本地没有 → 提示用户选择安装或跳过

---

## 创建 Skill

**流程：先本地，后网络**

1. 检查本地是否有 skill-creator：
```bash
ls ~/.npm-global/lib/node_modules/openclaw/skills/skill-creator
```

2. 本地有 → 读取并使用

---

## 一键发布到 ClawHub

**发布流程：**

1. **确认命名规范**
   - slug: 全小写 + 连字符（从 SKILL.md 的 `name` 字段读取）
   - 显示名: 首字母大写，可加中文

2. **生成显示名**
   - 将 slug 转为首字母大写：`skill-finder-cn` → `Skill Finder CN`
   - 可选添加中文后缀

3. **执行发布**
```bash
clawhub publish ~/.openclaw/skills/<slug> \
  --slug <slug> \
  --name "<Display Name>" \
  --version <version> \
  --changelog "<changelog>"
```

4. **更新本地 _meta.json**
   发布成功后，自动更新或创建 `_meta.json`：
```json
{
  "ownerId": "<owner_id>",
  "slug": "<slug>",
  "version": "<version>",
  "publishedAt": <timestamp>
}
```

**示例：**
```bash
# 发布 skill-finder-cn v1.0.0
clawhub publish ~/.openclaw/skills/skill-finder-cn \
  --slug skill-finder-cn \
  --name "Skill Finder CN | Skill 查找器" \
  --version 1.0.0 \
  --changelog "Initial release"
```

---

## 批量检测与更新

### 步骤 1：扫描本地 Skills

```bash
ls ~/.openclaw/skills/
```

### 步骤 2：逐个检测

对每个本地 skill：

1. 读取本地 `_meta.json` 获取当前版本
2. 搜索 ClawHub 获取远程版本：
```bash
clawhub search <slug>
```
3. 对比版本号和更新日期

### 步骤 3：生成报告

| Skill | 本地版本 | 远程版本 | 状态 | 更新日期 |
|-------|----------|----------|------|----------|
| skill-finder-cn | 1.0.0 | 1.1.0 | ⬆️ 可更新 | 2026-03-01 |
| bilibili-messager | 1.1.0 | 1.1.0 | ✅ 最新 | 2026-02-28 |
| my-custom-skill | - | - | 🏠 本地-only | - |

### 步骤 4：询问用户

```
发现 2 个可更新的 skill：
1. skill-finder-cn (1.0.0 → 1.1.0)
2. another-skill (1.0.0 → 1.2.0)

是否全部更新？输入：
- all: 更新全部
- 1,2: 仅更新指定
- skip: 跳过
```

### 步骤 5：执行更新

```bash
clawhub update <slug> --force
```

### 步骤 6：更新后报告

```
✅ 更新完成：
- skill-finder-cn: 1.0.0 → 1.1.0
- another-skill: 1.0.0 → 1.2.0

请重启会话以加载新版本。
```

---

## 更新检查（单个 Skill）

1. 搜索 ClawHub 查看最新版本：
```bash
clawhub search <skill-name>
```
2. 对比本地版本（查看 `_meta.json` 或 SKILL.md）
3. 更新命令：
```bash
clawhub update <skill-name> --force
```

---

## 嵌套引用

本 skill 通过**路径引用**其他 skills，不嵌入全文：

| 场景 | 引用路径 |
|------|----------|
| 搜索 skills | `~/.openclaw/skills/<搜索skill名>/SKILL.md` |
| 创建 skill | `~/.npm-global/lib/node_modules/openclaw/skills/skill-creator/SKILL.md` |
| 安全审计 | `~/.openclaw/skills/<审计skill名>/SKILL.md` |

**好处：** 被引用 skill 更新时，自动获得最新版本。
