<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />
	<h3>接口： /v1/chat/completions</h3>
	<a href="https://platform.openai.com/docs/api-reference/chat/">官方文档：https://platform.openai.com/docs/api-reference/chat/create</a>
	<br>	
	
    <!-- 1. Authorization 折叠面板 -->
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

    <!-- 2. Header 参数 -->
    <div class="param-section">
      <div class="section-title">Header 参数</div>
      <div class="param-table">
        <div class="param-row">
          <div class="param-name"><code>Content-Type</code></div>
          <div class="param-type">string</div>
          <div class="param-required required">必需</div>
        </div>
        <div class="param-desc">示例：application/json</div>

        <div class="param-row">
          <div class="param-name"><code>Authorization</code></div>
          <div class="param-type">string</div>
          <div class="param-required required">必需</div>
        </div>
        <div class="param-desc">示例：Bearer $OPENAI_API_KEY</div>
      </div>
    </div>

    <!-- 3. Body 参数 + 示例（双栏布局 → 手机自动单栏） -->
    <div class="body-section">
      <div class="section-title">
        Body 参数
        <span class="body-type">application/json</span>
      </div>
      <div class="body-content">
        <!-- 左侧：参数列表 -->
        <div class="param-list">
          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>model</code></div>
              <div class="param-type">string</div>
              <div class="param-required required">必需</div>
            </div>
            <div class="param-desc">要使用的模型 ID。</div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>modalities</code></div>
              <div class="param-type">array[string]</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">模型生成的输出类型。默认设置：["text"]。要请求此模型生成文本和音频响应，您可以使用：["text", "audio"]。</div>
          </div>

          <!-- audio 嵌套折叠 -->
          <div class="param-item">
            <div class="param-row" @click="toggleSection('audio')">
              <div class="param-name">
                <span class="arrow" :class="{ open: openSections.audio }">▼</span>
                <code>audio</code>
                <span class="param-subtitle">object 音频输出参数。</span>
              </div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="nested-param" v-show="openSections.audio">
              <div class="param-item nested">
                <div class="param-row">
                  <div class="param-name"><code>voice</code></div>
                  <div class="param-type">string</div>
                  <div class="param-required required">必需</div>
                </div>
                <div class="param-desc">模型用于响应支持的语音有 alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, 或者 shimmer。</div>
              </div>
              <div class="param-item nested">
                <div class="param-row">
                  <div class="param-name"><code>format</code></div>
                  <div class="param-type">string</div>
                  <div class="param-required required">必需</div>
                </div>
                <div class="param-desc">指定输出音频格式必须是 wav, mp3, flac, opus, 或者 pcm16。</div>
              </div>
            </div>
          </div>

          <!-- messages 嵌套折叠 -->
          <div class="param-item">
            <div class="param-row" @click="toggleSection('messages')">
              <div class="param-name">
                <span class="arrow" :class="{ open: openSections.messages }">▼</span>
                <code>messages</code>
                <span class="param-subtitle">array[object]</span>
              </div>
              <div class="param-required required">必需</div>
            </div>
            <div class="nested-param" v-show="openSections.messages">
              <div class="param-item nested">
                <div class="param-row">
                  <div class="param-name"><code>role</code></div>
                  <div class="param-type">string</div>
                  <div class="param-required required">必需</div>
                </div>
              </div>
              <div class="param-item nested">
                <div class="param-row">
                  <div class="param-name"><code>content</code></div>
                  <div class="param-type">string</div>
                  <div class="param-required required">必需</div>
                </div>
                <div class="param-desc">消息内容。</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：JSON 示例 -->
        <div class="example-panel">
          <div class="example-title">示例</div>
          <pre class="code-example"><code>{
  "model": "gpt-4o-audio-preview",
  "modalities": ["text", "audio"],
  "audio": { "voice": "alloy", "format": "wav" },
  "messages": [
    {
      "role": "user",
      "content": "Is a golden retriever a good family dog?"
    }
  ]
}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})

const openSections = ref({
  auth: true,
  audio: true,
  messages: true
})

const toggleSection = (key) => {
  openSections.value[key] = !openSections.value[key]
}
</script>

<style scoped>

</style>