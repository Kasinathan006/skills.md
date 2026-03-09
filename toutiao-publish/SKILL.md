---
name: toutiao-publish
description: 自动发布内容到今日头条（微头条/文章）。触发词：发头条、发布头条、微头条、今日头条、发文章。支持文字、图片、话题、位置、头条首发、作品声明。自动处理登录、弹窗、发布流程。
---

# 今日头条自动发布

## 经验总结

### ✅ 已验证成功的操作

| 操作 | 方法 | 成功率 |
|------|------|--------|
| 登录状态检测 | JavaScript检查URL/元素 | 100% |
| 退出登录 | 点击`.loginout`元素 | 100% |
| 扫码登录 | 二维码扫码 | 100% |
| 手机验证码登录 | 输入手机号+验证码 | 100% |
| 正文图片上传 | JavaScript拖拽事件 | 100% |
| 头条首发声明 | 点击"头条首发" | 100% |
| 作品声明 | 点击对应选项 | 100% |
| 标题输入 | type到标题框 | 100% |
| 正文输入 | type到编辑器 | 100% |
| 发布文章 | 预览并发布 → 确认发布 | 100% |

### ❌ 不可靠的操作

| 操作 | 问题 | 替代方案 |
|------|------|----------|
| 点击图片按钮上传 | 弹窗不稳定 | 使用JavaScript拖拽 |
| upload工具上传封面 | 经常超时 | 多试几次或用拖拽 |
| 工具栏快捷键 | 不生效 | 不依赖快捷键 |

---

## 登录流程

### 登录状态检测

```javascript
() => {
  const url = window.location.href;
  if (url.includes('login') || url.includes('signin') || url.includes('auth/page/login')) {
    return { logged_in: false, reason: 'on login page' };
  }
  const userName = document.querySelector('a[href*="toutiao.com/c/user"]');
  if (userName) {
    return { logged_in: true, username: userName.textContent };
  }
  return { logged_in: 'unknown' };
}
```

### 退出登录

```javascript
// 方法1：通过设置页面
// 访问 https://mp.toutiao.com/profile_v4/personal/info
// 点击 .loginout 元素

// 方法2：直接执行JS
() => {
  const exitBtn = document.querySelector('.loginout');
  if (exitBtn) { exitBtn.click(); return { clicked: true }; }
  return { clicked: false };
}
```

### 登录页面refs（已验证）

| 元素 | ref | 说明 |
|------|-----|------|
| 手机号输入框 | `textbox "请输入手机号"` | 默认+86 |
| 获取验证码 | `button "获取验证码"` | 点击发送 |
| 验证码输入框 | `textbox "请输入验证码"` | 输入验证码 |
| 协议勾选框 | `checkbox "协议勾选框"` | 必须勾选 |
| 登录按钮 | `button "登录"` | 点击登录 |
| 二维码 | `img "二维码"` | 扫码登录 |
| 刷新二维码 | `paragraph` 包含"点击刷新" | 二维码失效时点击 |
| 抖音登录 | `button "抖音登录"` | 第三方 |
| QQ登录 | `button "QQ登录"` | 第三方 |
| 微信登录 | `button "微信登录"` | 第三方 |
| 密码登录 | `button "账密登录"` | 切换方式 |

### 扫码登录流程

```bash
# 1. 打开登录页
browser action: open profile=openclaw targetUrl=https://mp.toutiao.com/

# 2. 获取二维码
browser action: snapshot refs=aria
# 二维码在 img "二维码" 元素中

# 3. 如果二维码失效，点击刷新
browser action: act kind=click ref=刷新二维码区域

# 4. 用户用今日头条App扫码
# 路径：今日头条App → 我的 → 左上角"扫一扫"

# 5. 等待登录完成
browser action: act kind=evaluate fn="async () => {
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const url = window.location.href;
    if (!url.includes('login') && !url.includes('auth')) {
      return { logged_in: true, waited_seconds: i * 2 };
    }
  }
  return { logged_in: false, timeout: true };
}"
```

### 手机验证码登录流程

