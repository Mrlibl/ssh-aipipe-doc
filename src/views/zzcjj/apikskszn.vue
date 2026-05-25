<template>
  <div class="doc-page">
    <h1>API 快速开始指南</h1>
    <h2>账号注册</h2>
    <p>注册福利</p>
    <div class="benefit">
      <p>🎁 新用户注册即赠送 $0.2 体验额度</p>
      <p>💰 最低充值金额：$1</p>
      <p>🔗 注册链接：点击注册</p>
    </div>

    <h2>配置步骤</h2>

    <h3>1. 获取令牌</h3>
    <div class="step-list">
      <p>1. 登录后台系统</p>
      <p>2. 进入"令牌"页面</p>
      <p>3. 点击"添加令牌"获取 API Key</p>
    </div>

    <h3>2. 接口配置</h3>
    <p>BASE_URL 可选地址</p>
    <div class="code-block">
      <pre>https://api.aipipe.io
https://api.aipipe.io/v1
https://api.aipipe.io/v1/chat/completions</pre>
    </div>
    <p>注意: 不同客户端可能需要使用不同的 BASE_URL，建议依次尝试以上地址</p>

    <h3>3. 模型选择</h3>
    <p>模型名称位于首页 -> "支持模型"列表的第一列</p>

    <h2>测试验证</h2>
    <p>可通过以下方式验证配置：</p>
    <div class="step-list">
      <p>1. 在聊天页面进行在线测试</p>
      <p>2. 使用 API 工具（如 Postman）进行接口测试</p>
    </div>

    <h2>配置示例</h2>
    <div class="code-block">
      <pre>{
  "base_url": "https://api.aipipe.io",
  "api_key": "your_token_here",
  "model": "selected_model_name"
}</pre>
    </div>
    <p>提示：建议先在聊天页面进行测试，确认配置正确后再进行开发集成</p>
  </div>
</template>

