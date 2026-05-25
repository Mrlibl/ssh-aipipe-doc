<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />

    <h2>第一步：安装 CC Switch</h2>
    <h3>1. 下载并安装 CC Switch</h3>
    <p>下载地址：下载 CC Stitch</p>

    <h3>2. 配置 CC Switch</h3>
    <p>添加供应商（中转站）</p>
    <p>添加供应商（中转站）信息</p>
    <p>选择添加</p>
    <p>同时可以选择设置为默认渠道</p>

    <h2>第二步：安装 OpenClaw 与基础初始化</h2>
    <p>首先确保你已经安装了 Node.js 环境，然后在终端执行：</p>

    <h3>1. 全局安装</h3>
    <div class="code-block">
      <pre><code>npm install -g openclaw@latest</code></pre>
    </div>

    <h3>2. 执行引导初始化</h3>
    <div class="code-block">
      <pre><code>openclaw onboard</code></pre>
    </div>
    <p>chat 配置引导示例，红框标注的地方为需要选择的地方</p>
	
	  <img class="doc-img" src="./../../assets/image/cj/OpenClaw_cc/5f8ccc02-8cc9-4dc5-953e-b28cb8cc51f2.png" alt="" />
	
	

    <h2>第三步：检查并启动</h2>
    <h3>1. 启动 Gateway 服务</h3>
    <div class="code-block">
      <pre><code>openclaw gateway --port 18789</code></pre>
    </div>

    <h3>2. 访问控制台</h3>
    <p>打开浏览器访问：</p>
    <div class="code-block">
      <pre><code>http://127.0.0.1:18789/</code></pre>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'OpenClaw 配合 CC switch 自定义中转站配置教程'
  }
})
</script>