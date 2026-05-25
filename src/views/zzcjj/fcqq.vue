<template>
  <div class="doc-page">
    <h1>发出请求</h1>

    <p>
      您可以将下面的命令粘贴到您的终端中以运行您的第一个 API 请求。确保替换
      <code>YOUR_API_KEY</code> 为您的秘密 API 密钥。
    </p>

    <div class="code-block">
      <pre><code>curl https://api.aipipe.io/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{
  "model": "gpt-4o",
  "messages": [{"role": "user", "content": "Say this is a test!"}],
  "temperature": 0.7
}'</code></pre>
    </div>

    <p>
      此请求查询 <code>gpt-4o</code> 模型，以完成提示 “Say this is a test”。您应该会收到类似于以下内容的响应：
    </p>

    <div class="code-block">
      <pre><code>{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-4o",
  "usage": {
    "prompt_tokens": 13,
    "completion_tokens": 7,
    "total_tokens": 20
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "\n\nThis is a test!"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}</code></pre>
    </div>

    <p>
现在你已经生成了你的第一个聊天完成。我们可以看到finish_reason is stop这意味着 API 返回了模型生成的完整完成。在上面的请求中，我们只生成了一条消息，但是你可以设置参数n来生成多条消息选择。在这个例子中，gpt-3.5-turbo更多的是用于传统的文本完成任务。该模型还针对聊天应用程序进行了优化。
    </p>
  
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>