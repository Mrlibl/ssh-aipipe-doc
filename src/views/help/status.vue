<template>
  <div class="doc-page">
    <h1>HTTP状态码及其含义</h1>
    <p>HTTP状态码是用于表示网页服务器HTTP响应状态的3位数字代码。以下是一些常见的HTTP状态码及其含义：</p>
  
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>状态代码</th>
            <th>代码解释</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>400 Bad Request</td>
            <td>请求格式错误或不能被服务器理解。通常意味着客户端错误。</td>
          </tr>
          <tr>
            <td>401 Unauthorized</td>
            <td>API密钥验证未通过。你需要验证你的API密钥是否正确，其他原因还包括令牌过期。</td>
          </tr>
          <tr>
            <td>403 Forbidden</td>
            <td>一般是权限不足。</td>
          </tr>
          <tr>
            <td>404 Not Found</td>
            <td>请求的资源未找到。你可能正在尝试访问一个不存在的端点。</td>
          </tr>
          <tr>
            <td>413 Request Entity Too Large</td>
            <td>请求体太大。你可能需要减小你的请求体容量。</td>
          </tr>
          <tr>
            <td>429 Too Many Requests</td>
            <td>由于频繁的请求超过限制，你已经超过了你的速率限制。</td>
          </tr>
          <tr>
            <td>500 Internal Server Error</td>
            <td>服务器内部的错误。这可能是服务器的问题，不是你的问题。</td>
          </tr>
          <tr>
            <td>503 Service Unavailable</td>
            <td>服务器暂时不可用。这可能是由于服务器正在进行维护或者服务器过载。</td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <div class="tip">
      注意：以上只是HTTP状态码的一部分，并不完全。有些状态码可能会因服务器的实现和使用而有所不同。
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