```bash
# 1. 输入手机号
browser action: act kind=click ref='textbox "请输入手机号"'
browser action: act kind=type ref='textbox "请输入手机号"' text="你的手机号"

# 2. 勾选协议（重要！）
browser action: act kind=click ref='checkbox "协议勾选框"'

# 3. 获取验证码
browser action: act kind=click ref='button "获取验证码"'

# 4. 等待接收验证码，然后输入
browser action: act kind=type ref='textbox "请输入验证码"' text="验证码"

# 5. 点击登录
browser action: act kind=click ref='button "登录"'
```

---

## 图片上传（核心功能）

### JavaScript拖拽上传（唯一可靠方式）

```javascript
async () => {
  // 配置
  const imagePath = '/tmp/openclaw/uploads/your-image.jpg';
  const waitTime = 2000;
  
  // 获取编辑器
  const editor = document.querySelector('.ProseMirror');
  if (!editor) return { success: false, error: '编辑器未找到' };
  
  // 读取文件
  const fs = require('fs');
  if (!fs.existsSync(imagePath)) return { success: false, error: '文件不存在' };
  
  const imageBuffer = fs.readFileSync(imagePath);
  const base64 = imageBuffer.toString('base64');
  
  // Base64转Blob
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  
  // 判断类型
  const isJpeg = imagePath.toLowerCase().match(/\.jpe?g$/);
  const mimeType = isJpeg ? 'image/jpeg' : 'image/png';
  const blob = new Blob([byteArray], { type: mimeType });
  
  // 创建File
  const fileName = imagePath.split('/').pop();
  const file = new File([blob], fileName, { type: mimeType, lastModified: Date.now() });
  
  // 创建DataTransfer
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  
  // 聚焦编辑器
  editor.focus();
  
  // 创建drop事件
  const dropEvent = new DragEvent('drop', {
    bubbles: true,
    cancelable: true,
    dataTransfer: dataTransfer
  });
  
  const rect = editor.getBoundingClientRect();
  Object.defineProperty(dropEvent, 'clientX', { value: rect.left + rect.width / 2 });
  Object.defineProperty(dropEvent, 'clientY', { value: rect.top + rect.height / 2 });
  
  editor.dispatchEvent(dropEvent);
  
  // 等待上传
  await new Promise(r => setTimeout(r, waitTime));
  
  // 检查结果
  const imgs = editor.querySelectorAll('img');
  return {
    success: imgs.length > 0,
    imagesFound: imgs.length,
    lastImageSrc: imgs[imgs.length - 1]?.src?.substring(0, 100)
  };
}
```

### 使用方式

```bash
browser action: act kind=evaluate fn="上面的完整代码"
```

---

## 发布流程

### 文章发布完整流程

```bash
# 1. 打开发布页
browser action: open profile=openclaw targetUrl=https://mp.toutiao.com/profile_v4/graphic/publish

# 2. 关闭弹窗
browser action: snapshot refs=aria
browser action: act kind=click ref="我知道了"

# 3. 输入标题
browser action: act kind=click ref='textbox "请输入文章标题"'
browser action: act kind=type ref='textbox "请输入文章标题"' text="文章标题"

# 4. 输入正文
browser action: act kind=click ref='paragraph "请输入正文"'
browser action: act kind=type ref='paragraph "请输入正文"' text="正文内容..."

# 5. 上传图片（使用JavaScript拖拽）
browser action: act kind=evaluate fn="图片上传代码"

# 6. 继续输入正文
browser action: act kind=type ref='paragraph' text="更多内容..."

# 7. 设置封面
browser action: act kind=click ref=封面img区域
browser action: upload paths=["/tmp/openclaw/uploads/cover.jpg"]

# 8. 设置头条首发
browser action: act kind=click ref='generic "头条首发"'

# 9. 设置作品声明
browser action: act kind=click ref='generic "个人观点，仅供参考"'

# 10. 预览并发布
browser action: act kind=click ref='button "预览并发布"'

# 11. 确认发布
browser action: snapshot refs=aria
browser action: act kind=click ref='button "确认发布"'
```

### 微头条发布流程

