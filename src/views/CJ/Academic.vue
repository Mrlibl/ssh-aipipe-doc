<template>
<div class="doc-page">
  <h1>ChatGPT 学术优化（GPT Academic）配置教程</h1>

  <h2>1. 打开 config 配置文件</h2>
  <p>找到项目中的配置文件并打开。</p>

  <h2>2. 修改以下两项关键配置</h2>
  <div class="code-block">
    <pre><code>API_URL_REDIRECT = {"https://api.openai.com/v1/chat/completions": "https://api.aipipe.io/v1/chat/completions"}
API_KEY = "sk-xxxxxxxxxXXXXX"</code></pre>
  </div>

  <h2>3. 重新运行程序</h2>
  <p>保存配置文件，重启项目即可生效。</p>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

