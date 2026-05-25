<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />
    <h3>接口：POST /v1/audio/translations &nbsp;&nbsp; <span style="color:#f44336;font-weight:bold;">（不支持）</span></h3>
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
              <div class="param-required required">必需</div>
            </div>
            <div class="param-desc">
              要翻译的音频文件对象(不是文件名)，格式支持：flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav、webm。
              <br>示例：file://C:\Users\Administrator\Desktop\test.m4a
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>model</code></div>
              <div class="param-type">string</div>
              <div class="param-required required">必需</div>
            </div>
            <div class="param-desc">
              模型 ID，目前仅 whisper-1 可用
              <br>示例：gpt-4o-transcribe
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>prompt</code></div>
              <div class="param-type">string</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
             一个可选的文本,用于指导模型的风格或继续之前的音频段落。提示文本应该是英文。

            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>response_format</code></div>
              <div class="param-type">string</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
              翻译结果格式，可选：json、text、srt、verbose_json、vtt
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>temperature</code></div>
              <div class="param-type">number</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
采样温度,介于 0 和 1 之间。更高的值如 0.8 会使输出更随机,而较低的值如 0.2 会使其更聚焦和确定性。如果设置为 0,模型将使用对数概率自动提高温度直到达到特定阈值。            </div>
          </div>
        </div>

        <!-- 请求示例 -->

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: '创建翻译'
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