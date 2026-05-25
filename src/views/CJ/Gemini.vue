<template>
<div class="doc-page">
  <h1>Gemini CLI 中转站配置使用教程</h1>

  <h2>Gemini CLI 中文使用指南</h2>
  <h3>基本介绍</h3>
  <p>Gemini CLI 是谷歌提供的开源命令行 AI 工具，将 Gemini 的强大功能直接带入您的终端。它提供轻量级的 Gemini 访问方式，为您提供从提示到模型的最直接路径。通过设置中转站（代理），您可以在网络受限的情况下正常使用 Gemini CLI 服务。</p>

  <h3>🚀 为什么选择 Gemini CLI？</h3>
  <ul class="explain">
    <li>🧠 强大的 Gemini 2.5 Pro：访问 100 万 token 上下文窗口</li>
    <li>🔧 内置工具：Google 搜索基础功能、文件操作、Shell 命令、网页抓取</li>
    <li>🔌 可扩展：支持 MCP（模型上下文协议）进行自定义集成</li>
    <li>💻 终端优先：专为在命令行中工作的开发者设计</li>
    <li>🛡️ 开源：Apache 2.0 许可证</li>
  </ul>

  <h3>📦 安装方式</h3>
  <p><strong>快速安装</strong></p>
  <p>使用 npx 即时运行（无需安装）</p>
  <div class="code-block">
    <pre><code># 使用官方仓库
npx https://github.com/google-gemini/gemini-cli</code></pre>
  </div>

  <p>使用 npm 全局安装</p>
  <div class="code-block">
    <pre><code>npm install -g @google/gemini-cli</code></pre>
  </div>

  <p>使用 Homebrew 安装（macOS/Linux）</p>
  <div class="code-block">
    <pre><code>brew install gemini-cli</code></pre>
  </div>

  <p><strong>系统要求</strong></p>
  <ul class="explain">
    <li>Node.js 版本 20 或更高</li>
    <li>macOS、Linux 或 Windows</li>
  </ul>

  <h3>配置中转站（代理）使用</h3>
  <p>1. 设置环境变量</p>
  <p>在使用中转站之前，您需要配置以下环境变量：</p>

  <div class="code-block">
    <pre><code># 设置 API 密钥
export GEMINI_API_KEY=sk-xxxxx

# 设置 API 中转站地址
export GOOGLE_GEMINI_BASE_URL=https://api.aipipe.io</code></pre>
  </div>

  <p>cmd 使用下面这个</p>
  <div class="code-block">
    <pre><code>set GEMINI_API_KEY=sk-xxxxx
set GOOGLE_GEMINI_BASE_URL=https://api.aipipe.io</code></pre>
  </div>

  <p>注意：您也可以将这些环境变量添加到 .bashrc、.zshrc 或其他 shell 配置文件中，这样每次启动终端时都会自动设置这些变量。</p>

  <h3>🚀 快速开始</h3>
  <p><strong>基本使用</strong></p>
  <p>在当前目录启动</p>
  <div class="code-block">
    <pre><code>gemini</code></pre>
  </div>

  <p>包含多个目录</p>
  <div class="code-block">
    <pre><code>gemini --include-directories ../lib,../docs</code></pre>
  </div>

  <p>使用特定模型</p>
  <div class="code-block">
    <pre><code>gemini -m gemini-2.5-flash</code></pre>
  </div>

  <p><strong>脚本非交互模式</strong></p>
  <p>获取简单文本响应：</p>
  <div class="code-block">
    <pre><code>gemini -p "解释这个代码库的架构"</code></pre>
  </div>

  <p>获取结构化 JSON 输出：</p>
  <div class="code-block">
    <pre><code>gemini -p "解释这个代码库的架构" --output-format json</code></pre>
  </div>

  <h3>快速示例</h3>
  <p><strong>启动新项目</strong></p>
  <div class="code-block">
    <pre><code>cd new-project/
gemini
> 为我编写一个 Discord 机器人，使用我提供的 FAQ.md 文件回答问题</code></pre>
  </div>

  <p><strong>分析现有代码</strong></p>
  <div class="code-block">
    <pre><code>git clone https://github.com/google-gemini/gemini-cli
