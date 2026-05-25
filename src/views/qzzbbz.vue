<template>
  <div class="doc-page">
    <h1>一、前置准备（必装）</h1>
    <p><strong>1.安装 vscode</strong></p>
    <p>官网下载：<a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a></p>
    <p><strong>2.安装 Git（必填依赖）</strong></p>
    <p>下载地址：<a href="https://git-scm.com/install/windows" target="_blank">https://git-scm.com/install/windows</a></p>
    <p>安装完成后重启电脑，确保环境生效</p>
    <div class="divider"></div>
    <h2>二、关键必做：安装 Cline 工具（缺失会无法填写 URL）</h2>
    <p>打开 vscode，点击左侧 Extensions（扩展 / 插件市场）</p>
    <p>搜索 Cline，点击 Install 安装</p>
    <p>安装完成后，左侧出现 Cline 图标，表示安装成功</p>
    <p>重启 vscode，确保插件加载生效</p>

    <div class="divider"></div>

    <h2>Cline 对接中转 API 配置</h2>
    <p>点击左侧 Cline 图标 → 打开设置（齿轮按钮）</p>
    <p>API Provider 必须选择：OpenAI Compatible</p>
    <p>Base URL 填写：https://api.aipipe.io/v1</p>
    <p>Model ID：前往模型广场复制你要调用的完整模型名称，粘贴到此处</p>
    <p>确认无误后，点击 Done 保存配置</p>
    <div class="divider"></div>
    <h2>四、配置校验与常见问题</h2>
    <p>配置成功：可正常选择模型、发起对话 / 代码请求</p>
    <p>无法填写 URL：未安装 Cline 或未重启 vscode</p>
    <p>连接失败：检查 Base URL、网络、模型 ID（核对模型 ID 与模型广场完全一致）</p>
    <p>令牌分组是否正确（去模型广场查看这个模型适用的分组，其它模型的分组放在一个令牌会报错！）</p>
  </div>
</template>

<script setup>
</script>