<template>
<div class="doc-page">
  <h1>CLAUDE DEV 配置教程</h1>

  <h2>模型配置</h2>
  <p>如果使用克劳德模型，只需要在 model id 这里添加：</p>
  <div class="code-block">
    <pre><code>cursor-3-5-sonnet-20240620</code></pre>
  </div>
  <p>或：</p>
  <div class="code-block">
    <pre><code>claude-3-5-sonnet-20240620</code></pre>
  </div>

  <img class="doc-img" src="./../../assets/image/cj/DEV/4eb2aab1-4e86-43be-9f24-f52b2d60c89a.png" alt="" />

  <h2>接口地址</h2>
  <p>Base URL 填写：</p>
  <div class="code-block">
    <pre><code>https://api.aipipe.io</code></pre>
  </div>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

