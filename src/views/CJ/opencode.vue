<template>
<div class="doc-page">
  <h1>opencode 配置教程</h1>

  <p>先安装opencode</p>
  <p>官方文档</p>
  <p>使用nodejs</p>

  <div class="code-block">
    <pre><code>npm install -g opencode-ai</code></pre>
  </div>

  <p>配置提供者</p>
  <p>https://opencode.ai/docs/providers/</p>

  <p>配置两个地方</p>

  <h3>提供者配置(没有这个文件就新建)</h3>
  <p>~ 代表用户的工作目录 如windows上 C:\Users\admin</p>
  <p>~/.config/opencode/opencode.json</p>

  <div class="code-block">
    <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "baseURL": "https://api.aipipe.io/v1"
      }
    }
  }
}</code></pre>
  </div>

  <p>这里我替换了现有的 anthropic 地址</p>

  <h3>密钥配置</h3>
  <p>这里我们配置一个 claude 平台的，在我们网站控制台，创建key 并选择我们claude相关分组 如claude 专属</p>
  <p>~/.local/share/opencode/auth.json</p>

  <div class="code-block">
    <pre><code>{
  "google": {
    "type": "api",
    "key": "1111111111111111111"
  },
  "anthropic": {
    "type": "api",
    "key": "sk-xxxxxxxxxxxxx"
  }
}</code></pre>
  </div>

  <p>打开终端</p>
   <img class="doc-img" src="./../../assets/image/cj/opencode/1.png" alt="" />

  <p>输入 /models</p>
 <img class="doc-img" src="./../../assets/image/cj/opencode/2.png" alt="" />

  <p>选择 anthropic 中的一个模型</p>
 <img class="doc-img" src="./../../assets/image/cj/opencode/3.png" alt="" />

  <p>开始使用</p>
<img class="doc-img" src="./../../assets/image/cj/opencode/4.png" alt="" />
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

