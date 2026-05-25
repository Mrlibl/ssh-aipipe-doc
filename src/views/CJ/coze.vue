<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />

    <h2>1. 创建一个新的项目</h2>
     <img class="doc-img" src="./../../assets/image/cj/coze/1.png" alt="" />
     <img class="doc-img" src="./../../assets/image/cj/coze/2.png" alt="" />
    <h2>2. 建立一个新的工作流</h2>
       <img class="doc-img" src="./../../assets/image/cj/coze/3.png" alt="" />
	        <img class="doc-img" src="./../../assets/image/cj/coze/4.png" alt="" />
    <h2>3. 添加 HTTP 请求</h2>
      <img class="doc-img" src="./../../assets/image/cj/coze/5.png" alt="" />
	       <img class="doc-img" src="./../../assets/image/cj/coze/6.png" alt="" />

    <h2>4. 填写内容</h2>
    <p>URL 填写：<code>http://api.aipipe.io/v1/chat/completions</code></p>
       <img class="doc-img" src="./../../assets/image/cj/coze/7.png" alt="" />

    <p>填写自己的 Key</p>
        <img class="doc-img" src="./../../assets/image/cj/coze/8.png" alt="" />

    <h2>5. 点击试运行，运行成功</h2>
      <img class="doc-img" src="./../../assets/image/cj/coze/9.png" alt="" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Coze 工作流使用中转 API 教程'
  }
})
</script>