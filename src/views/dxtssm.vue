<template>
  <!-- 改用公共 class：doc-page -->
  <div class="doc-page">
    <h1>{{ title }}</h1>

    <h2>1. 点击「调试」按钮</h2>
    <img class="doc-img" src="./../assets/image/dxtssm/1a1425d9-f90c-45e0-a5d7-457f56f44f80.png" alt="" />

    <h2>2. 设置 OpenAI 的 api_key</h2>
    <img class="doc-img" src="./../assets/image/dxtssm/40fac302-ef3a-4587-8d8c-208ec50c5710.png" alt="" />

    <h2>该环境变量的 api_key 只保存在本地，不会同步到服务器，团队成员之间也不会相互同步。</h2>
    <img class="doc-img" src="./../assets/image/dxtssm/94477648-7208-4480-a213-7bcc47c62ae5.png" alt="" />

    <h2>3. 点击 “发送” 按钮，即可发起请求</h2>
    <img class="doc-img" src="./../assets/image/dxtssm/3eb7aaa5-489f-498b-b707-aafe7b656364.png" alt="" />

    <h2>常见问题 FAQ</h2>

    <h3>1. 云端 Agent 错误</h3>
    <img class="doc-img" src="./../assets/image/dxtssm/de63381e-606f-4a3a-b4b8-88baebe42468.png" alt="" />
    <p>需要安装 Apifox 的插件：Apifox Browser Extension。</p>

    <h3>2. Invalid authorization header</h3>
    <img class="doc-img" src="./../assets/image/dxtssm/73411971-99e3-4b0e-8cb1-937a3790d977.png" alt="" />
    <p>需要在环境变量中设置 OpenAI 的 api_key</p>

    <h3>3. 无法请求地址 api.openai.com</h3>
    <img class="doc-img" src="./../assets/image/dxtssm/2dbce401-d667-4890-8f7e-5f8beb412ab7.png" alt="" />
    <p>需要梯子，即需要科学上网（且要开全局代理)</p>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<!-- 只加公共样式里没有的图片样式，其余全部共用 -->
<style scoped>

</style>