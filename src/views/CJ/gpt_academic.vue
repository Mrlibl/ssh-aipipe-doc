<template>
<div class="doc-page"><h1>开源 gpt_academic 配置教程</h1>
<p>找到 config.py 文件中的 API_URL_REDIRECT 配置并修改为以下内容：</p>
<div class="code-block"><pre><code>API_URL_REDIRECT = {"https://api.openai.com/v1/chat/completions": "https://api.aipipe.io/v1/chat/completions"}</code></pre></div></div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

