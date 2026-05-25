<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />
    <h3>接口：POST /api/upload &nbsp;&nbsp; <span style="color:#f44336;font-weight:bold;">（开发中）</span></h3>
    <br>

    <!-- Authorization -->
    <div class="param-section">
      <div class="section-header" @click="toggleSection('auth')">
        <span class="section-title">Authorization</span>
        <span class="arrow" :class="{ open: openSections.auth }">▼</span>
      </div>
      <div class="section-content" v-show="openSections.auth">
        <p>在 Header 添加参数 <code>Authorization</code>，其值为在 Bearer 之后拼接 Token</p>
        <p>示例：<code>Authorization: Bearer ********************</code></p>
      </div>
    </div>

    <!-- Body 参数 -->
    <div class="body-section">
      <div class="section-title">
        Body 参数
        <span class="body-type">multipart/form-data</span>
      </div>
      <div class="body-content">
        <div class="param-list">
          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>file</code></div>
              <div class="param-type">file</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
              要上传的图片文件
              <br>示例：file://C:\Users\Administrator\Desktop\d63ea1bd9011777e653b1addc7a88433.png
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: '上传图片到图床'
  }
})

const openSections = ref({
  auth: true
})

const toggleSection = (key) => {
  openSections.value[key] = !openSections.value[key]
}
</script>

<style scoped>
</style>