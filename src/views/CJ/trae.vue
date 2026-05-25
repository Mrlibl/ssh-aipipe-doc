<template>
  <div class="doc-page">
    <h1>trae完整配置教程</h1>

    <h2>一、前置准备（必装）</h2>
    <p>1.安装 Trae 客户端</p>
    <p>官网下载：https://trae.cn</p>

    <p>2.安装 Git（必填依赖）</p>
    <p>1.下载地址：https://git-scm.com/install/windows</p>
    <p>2.安装完成后重启电脑，确保环境生效</p>

    <h2>二、关键必做：安装 Cline 工具（缺失会无法填写 URL）</h2>
    <p>1.打开 Trae，点击左侧 Extensions（扩展 / 插件市场）</p>
    <img class="doc-img" src="./../../assets/image/cj/trae/1.png" alt="" />
    <p>2.搜索 Cline，点击 Install 安装</p>
    <p>3.安装完成后，左侧出现 Cline 图标，表示安装成功</p>
    <p>4.重启 Trae，确保插件加载生效</p>

    <h2>三、Cline 对接中转 API 配置</h2>
    <p>点击左侧 Cline 图标 → 打开设置（齿轮按钮）</p>
    <img class="doc-img" src="./../../assets/image/cj/trae/2.png" alt="" />
    <img class="doc-img" src="./../../assets/image/cj/trae/3.png" alt="" />

    <p>1.API Provider 必须选择：OpenAI Compatible</p>
    <p>2.Base URL 填写：https://api.aipipe.io/v1</p>
    <p>3.Model ID：前往模型广场复制你要调用的完整模型名称，粘贴到此处</p>
    <p>4.确认无误后，点击 Done 保存配置</p>

    <h2>四、配置校验与常见问题</h2>
    <ul class="explain">
      <li>配置成功：可正常选择模型、发起对话 / 代码请求</li>
      <li>无法填写 URL：未安装 Cline 或未重启 Trae</li>
      <li>连接失败：检查 Base URL、网络、模型 ID（核对模型 ID 与模型广场完全一致）</li>
      <li>令牌分组是否正确（去模型广场查看这个模型适用的分组，其它模型的分组放在一个令牌会报错！）</li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  title: String
})
</script>
