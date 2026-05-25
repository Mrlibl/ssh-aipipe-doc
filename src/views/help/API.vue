<template>
<div class="doc-page">
  <h1>自建图床API</h1>
  <h2>图片上传 API 文档</h2>

  <h3>接口概述</h3>
  <p>该接口用于上传图片文件到服务器，支持多种图片格式的上传。</p>

  <h3>接口详情</h3>
  <h3>请求信息</h3>
  <div class="param-section">
    <div class="section-header">
      <div class="section-title">请求信息</div>
    </div>
    <div class="section-content">
      <ul class="explain">
        <li>请求URL: <code>https://imageproxy.zhongzhuan.chat/api/upload</code></li>
        <li>请求方法: POST</li>
        <li>Content-Type: multipart/form-data</li>
      </ul>
    </div>
  </div>

  <h3>请求参数</h3>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>file</td>
          <td>File</td>
          <td>是</td>
          <td>要上传的图片文件</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>请求示例</h3>

  <h4>cURL 示例</h4>
  <div class="code-block">
    <pre><code>curl -X POST \
  https://imageproxy.zhongzhuan.chat/api/upload \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/path/to/your/image.jpg'</code></pre>
  </div>

  <h4>JavaScript 示例</h4>
  <div class="code-block">
    <pre><code>const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('https://imageproxy.zhongzhuan.chat/api/upload', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('上传成功:', data);
})
.catch(error => {
  console.error('上传失败:', error);
});</code></pre>
  </div>

  <h4>Python 示例</h4>
  <div class="code-block">
    <pre><code>import requests

url = "https://imageproxy.zhongzhuan.chat/api/upload"
files = {'file': open('image.jpg', 'rb')}

response = requests.post(url, files=files)
print(response.json())</code></pre>
  </div>

  <h3>响应信息</h3>
  <h4>成功响应</h4>
  <ul class="explain">
    <li>HTTP 状态码: 200 OK</li>
    <li>响应格式: JSON</li>
  </ul>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>字段名</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>url</td>
          <td>String</td>
          <td>上传成功后的图片访问链接</td>
        </tr>
        <tr>
          <td>created</td>
          <td>Number</td>
          <td>创建时间戳（毫秒）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4>响应示例</h4>
  <div class="code-block">
    <pre><code>{
    "url": "https://imageproxy.zhongzhuan.chat/api/proxy/image/2316ce07a01000cf14a628c8b29e97a8",
    "created": 1757403998946
}</code></pre>
  </div>

  <h3>错误响应</h3>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>状态码</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>400</td>
          <td>请求参数错误（如：未提供文件）</td>
        </tr>
        <tr>
          <td>413</td>
          <td>文件过大</td>
        </tr>
        <tr>
          <td>415</td>
          <td>不支持的文件格式</td>
        </tr>
        <tr>
          <td>500</td>
          <td>服务器内部错误</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4>错误响应示例</h4>
  <div class="code-block">
    <pre><code>{
    "error": "文件格式不支持",
    "code": 415
}</code></pre>
  </div>

  <h3>使用说明</h3>
  <ul class="explain">
    <li>支持的文件格式: 常见图片格式如 JPG、PNG、GIF、WebP 等</li>
    <li>文件大小限制: 建议单个文件不超过 10MB</li>
    <li>返回的 URL: 可直接用于显示图片，链接长期有效</li>
    <li>时间戳格式: Unix 时间戳，单位为毫秒</li>
  </ul>

  <h3>注意事项</h3>
  <ul class="explain">
    <li>上传的图片会通过代理服务处理，确保访问稳定性</li>
    <li>建议在客户端对图片进行适当压缩以提高上传速度</li>
    <li>返回的图片链接支持跨域访问</li>
    <li>上传前请确保有网络连接和适当的权限</li>
  </ul>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

