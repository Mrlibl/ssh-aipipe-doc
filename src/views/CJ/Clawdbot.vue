<template>
<div class="doc-page">
  <h1>OpenClaw Clawdbot 自定义中转站配置教程</h1>

  <h2>第一步：安装与基础初始化</h2>
  <p>首先确保你已经安装了 Node.js 环境，然后在终端执行：</p>
  <p>1. 全局安装：</p>
  <div class="code-block">
    <pre><code>npm i -g clawdbot</code></pre>
  </div>
  <p>2. 执行引导（根据提示完成基础设置）：</p>
  <div class="code-block">
    <pre><code>clawdbot onboard</code></pre>
  </div>
  <p>注意：在 Windows 原生环境下，如果提示 openclaw 不是命令，请统一使用 clawdbot。</p>

  <h2>第二步：修改主配置文件 clawdbot.json</h2>
  <p>打开路径：C:\Users\Administrator\.clawdbot\clawdbot.json</p>
  <p>将 models 和 auth 部分修改为以下内容，以支持自定义中转站。</p>
  <div class="code-block">
    <pre><code>{
  "agents": {
    "defaults": {
      "workspace": "C:\\Users\\Administrator\\clawd",
      "models": {
        "api-proxy-gpt/gpt-4o": { "alias": "GPT-4o" },
        "api-proxy-claude/claude-sonnet-4-5-20250929": { "alias": "Claude Sonnet 4.5" },
        "api-proxy-google/gemini-3-pro-preview": { "alias": "Gemini 3 Pro" }
      },
      "model": {
        "primary": "api-proxy-claude/claude-sonnet-4-5-20250929"
      }
    }
  },
  "auth": {
    "profiles": {
      "api-proxy-gpt:default": { "provider": "api-proxy-gpt", "mode": "api_key" },
      "api-proxy-claude:default": { "provider": "api-proxy-claude", "mode": "api_key" },
      "api-proxy-google:default": { "provider": "api-proxy-google", "mode": "api_key" }
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "api-proxy-gpt": {
        "baseUrl": "https://api.aipipe.io/v1",
        "api": "openai-completions",
        "models": [
          { "id": "gpt-4o", "name": "GPT-4o", "contextWindow": 128000, "maxTokens": 8192 }
        ]
      },
      "api-proxy-claude": {
        "baseUrl": "https://api.aipipe.io",
        "api": "anthropic-messages",
        "models": [
          { "id": "claude-sonnet-4-5-20250929", "name": "Claude Sonnet 4.5", "contextWindow": 200000, "maxTokens": 8192 }
        ]
      },
      "api-proxy-google": {
        "baseUrl": "https://api.aipipe.io/v1beta",
        "api": "google-generative-ai",
        "models": [
          { "id": "gemini-3-pro-preview", "name": "Gemini 3 Pro", "contextWindow": 2000000, "maxTokens": 8192 }
        ]
      }
    }
  }
}</code></pre>
  </div>

  <h2>第三步：配置鉴权文件 auth-profiles.json</h2>
  <p>打开路径：C:\Users\Administrator\.clawdbot\agents\main\agent\auth-profiles.json</p>
  <p>在此处填入你从中转站获取的真实 API Key。</p>
  <div class="code-block">
    <pre><code>{
  "version": 1,
  "profiles": {
    "api-proxy-gpt:default": {
      "type": "api_key",
      "provider": "api-proxy-gpt",
      "key": "sk-your-unique-gpt-key-here"
    },
    "api-proxy-claude:default": {
      "type": "api_key",
      "provider": "api-proxy-claude",
      "key": "sk-your-unique-claude-key-here"
    },
    "api-proxy-google:default": {
      "type": "api_key",
      "provider": "api-proxy-google",
      "key": "sk-your-unique-google-key-here"
    }
  },
  "lastGood": {
    "api-proxy-gpt": "api-proxy-gpt:default",
    "api-proxy-claude": "api-proxy-claude:default",
    "api-proxy-google": "api-proxy-google:default"
  }
}</code></pre>
  </div>

  <h2>第四步：检查并启动</h2>
  <p>1. 运行健康检查：</p>
  <div class="code-block">
    <pre><code>clawdbot doctor</code></pre>
  </div>
  <p>2. 启动 Gateway 服务：</p>
  <div class="code-block">
    <pre><code>clawdbot gateway</code></pre>
  </div>
  <p>3. 访问控制台：</p>
  <p>打开浏览器访问 http://127.0.0.1:18789/，使用 clawdbot onboarding 结尾输出的 Token 登录即可开始调教你的 AI Agent。</p>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

