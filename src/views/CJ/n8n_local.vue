<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />

    <h2>一、工作流整体节点说明</h2>
    <p>1. 第一个节点：选择触发方式</p>
    <p>2. 第二个节点：从本地磁盘获取文件（读取本地图片）</p>
    <p>3. 第三个节点：请求数据接口生成视频</p>
    <p>4. 第四个节点：查询生成的视频状态/结果</p>
     <img class="doc-img" src="./../../assets/image/cj/n8n_local/1.png" alt="" />

    <h2>二、读取文件节点配置</h2>
    <p>1. 节点选择：从本地获取图片</p>
    <img class="doc-img" src="./../../assets/image/cj/n8n_local/2.png" alt="" />

    <p>2. 文件地址配置：</p>
    <p>从磁盘复制出来的路径斜杠 <code>\</code> 需要手动替换为 <code>/</code></p>
   <img class="doc-img" src="./../../assets/image/cj/n8n_local/3.png" alt="" />

    <h2>三、生成视频请求节点配置</h2>
    <p><strong>基础配置：</strong></p>
    <p>• 请求方法（Method）：根据接口要求选择</p>
    <p>• 请求地址（URL）：填写接口地址</p>
    <p>• 验证类型：选择第二项</p>
      <img class="doc-img" src="./../../assets/image/cj/n8n_local/4.png" alt="" />

    <p><strong>权限认证（Bearer Auth）：</strong></p>
    <p>权限选择 Bearer Auth，新增令牌，可全局所有 HTTP 请求使用</p>
  <img class="doc-img" src="./../../assets/image/cj/n8n_local/5.png" alt="" />
    <img class="doc-img" src="./../../assets/image/cj/n8n_local/6.png" alt="" />

    <p><strong>备用认证方式（Headers）：</strong></p>
    <p>若权限配置无效，打开 Send Headers 手动添加：</p>
    <p>• Name：<code>Authorization</code></p>
    <p>• Value：<code>Bearer 你的令牌</code>（Bearer 与令牌之间必须加一个空格）</p>
    <img class="doc-img" src="./../../assets/image/cj/n8n_local/7.png" alt="" />

    <p><strong>请求体（Body）配置：</strong></p>
    <p>1. 打开 Send Body，传参类型选择 <code>Form Data</code></p>
    <p>2. 图片参数必须选择 <code>n8n Binary File</code></p>
    <p>3. Value 填写 <code>data</code> 即可获取上一节点的图片文件</p>
    <img class="doc-img" src="./../../assets/image/cj/n8n_local/8.png" alt="" />
     <img class="doc-img" src="./../../assets/image/cj/n8n_local/9.png" alt="" />

    <h2>四、查询视频节点配置</h2>
    <p>1. 基础请求配置与上一节点一致</p>
    <p>2. 查询接口格式如：<code>https://xxx/{id}</code></p>
    <p>3. 将上一节点返回的任务 ID，手动填入或拖拽到 URL 最后的 ID 位置</p>
     <img class="doc-img" src="./../../assets/image/cj/n8n_local/10.png" alt="" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'n8n 工作流获取本地图片生成视频例子'
  }
})
</script>