<template>
  <div class="doc-page">
  <h1>Cursor 配置教程</h1>
  <img class="doc-img" src="./../../assets/image/cj/Cursor/加载模型.png" alt="" />
  
    <h3>配置文件</h3>
  <div class="code-block">
    <pre><code>
	name: Aipipe AI
	version: 1.0.0
	schema: v1
	
	models:
	  - name: claude-sonnet-4-6-thinking
	    provider: anthropic
	    model: claude-sonnet-4-6-thinking
	    apiKey: sk-
	    apiBase: https://ai.hx-im.com/v1
	
	    roles:
	      - chat
	      - edit
	      - apply
	
	tabAutocompleteModel:
	  name: claude-sonnet-4-6-thinking
	  provider: anthropic
	  model: claude-sonnet-4-6-thinking
	  apiKey:  sk-
	  apiBase: https://ai.hx-im.com/v1

	</code></pre>
  </div>
  
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

