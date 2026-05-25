<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />

    <h2>1. LobeChat 项目</h2>
    <p><strong>访问地址</strong></p>
    <p><code>https://lobechat784894.zeabur.app</code></p>
    <p><strong>特点</strong></p>
    <ul class="explain">
      <li>基于 LobeChat 框架搭建</li>
      <li>界面美观，用户体验佳</li>
    </ul>

    <h2>2. ChatGPT-Web-Midjourney-Proxy 项目</h2>
    <p><strong>部署实例 1</strong></p>
    <p><strong>访问地址</strong></p>
    <p><code>https://web.apiplus.org</code></p>
    <p><strong>特点</strong></p>
    <ul class="explain">
      <li>支持 ChatGPT 对话</li>
      <li>集成 Midjourney 绘图功能</li>
    </ul>

    <h2>3. ChatGPT-Next-Web 项目</h2>
    <p><strong>访问地址</strong></p>
    <p><code>https://chatgptnetx.zeabur.app</code></p>
    <p><strong>特点</strong></p>
    <ul class="explain">
      <li>基于 ChatGPT-Next-Web 框架开发</li>
      <li>轻量级部署</li>
    </ul>

    <h2>注意事项</h2>
    <ul class="explain">
      <li>⭐ 所有项目均可免费使用</li>
      <li>🔖 建议保存多个地址作为备用</li>
      <li>⚠️ 不同项目可能存在：使用限制、功能差异、访问稳定性不同</li>
      <li>💡 建议根据实际需求选择合适的项目使用</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>