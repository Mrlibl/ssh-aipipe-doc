<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />
    <h3>接口： /v1/audio/transcriptions</h3>
    <a href="https://platform.openai.com/docs/guides/speech-to-text" target="_blank">
      官方文档：https://platform.openai.com/docs/guides/speech-to-text
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

    <!-- Header 参数 -->
    <div class="param-section">
      <div class="section-title">Header 参数</div>
      <div class="param-table">
        <div class="param-row">
          <div class="param-name"><code>Content-Type</code></div>
          <div class="param-type">string</div>
          <div class="param-required optional">可选</div>
        </div>
        <div class="param-desc">示例：multipart/form-data</div>

        <div class="param-row">
          <div class="param-name"><code>Authorization</code></div>
          <div class="param-type">string</div>
          <div class="param-required required">必需</div>
        </div>
        <div class="param-desc">示例：Bearer $OPENAI_API_KEY</div>
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
            要转录的音频文件对象(不是文件名),格式为:flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav 或 webm。
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
             要使用的模型 ID。目前只有 whisper-1,gpt-4o-mini-transcribe 是可用的。
              <br>示例：whisper-1
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>language</code></div>
              <div class="param-type">string</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
             输入音频的语言。以 ISO-639-1 格式提供输入语言可以提高准确性和延迟。
              <br>示例：zh
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>prompt</code></div>
              <div class="param-type">string</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
     
          一个可选的文本来指导模型的风格或继续之前的音频段落。提示应该与音频语言匹配。
              <br>示例：这是一段中文音频
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>response_format</code></div>
              <div class="param-type">string</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
             转录输出的格式,可选择:json、text、srt、verbose_json 或 vtt。
              <br>示例：json
            </div>
          </div>

          <div class="param-item">
            <div class="param-row">
              <div class="param-name"><code>temperature</code></div>
              <div class="param-type">number</div>
              <div class="param-required optional">可选</div>
            </div>
            <div class="param-desc">
              默认为 0，采样温度,between 0 和 1。更高的值像 0.8 会使输出更随机,而更低的值像 0.2 会使其更集中和确定性。如果设置为 0,模型将使用对数概率自动增加温度直到达到特定阈值。
            </div>
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
  title: String
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