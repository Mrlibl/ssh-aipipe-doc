<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />

    <h2>API Key 额度查询服务</h2>

    <h3>查询地址</h3>
    <ul class="explain">
      <li>https://chaxun.wlai.vip/</li>
      <li>https://key.tpkcur.click/</li>
    </ul>

    <h3>功能特点</h3>
    <ul class="explain">
      <li>无需登录即可查询</li>
      <li>仅需输入 API Key</li>
      <li>可查询当前额度余额</li>
      <li>可查询使用详情</li>
      <li>可查询消费记录</li>
    </ul>

    <h3>使用说明</h3>
    <ul class="explain">
      <li>访问查询地址</li>
      <li>输入需要查询的 API Key</li>
      <li>即可获取相关信息</li>
    </ul>

    <p class="tip">提示：此查询服务完全免费，方便用户随时了解自己的 API Key 使用情况</p>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>