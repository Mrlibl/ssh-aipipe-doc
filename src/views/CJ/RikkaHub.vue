<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />

    <p>目前仅支持安卓手机端</p>

    <h2>下载安装</h2>
    <p>官网下载地址：<a href="https://rikka-ai.com/" target="_blank">https://rikka-ai.com/</a></p>
 <img class="doc-img" src="./../../assets/image/cj/RikkaHub/33e5d174-8b4b-4c29-b7b2-a8316ccceb99.png" alt="" />

  <img class="doc-img" src="./../../assets/image/cj/RikkaHub/1760a8e0-fc09-499f-8721-2798ffa75400.png" alt="" />
 
  <img class="doc-img" src="./../../assets/image/cj/RikkaHub/5d1522c4-9271-4ad7-9c88-26f725326c11.png" alt="" />

   <img class="doc-img" src="./../../assets/image/cj/RikkaHub/f15c14d9-dd93-4d10-aac1-795eae18e0d0.png" alt="" />
   <img class="doc-img" src="./../../assets/image/cj/RikkaHub/cc7e1fe4-e765-46bd-b6f8-deb7315ffd03.png" alt="" />
    <h2>接口配置</h2>
    <p>• Base URL 填写：<code>https://api.aipipe.io/v1</code></p>
    <p>• API key 填写自己的key</p>
<img class="doc-img" src="./../../assets/image/cj/RikkaHub/5.png" alt="" />
<img class="doc-img" src="./../../assets/image/cj/RikkaHub/6.png" alt="" />
<img class="doc-img" src="./../../assets/image/cj/RikkaHub/7.png" alt="" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "RikkaHub 配置教程"
  }
})
</script>