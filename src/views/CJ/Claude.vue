<template>
<div class="doc-page">
  <h1>Claude Code 安装使用教程</h1>
  <p>Claude Code 是一个强大的 AI 编程助手，让您可以直接在终端中与 AI 协作编程。本教程将指导您完成安装和配置过程。</p>

  <h2>📋 系统要求</h2>
  <ul class="explain">
    <li>Node.js 版本 ≥ 18.0</li>
    <li>支持的操作系统：macOS、Linux、Windows (WSL)</li>
  </ul>

  <h2>🚀 快速开始</h2>
  <h3>1. 安装 Node.js</h3>
  <p>💡 提示：如果您已经安装了 Node.js 18.0 或更高版本，可以跳过此步骤。</p>

  <p><strong>Ubuntu / Debian 用户</strong></p>
  <div class="code-block">
    <pre><code># 安装 Node.js LTS 版本
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt-get install -y nodejs

# 验证安装
node --version</code></pre>
  </div>

  <p><strong>macOS 用户</strong></p>
  <div class="code-block">
    <pre><code># 安装 Xcode 命令行工具
sudo xcode-select --install

# 安装 Homebrew（如果尚未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 通过 Homebrew 安装 Node.js
brew install node

# 验证安装
node --version</code></pre>
  </div>

  <h3>2. 安装 Claude Code</h3>
  <p>使用 npm 全局安装 Claude Code：</p>
  <div class="code-block">
    <pre><code>npm install -g @anthropic-ai/claude-code

# 验证安装
claude --version</code></pre>
  </div>

  <h3>3. 配置并开始使用</h3>
  <p>获取必要的配置信息</p>
  <p>您需要准备两个重要的配置项：</p>
  <ul class="explain">
    <li>ANTHROPIC_AUTH_TOKEN：API 认证令牌，注册后在 API令牌 页面点击 添加令牌 获得（以 sk- 开头）</li>
    <li>ANTHROPIC_BASE_URL：API 服务地址，使用 https://api.aipipe.io（与主站地址相同）</li>
  </ul>

  <p>📝 创建令牌时的建议设置：</p>
  <ul class="explain">
    <li>名称：随意命名</li>
    <li>额度：设为无限额度</li>
    <li>分组：选择Claude code专属或者官转克劳德3及以上</li>
    <li>其他选项：保持默认设置</li>
  </ul>

  <p><strong>启动 Claude Code</strong></p>
  <p>在您的项目目录下运行：</p>

  <p><strong>Linux/Unix 设置环境变量</strong></p>
  <div class="code-block">
    <pre><code># 进入项目目录
cd your-project-folder

# 设置环境变量
export ANTHROPIC_AUTH_TOKEN=sk-...  # 替换为您的实际令牌
export ANTHROPIC_BASE_URL=https://api.aipipe.io
export API_TIMEOUT_MS=300000  # 设置为 300 秒超时

# 启动 Claude Code
claude</code></pre>
  </div>

  <p><strong>Windows PowerShell 设置环境变量</strong></p>
  <div class="code-block">
    <pre><code># 进入项目目录
cd your-project-folder

$env:ANTHROPIC_BASE_URL = "https://api.aipipe.io"
$env:ANTHROPIC_AUTH_TOKEN = "sk-..."
$env:API_TIMEOUT_MS = "300000"  # 设置为 300 秒超时

# 启动 Claude Code
claude</code></pre>
  </div>

  <p><strong>Windows CMD 设置环境变量</strong></p>
  <div class="code-block">
    <pre><code># 进入项目目录
cd your-project-folder

set ANTHROPIC_BASE_URL=https://api.aipipe.io
set ANTHROPIC_AUTH_TOKEN=sk-...
set API_TIMEOUT_MS=300000

# 启动 Claude Code
claude</code></pre>
  </div>

  <h3>初次运行配置</h3>
  <p>启动后，您将看到以下配置步骤：</p>
  <ul class="explain">
    <li>选择主题 → 选择您喜欢的主题 + 按 Enter</li>
    <li>安全须知 → 确认安全须知 + 按 Enter</li>
    <li>Terminal 配置 → 使用默认配置 + 按 Enter</li>
    <li>工作目录信任 → 信任当前目录 + 按 Enter</li>
  </ul>
  <p>✨ 恭喜！ 现在您可以开始与您的 AI 编程搭档一起写代码了！</p>

  <h2>❓ 常见问题解答</h2>
  <p><strong>Q: 遇到 "Invalid API Key · Please run /login" 错误？</strong></p>
  <p>A: 这表明 Claude Code 未检测到环境变量。请检查：</p>
  <ul class="explain">
    <li>是否正确设置了 ANTHROPIC_AUTH_TOKEN 和 ANTHROPIC_BASE_URL</li>
    <li>环境变量值是否正确（令牌以 sk- 开头）</li>
    <li>如果使用了永久配置，是否重启了终端</li>
  </ul>

  <p><strong>Q: 为什么显示 "offline" 状态？</strong></p>
  <p>A: Claude Code 通过连接 Google 来判断网络状态。显示 "offline" 不影响正常使用，只是表明无法连接到 Google。</p>

  <p><strong>Q: 为什么浏览网页的 Fetch 会失败？</strong></p>
  <p>A: Claude Code 在访问网页前需要调用 Claude 服务进行安全检查。您需要：</p>
  <ul class="explain">
    <li>保持稳定的国际互联网连接</li>
    <li>必要时使用全局代理</li>
  </ul>

  <p><strong>Q: 请求总是显示 "fetch failed"？</strong></p>
  <p>A: 可能是网络环境导致的问题。解决方案：尝试使用代理工具</p>

  <p><strong>Q: API 报错如何处理？</strong></p>
  <p>A: 可能是转发代理不稳定导致的，建议：</p>
  <ul class="explain">
    <li>退出 Claude Code（Ctrl+C）</li>
    <li>重新运行 claude 命令</li>
    <li>如果问题持续，请稍后再试</li>
  </ul>

  <p><strong>Q: 网页登录错误？</strong></p>
  <p>A: 尝试清除本站的 Cookie，然后重新登录。</p>

  <h2>📌 注意事项</h2>
  <ul class="explain">
    <li>本站直接接入官方 Claude Code 转发服务</li>
    <li>仅支持 Claude Code 的 API 流量，不支持其他 API 调用</li>
    <li>请妥善保管您的 API 令牌，避免泄露</li>
  </ul>

  <h2>🔗 相关链接</h2>
  <ul class="explain">
    <li>Claude Code 官方文档</li>
    <li>Node.js 官方网站</li>
  </ul>

  <p>💡 提示：如遇到其他问题，请查看官方文档或联系技术支持。</p>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

