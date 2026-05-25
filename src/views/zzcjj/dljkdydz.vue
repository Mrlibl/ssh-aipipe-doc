<template>
  <!-- 把容器改成 doc-page，就能直接用你写好的表格样式 -->
  <div class="doc-page">
    <h1>{{ title }}</h1>

    <h2>代理接口调用地址</h2>
    <p><strong>国外访问推荐</strong></p>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>类型</th>
            <th>地址</th>
            <th>特点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>主站</td>
            <td>https://api.aipipe.io</td>
            <td>美国集群，国内访问一般</td>
          </tr>
          <tr>
            <td>CDN分站</td>
            <td>https://api.aipipe.io</td>
            <td>全球60+节点，国内访问特别快</td>
          </tr>
          <tr>
            <td>CF站</td>
            <td>https://api.aipipe.io</td>
            <td>全球CDN，国内访问一般</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p><strong>国内访问推荐</strong></p>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>类型</th>
            <th>地址</th>
            <th>特点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>主站</td>
            <td>https://api.aipipe.io</td>
            <td>美国集群，国内访问一般</td>
          </tr>
          <tr>
            <td>CDN分站</td>
            <td>https://api.aipipe.io</td>
            <td>全球60+节点，国内访问特别快</td>
          </tr>
          <tr>
            <td>CF站</td>
            <td>https://api.aipipe.io</td>
            <td>全球CDN，国内访问一般</td>
          </tr>
          <tr>
            <td>分站</td>
            <td>https://api.aipipe.io</td>
            <td>国内服务器</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>其他服务地址</h2>
    <p><strong>无登录页面API接口（方便二次售卖KEY）</strong></p>
    <p><code>https://api.zhongzhuan.chat</code></p>

    <p><strong>KEY余额查询地址</strong></p>
    <ul class="explain">
      <li>https://cx.tpkcur.click</li>
      <li>https://cx.zhongzhuan.chat</li>
    </ul>

    <p class="tip">注意：所有地址数据互通</p>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>