cd gemini-cli
gemini
> 给我一个昨天所有更改的摘要</code></pre>
  </div>

  <h3>📋 主要功能</h3>
  <p><strong>代码理解与生成</strong></p>
  <ul class="explain">
    <li>查询和编辑大型代码库</li>
    <li>使用多模态能力从 PDF、图片或草图生成新应用</li>
    <li>使用自然语言调试问题和故障排除</li>
  </ul>

  <p><strong>自动化与集成</strong></p>
  <ul class="explain">
    <li>自动化操作任务，如查询拉取请求或处理复杂的变基操作</li>
    <li>使用 MCP 服务器连接新功能</li>
    <li>在脚本中非交互式运行以实现工作流自动化</li>
  </ul>

  <p><strong>高级功能</strong></p>
  <ul class="explain">
    <li>使用内置 Google 搜索获取实时信息</li>
    <li>对话检查点以保存和恢复复杂会话</li>
    <li>自定义上下文文件（GEMINI.md）为您的项目定制行为</li>
  </ul>

  <h3>常用命令和功能示例</h3>
  <p><strong>探索代码库</strong></p>
  <ul class="explain">
    <li>&gt; 描述这个系统架构的主要组成部分</li>
    <li>&gt; 有哪些安全机制？</li>
    <li>&gt; 为新开发者提供一份分步骤的入门文档</li>
  </ul>

  <p><strong>处理现有代码</strong></p>
  <ul class="explain">
    <li>&gt; 为 GitHub issue #123 实现一个初稿</li>
    <li>&gt; 帮我将这个代码库迁移到最新版本的 Java。先制定一个计划</li>
  </ul>

  <p><strong>自动化工作流程</strong></p>
  <ul class="explain">
    <li>&gt; 制作一个幻灯片，展示过去 7 天的 git 历史，按功能和团队成员分组</li>
    <li>&gt; 制作一个全屏 Web 应用用于墙上显示，展示我们互动最多的 GitHub issues</li>
  </ul>

  <p><strong>系统交互</strong></p>
  <ul class="explain">
    <li>&gt; 将此目录中的所有图像转换为 png，并使用 exif 数据中的日期重命名它们</li>
    <li>&gt; 按支出月份整理我的 PDF 发票</li>
  </ul>

  <h3>GitHub 集成</h3>
  <p>使用 Gemini CLI GitHub Action 将 Gemini CLI 直接集成到您的 GitHub 工作流中：</p>
  <ul class="explain">
    <li>拉取请求审查：自动代码审查，提供上下文反馈和建议</li>
    <li>Issue 分类：基于内容分析自动标记和优先级排序 GitHub issues</li>
    <li>按需帮助：在 issues 和拉取请求中提及 @gemini-cli 获取调试、解释或任务委派的帮助</li>
    <li>自定义工作流：构建适合您团队需求的自动化、定时和按需工作流</li>
  </ul>

  <h3>故障排除</h3>
  <p>如果您在使用过程中遇到问题，可以参考以下几点：</p>
  <p>1. 检查环境变量是否正确设置：</p>
  <div class="code-block">
    <pre><code>echo $GEMINI_API_KEY
echo $GOOGLE_GEMINI_BASE_URL</code></pre>
  </div>

  <p>2. 检查网络连接是否稳定，中转站是否可访问：</p>
  <div class="code-block">
    <pre><code>curl -I https://api.aipipe.io</code></pre>
  </div>

  <p>3. 查看是否有错误信息输出，这些信息通常会指示问题所在</p>
  <p>4. 如果使用 SOCKS 代理，确保代理格式正确，例如 socks5://&lt;user&gt;:&lt;pass&gt;@&lt;proxy&gt;:&lt;port&gt;</p>
  <p>5. 使用内置命令报告问题：</p>
  <div class="code-block">
    <pre><code># 在 CLI 中直接报告 bug
/bug</code></pre>
  </div>

  <h3>发布版本说明</h3>
  <p>预览版（Preview）<br>
  每周二 UTC 23:59 发布新的预览版本。使用 preview 标签安装：</p>
  <div class="code-block">
    <pre><code>npm install -g @google/gemini-cli@preview</code></pre>
  </div>

  <p>稳定版（Stable）<br>
  每周二 UTC 20:00 发布新的稳定版本。使用 latest 标签安装：</p>
  <div class="code-block">
    <pre><code>npm install -g @google/gemini-cli@latest</code></pre>
  </div>

  <p>每夜版（Nightly）<br>
  每天 UTC 00:00 发布每夜版本。使用 nightly 标签安装：</p>
  <div class="code-block">
    <pre><code>npm install -g @google/gemini-cli@nightly</code></pre>
  </div>

  <h3>MCP 服务器使用</h3>
  <p>在 ~/.gemini/settings.json 中配置 MCP 服务器以扩展 Gemini CLI 的自定义工具：</p>
  <ul class="explain">
    <li>&gt; @github 列出我的开放拉取请求</li>
    <li>&gt; @slack 向 #dev 频道发送今天提交的摘要</li>
    <li>&gt; @database 运行查询查找不活跃用户</li>
  </ul>

  <h3>📚 相关资源</h3>
  <ul class="explain">
    <li>官方路线图：查看即将推出的功能</li>
    <li>NPM 包：包注册表</li>
    <li>GitHub Issues：报告 bug 或请求功能</li>
    <li>安全建议：安全更新</li>
  </ul>

  <h3>卸载</h3>
  <p>如果您需要卸载 Gemini CLI，请参考官方的卸载指南。</p>
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

