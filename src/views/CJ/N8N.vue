<template>
<div class="doc-page">
  <h1>N8N 工作流使用中转API 教程</h1>

  <p>1. 创建一个新的工作流</p>
  <img class="doc-img" src="./../../assets/image/cj/N8N/1.png" alt="" />

  <p>2. 选择合适的触发方式,我选择的是第一个,手动触发</p>
  <img class="doc-img" src="./../../assets/image/cj/N8N/2.png" alt="" />

  <p>3. 添加下一个工作流模块</p>
   <img class="doc-img" src="./../../assets/image/cj/N8N/3.png" alt="" />

  <p>4. 选择openai</p>
   <img class="doc-img" src="./../../assets/image/cj/N8N/4.png" alt="" />

  <p>5. 聊天必须选择 message a model</p>
   <img class="doc-img" src="./../../assets/image/cj/N8N/5.png" alt="" />

  <p>6. 开始配置 中转API</p>
   <img class="doc-img" src="./../../assets/image/cj/N8N/6.png" alt="" />
  <p>APIKEY在 API令牌页面生成获取</p>
  <p>Base URL 填写 我们中转地址 https://api.openai.com/v1 改成 https://api.aipipe.io/v1</p>
  <p>点击 save 保存</p>

  <p>7. 点击保存后提示如下,代表链接成功</p>
    <img class="doc-img" src="./../../assets/image/cj/N8N/7.png" alt="" />

  <p>8. 我简单的配置一下这个模块</p>
  <img class="doc-img" src="./../../assets/image/cj/N8N/8.png" alt="" />
    <img class="doc-img" src="./../../assets/image/cj/N8N/9.png" alt="" />

  <p>我点击 Execute step 进行测试运行</p>
    <img class="doc-img" src="./../../assets/image/cj/N8N/10.png" alt="" />

  <p>完美响应</p>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

