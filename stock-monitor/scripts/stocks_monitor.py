#!/usr/bin/env python3
"""
多股票股价监控脚本
使用 Yahoo Finance
用法: python3 stocks_monitor.py [config_file]
默认读取 ~/.openclaw/workspace/memory/stocks_config.json
"""

import json
import os
import sys
from datetime import datetime
import urllib.request
import urllib.parse

ALERT_THRESHOLD_2PCT = 0.02  # 2%
ALERT_THRESHOLD_1PCT = 0.01  # 1%

def get_config_path():
    """获取配置文件路径"""
    if len(sys.argv) > 1:
        return sys.argv[1]
    return os.path.expanduser("~/.openclaw/workspace/memory/stocks_config.json")

def get_state_path():
    """获取状态文件路径"""
    return os.path.expanduser("~/.openclaw/workspace/memory/stocks_alert.json")

def load_config():
    """加载股票配置"""
    config_path = get_config_path()
    if os.path.exists(config_path):
        with open(config_path, 'r') as f:
            return json.load(f)
    # 默认配置
    return {
        "stocks": {
            "贵州茅台": {"symbol": "600519.SS", "base_price": 1600.0, "currency": "¥"},
            "腾讯控股": {"symbol": "0700.HK", "base_price": 512.0, "currency": "HK$"},
            "拼多多": {"symbol": "PDD", "base_price": 120.0, "currency": "$"}
        }
    }

def get_price(symbol):
    """从 Yahoo Finance 获取实时股价"""
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?interval=5m&range=1d"
    
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as response:
            data = json.loads(response.read().decode())
        
        if "chart" in data and "result" in data["chart"] and data["chart"]["result"]:
            result = data["chart"]["result"][0]
            meta = result.get("meta", {})
            price = meta.get("regularMarketPrice")
            if price:
                return float(price)
        return None
    except Exception as e:
        print(f"获取 {symbol} 股价失败: {e}")
        return None

def load_state():
    """加载状态"""
    state_path = get_state_path()
    if os.path.exists(state_path):
        with open(state_path, 'r') as f:
            return json.load(f)
    return {}

def save_state(state):
    """保存状态"""
    state_path = get_state_path()
    os.makedirs(os.path.dirname(state_path), exist_ok=True)
    with open(state_path, 'w') as f:
        json.dump(state, f, indent=2)

def check_stock(name, config):
    """检查单只股票"""
    symbol = config["symbol"]
    base = config["base_price"]
    currency = config["currency"]
    
    price = get_price(symbol)
    if not price:
        return f"{name}: 获取股价失败"
    
    state = load_state()
    if name not in state:
        state[name] = {"alerted": False, "alert_date": None, "base_price": base}
    
    stock_state = state[name]
    alerted = stock_state.get("alerted", False)
    alert_date = stock_state.get("alert_date")
    base_price = stock_state.get("base_price", base)
    
    today = datetime.now().strftime("%Y-%m-%d")
    
    # 计算涨跌
    change_pct = (price - base_price) / base_price * 100
    
    # 预警线
    alert_2pct_up = base_price * (1 + ALERT_THRESHOLD_2PCT)
    alert_2pct_down = base_price * (1 - ALERT_THRESHOLD_2PCT)
    alert_1pct_up = alert_2pct_up * (1 + ALERT_THRESHOLD_1PCT)
    alert_1pct_down = alert_2pct_up * (1 - ALERT_THRESHOLD_1PCT)
    
    message = None
    
    if not alerted:
        if price >= alert_2pct_up:
            message = f"🚀 {name}预警：现价 {currency}{price:.2f}，涨{change_pct:.2f}% 首次超2%"
            stock_state["alerted"] = True
            stock_state["alert_date"] = today
        elif price <= alert_2pct_down:
            message = f"🚀 {name}预警：现价 {currency}{price:.2f}，跌{abs(change_pct):.2f}% 首次超2%"
            stock_state["alerted"] = True
            stock_state["alert_date"] = today
    else:
        if alert_date == today:
            if price >= alert_1pct_up:
                change_from_alert = (price - alert_2pct_up) / alert_2pct_up * 100
                message = f"📈 {name}续警：现价 {currency}{price:.2f}，涨{change_from_alert:.2f}%"
            elif price <= alert_1pct_down:
                change_from_alert = (price - alert_2pct_up) / alert_2pct_up * 100
                message = f"📉 {name}续警：现价 {currency}{price:.2f}，跌{abs(change_from_alert):.2f}%"
        else:
            stock_state["alerted"] = False
            stock_state["alert_date"] = None
            stock_state["base_price"] = price
    
    stock_state["current_price"] = price
    stock_state["last_check"] = today
    save_state(state)
    
    if not message:
        direction = "涨" if change_pct > 0 else "跌"
        message = f"{name} 现价 {currency}{price:.2f}，{direction}{abs(change_pct):.2f}% (未达预警线)"
    
    return message

def main():
    config = load_config()
    stocks = config.get("stocks", {})
    
    if not stocks:
        print("请先配置股票列表")
        return
    
    results = []
    for name, cfg in stocks.items():
        result = check_stock(name, cfg)
        results.append(result)
    
    for r in results:
        print(r)

if __name__ == "__main__":
    main()
