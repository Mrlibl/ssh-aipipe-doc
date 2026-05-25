<template>
<div class="doc-page">
  <h1>Zotero GPT 配置方法</h1>

  <h2>1. 安装插件</h2>
  <p>先在 Zotero 中安装好 GPT 相关插件。</p>

  <h2>2. 设置秘钥和中转地址</h2>
  <p>打开插件设置界面，按以下内容填写：</p>
  
  <div class="code-block">
    <pre><code>/secrekey sk-xxxxxxxxxxxxxx
/api https://api.aipipe.io</code></pre>
  </div>

  <p>看不懂可以看视频教程：</p>
  <p><a href="https://www.bilibili.com/video/BV1witSe6EFb/" target="_blank">https://www.bilibili.com/video/BV1witSe6EFb/</a></p>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