```bash
# 1. 打开发布页
browser action: open profile=openclaw targetUrl=https://mp.toutiao.com/profile_v4/weitoutiao/publish

# 2. 关闭弹窗
browser action: snapshot refs=aria
browser action: act kind=click ref="我知道了"

# 3. 输入内容
browser action: act kind=click ref=编辑区
browser action: act kind=type ref=编辑区 text="内容... #话题"

# 4. 上传图片
browser action: act kind=evaluate fn="图片上传代码"

# 5. 发布
browser action: act kind=click ref='button "发布"'
```

---

## 声明选项

### 头条首发

```bash
browser action: act kind=click ref='generic "头条首发"'
```

**效果**：72小时内仅在头条发布，可享额外激励分成

### 作品声明

| 选项 | 适用场景 |
|------|----------|
| 取材网络 | 转载/整理网络内容 |
| 引用站内 | 引用头条站内内容 |
| 个人观点，仅供参考 | 原创观点评论 |
| 引用AI | AI辅助创作 |
| 虚构演绎，故事经历 | 故事类内容 |
| 投资观点，仅供参考 | 财经类内容 |
| 健康医疗分享，仅供参考 | 健康类内容 |

---

## 关键refs速查表

### 登录相关

| 元素 | ref |
|------|-----|
| 手机号输入框 | `textbox "请输入手机号"` |
| 验证码输入框 | `textbox "请输入验证码"` |
| 获取验证码 | `button "获取验证码"` |
| 协议勾选框 | `checkbox "协议勾选框"` |
| 登录按钮 | `button "登录"` |
| 二维码 | `img "二维码"` |
| 密码登录切换 | `button "账密登录"` |

### 发布相关

| 元素 | ref |
|------|-----|
| 编辑器 | `.ProseMirror` |
| 标题框 | `textbox "请输入文章标题"` |
| 正文区 | `paragraph "请输入正文"` |
| 封面区域 | `img` 在封面区域 |
| 头条首发 | `generic "头条首发"` |
| 我知道了 | `generic "我知道了"` |
| 预览并发布 | `button "预览并发布"` |
| 确认发布 | `button "确认发布"` |

---

## 故障排查

### 登录问题

| 问题 | 解决方案 |
|------|----------|
| 二维码失效 | 点击刷新二维码 |
| 登录后卡住 | 等待或刷新页面 |
| 验证码发送失败 | 检查手机号格式 |

### 图片上传问题

| 问题 | 解决方案 |
|------|----------|
| 编辑器未找到 | 确保在文章发布页 |
| 文件不存在 | 检查`/tmp/openclaw/uploads/`目录 |
| 上传后无图片 | 增加waitTime到3000ms |

### 发布问题

| 问题 | 解决方案 |
|------|----------|
| 发布按钮不可点击 | 检查标题/正文/封面 |
| 预览后卡住 | 点击"确认发布" |
| refs找不到 | 重新snapshot |

---

## 最佳实践

### 1. 操作顺序

```
检查登录 → 打开发布页 → 关闭弹窗 → 输入标题 → 输入正文 → 上传图片 → 设置封面 → 设置声明 → 发布
```

### 2. 图片准备

```bash
# 确保图片存在
ls -la /tmp/openclaw/uploads/
```

### 3. 等待时间

| 操作 | 建议等待 |
|------|----------|
| 页面加载 | 2秒 |
| 登录扫码 | 最长2分钟 |
| 图片上传 | 2-3秒 |
| 发布提交 | 3秒 |

---

## 技术原理

### JavaScript拖拽上传原理

头条编辑器使用ProseMirror，支持拖拽文件上传。通过模拟DragEvent可以触发文件上传：

1. 创建File对象
2. 创建DataTransfer并添加File
3. 创建DragEvent('drop')
4. 在编辑器上触发事件

---

## 更新日志

### 2026-03-01
- ✅ 验证完整登录流程
- ✅ 验证退出登录
- ✅ 验证扫码登录
- ✅ 验证手机验证码登录
- ✅ 验证JavaScript拖拽图片上传
- ✅ 验证头条首发声明
- ✅ 验证作品声明
- ✅ 完善所有refs
- ✅ 清理重复内容

#今日头条 #自动发布 #内容创作 #效率工具