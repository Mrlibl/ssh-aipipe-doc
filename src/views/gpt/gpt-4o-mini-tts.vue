<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />
    <h3>接口：POST /v1/audio/speech</h3>
    <a href="https://platform.openai.com/docs/guides/text-to-speech" target="_blank">
      官方文档：https://platform.openai.com/docs/guides/text-to-speech
    </a>
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
        <span class="body-type">application/json</span>
      </div>
      <div class="body-content">
        <div class="param-list">
          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>model</code></div>
              <div class="param-type">string</div>
              <div class="param-required required">必需</div>
            </div>
            <div class="param-desc">
              TTS 模型，支持：gpt-4o-mini-tts、tts-1、tts-1-hd
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>input</code></div>
              <div class="param-type">string</div>
              <div class="param-required required">必需</div>
            </div>
            <div class="param-desc">
              要生成语音的文本，最大长度 4096 个字符
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>voice</code></div>
              <div class="param-type">string</div>
              <div class="param-required required">必需</div>
            </div>
            <div class="param-desc">
              音色：alloy、echo、fable、onyx、nova、shimmer
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>response_format</code></div>
              <div class="param-type">string</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
              音频格式，默认 mp3；支持：mp3、opus、aac、flac
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>speed</code></div>
              <div class="param-type">number</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
              播放速度，默认 1.0；范围 0.25～4.0
            </div>
          </div>
        </div>

        <!-- 请求示例 -->
        <div class="example-panel">
          <div class="example-title">请求示例</div>
          <pre class="code-example"><code>{
  "model": "gpt-4o-mini-tts",
  "input": "The quick brown fox jumped over the lazy dog.",
  "voice": "alloy"
}</code></pre>
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
    default: '创建语音 gpt-4o-mini-tts'
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