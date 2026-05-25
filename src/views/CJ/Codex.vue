<template>
  <div class="doc-page">
    <h1>Codex 配置教程</h1>
    <h2>Codex 安装与配置教程</h2>
    <h3>Windows 版本教程</h3>
    <h4>系统要求</h4>
    <ul>
      <li>Windows 10 或 Windows 11</li>
      <li>Node.js 22+</li>
      <li>npm 10+</li>
      <li>网络连接</li>
    </ul>
    <h4>安装步骤</h4>
    <p><strong>前置步骤！！！</strong></p>
    <p>安装 Git Bash，请访问 Git - Downloads 下载对应您电脑系统的版本，之后一直点击“下一步”即可完成安装。</p>

    <p><strong>1. 安装 Node.js</strong></p>
    <p>访问 Node.js 官网 下载并安装最新 LTS 版本。</p>

    <p><strong>2. 安装 codex</strong></p>
    <p>打开命令提示符 (CMD) 或 PowerShell，运行：</p>
    <div class="code-block">
      <pre><code>npm install -g @openai/codex</code></pre>
    </div>

    <p><strong>3. 验证安装</strong></p>
    <p>打开命令提示符 (CMD) 或 PowerShell，运行：</p>
    <div class="code-block">
      <pre><code>codex --version</code></pre>
    </div>

    <h3>配置 API</h3>
    <p><strong>1. 获取 Auth Token</strong></p>
    <p>访问 api.aipipe.io 站点页面进行以下操作：</p>
    <ul>
      <li>点击 控制台 → API令牌 页面</li>
      <li>点击 添加令牌</li>
      <li>令牌分组请选择：codex专属（务必选择此分组，否则无法使用）</li>
      <li>令牌名称随意</li>
      <li>额度建议：设置为 无限额度</li>
      <li>其他选项保持默认</li>
    </ul>
    <img class="doc-img" src="./../../assets/image/cj/Codex/1.png" alt="" />
    <div>
      <h3>2. 配置文件</h3>
      <p><strong>重要提示：请将下方的 sk-xxx 替换为您在 api.aipipe.io 生成的实际 API 密钥！</strong></p>
      <p>1. 进入当前用户的用户目录下的 .codex 文件夹中，例如：C:\Users\testuser\.codex。</p>
      <p>（注意：如果看不到该目录，说明您没有打开 Windows 的“显示隐藏的项目”，请先在文件资源管理器中开启。）</p>
    </div>
    <img class="doc-img" src="./../../assets/image/cj/Codex/2.png" alt="" />
    <img class="doc-img" src="./../../assets/image/cj/Codex/3.png" alt="" />

    <div>
      <h3>3. 填写配置 (需要将 sk-xxx 替换成您自己创建的真实 SK)。</h3>

      <p>a. auth.json 中的配置：</p>
      <div class="code-block">
        <pre><code>{"OPENAI_API_KEY": "sk-xxx"}</code></pre>
      </div>

      <p>b. config.toml 中的配置（直接粘贴下面的内容即可）：</p>
      <p>model_reasoning_effort 可选值为 high, medium, low，分别代表模型思考的努力程度（高、中、低）。</p>
      <div class="code-block">
        <pre><code>model_provider = "api111"
model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.api111]
name = "api111"
base_url = "https://api.aipipe.io/v1"
wire_api = "responses"</code></pre>
      </div>

      <h3>启动 codex</h3>
      <p>重启终端！重启终端！重启终端！</p>
      <p>然后进入到您的工程目录：</p>
      <div class="code-block">
        <pre><code>cd your-project-folder</code></pre>
      </div>
      <p>运行以下命令启动：</p>
      <div class="code-block">
        <pre><code>codex</code></pre>
      </div>
      <img class="doc-img" src="./../../assets/image/cj/Codex/4.png" alt="" />
      <h3>VSCode 插件 codex</h3>
      <p>以上配置完成后，在 VSCode 扩展商店中搜索并安装 codex 即可。</p>
      <img class="doc-img" src="./../../assets/image/cj/Codex/5.png" alt="" />
      <img class="doc-img" src="./../../assets/image/cj/Codex/6.png" alt="" />
    </div>

    <div>
      <h2>Mac 版本教程</h2>

      <h4>系统要求</h4>
      <ul>
        <li>macOS 12 或更高版本</li>
        <li>Node.js 22+</li>
        <li>npm 10+</li>
        <li>网络连接</li>
      </ul>

      <h4>安装步骤</h4>

      <p><strong>1. 安装 Node.js</strong></p>
      <p>方式一：直接访问 Node.js 官网 下载并安装最新 LTS 版本。</p>
      <p>方式二：使用 Homebrew（推荐）</p>
      <div class="code-block">
        <pre><code># 如果尚未安装 Homebrew，请先运行此命令
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node</code></pre>
      </div>

      <p><strong>2. 安装 codex</strong></p>
      <p>打开终端 (Terminal)，运行（可能需要加 sudo）：</p>
      <div class="code-block">
        <pre><code>npm install -g @openai/codex</code></pre>
      </div>

      <p><strong>3. 验证安装</strong></p>
      <p>打开终端 (Terminal)，运行：</p>
      <div class="code-block">
        <pre><code>codex --version</code></pre>
      </div>

      <h3>配置 API</h3>
      <p><strong>1. 获取 Auth Token</strong></p>
      <p>访问 api.aipipe.io 站点页面进行以下操作：</p>
      <ul>
        <li>点击 控制台 → API令牌 页面</li>
        <li>点击 添加令牌</li>
        <li>令牌分组请选择：codex特供（务必选择此分组，否则无法使用）</li>
        <li>令牌名称随意</li>
        <li>额度建议：设置为 无限额度</li>
        <li>其他选项保持默认</li>
      </ul>
    </div>

    <img class="doc-img" src="./../../assets/image/cj/Codex/7.png" alt="" />

    <div>
      <h3>2. 配置文件</h3>
      <p><strong>重要提示：请将下方的 sk-xxx 替换为您在 api.aipipe.io 生成的实际 API 密钥！</strong></p>

      <p>1. 创建目录和文件：</p>
      <div class="code-block">
        <pre><code>mkdir -p ~/.codex
touch ~/.codex/auth.json
touch ~/.codex/config.toml</code></pre>
      </div>

      <p>2. 编辑 auth.json 文件：</p>
      <p>vi ~/.codex/auth.json</p>
      <p>按 i 进入插入模式，粘贴以下内容（将 sk-xxx 替换为您的密钥），然后按 ESC 键，输入 :wq 并回车保存退出。</p>
      <div class="code-block">
        <pre><code>{"OPENAI_API_KEY": "sk-xxx"}</code></pre>
      </div>

      <p>3. 编辑 config.toml 文件：</p>
      <p>vi ~/.codex/config.toml</p>
      <p>按 i 进入插入模式，粘贴以下内容，然后按 ESC 键，输入 :wq 并回车保存退出。</p>
      <div class="code-block">
        <pre><code>model_provider = "api111"
model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.api111]
name = "api111"
base_url = "https://api.aipipe.io/v1"
wire_api = "responses"</code></pre>
      </div>

      <h3>启动 codex</h3>
      <p>重启终端！重启终端！重启终端！</p>
      <p>然后进入到您的工程目录：</p>
      <div class="code-block">
        <pre><code>cd your-project-folder</code></pre>
      </div>
      <p>运行以下命令启动：</p>
      <div class="code-block">
        <pre><code>codex</code></pre>
      </div>
      <p>[图片]</p>
      <h3>VSCode 插件 codex</h3>
      <p>以上配置完成后，在 VSCode 扩展商店中搜索并安装 codex 即可。</p>
      <p>[图片]</p>
      <p>安装完成后会出现在侧边栏。</p>
      <p>[图片]</p>
    </div>

    <div>
      <h2>Linux 版本教程</h2>

      <h4>系统要求</h4>
      <ul>
        <li>主流 Linux 发行版 (Ubuntu 20.04+, Debian 10+, CentOS 7+, etc.)</li>
        <li>Node.js 22+</li>
        <li>npm 10+</li>
        <li>网络连接</li>
      </ul>

      <h4>安装步骤</h4>

      <p><strong>1. 安装 Node.js</strong></p>

      <p>Ubuntu/Debian</p>
      <div class="code-block">
        <pre><code>sudo apt update
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs</code></pre>
      </div>

      <p>CentOS/RHEL/Fedora</p>
      <div class="code-block">
        <pre><code># 使用 dnf (Fedora) 或 yum (CentOS/RHEL)
sudo dnf install nodejs npm
# 或
sudo yum install nodejs npm</code></pre>
      </div>

      <p>Arch Linux</p>
      <div class="code-block">
        <pre><code>sudo pacman -S nodejs npm</code></pre>
      </div>

      <p><strong>2. 安装 codex</strong></p>
      <p>打开终端 (Terminal)，运行：</p>
      <div class="code-block">
        <pre><code>sudo npm install -g @openai/codex</code></pre>
      </div>

      <p><strong>3. 验证安装</strong></p>
      <p>打开终端 (Terminal)，运行：</p>
      <div class="code-block">
        <pre><code>codex --version</code></pre>
      </div>

      <h3>配置 API</h3>
      <p><strong>1. 获取 Auth Token</strong></p>
      <p>访问 api.aipipe.io 站点页面进行以下操作：</p>
      <ul>
        <li>点击 控制台 → API令牌 页面</li>
        <li>点击 添加令牌</li>
        <li>令牌分组请选择：codex渠道-gpt（务必选择此分组，否则无法使用）</li>
        <li>令牌名称随意</li>
        <li>额度建议：设置为 无限额度</li>
        <li>其他选项保持默认</li>
      </ul>
      <p>[图片]</p>

      <h3>2. 配置文件</h3>
      <p><strong>重要提示：请将下方的 sk-xxx 替换为您在 api.aipipe.io 生成的实际 API 密钥！</strong></p>

      <p>1. 创建目录和文件：</p>
      <div class="code-block">
        <pre><code>mkdir -p ~/.codex
touch ~/.codex/auth.json
touch ~/.codex/config.toml</code></pre>
      </div>

      <p>2. 编辑 auth.json 文件：</p>
      <p>vi ~/.codex/auth.json</p>
      <p>按 i 进入插入模式，粘贴以下内容（将 sk-xxx 替换为您的密钥），然后按 ESC 键，输入 :wq 并回车保存退出。</p>
      <div class="code-block">
        <pre><code>{"OPENAI_API_KEY": "sk-xxx"}</code></pre>
      </div>

      <p>3. 编辑 config.toml 文件：</p>
      <p>vi ~/.codex/config.toml</p>
      <p>按 i 进入插入模式，粘贴以下内容，然后按 ESC 键，输入 :wq 并回车保存退出。</p>
      <div class="code-block">
        <pre><code>model_provider = "api111"
model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.api111]
name = "api111"
base_url = "https://api.aipipe.io/v1"
wire_api = "responses"</code></pre>
      </div>

      <h3>启动 codex</h3>
      <p>重启终端！重启终端！重启终端！</p>
      <p>然后进入到您的工程目录：</p>
      <div class="code-block">
        <pre><code>cd your-project-folder</code></pre>
      </div>
      <p>运行以下命令启动：</p>
      <div class="code-block">
        <pre><code>codex</code></pre>
      </div>
    </div>
    <img class="doc-img" src="./../../assets/image/cj/Codex/4.png" alt="" />
    <h3>VSCode 插件 codex</h3>
    <p>以上配置完成后，在 VSCode 扩展商店中搜索并安装 codex 即可。</p>
    <img class="doc-img" src="./../../assets/image/cj/Codex/8.png" alt="" />
    <img class="doc-img" src="./../../assets/image/cj/Codex/9.png" alt="" />
    <div>
      <h2>常见问题</h2>
      <p>出现错误请按照如下步骤排查：</p>
      <p>1. 确认 API Key 创建是否正确：额度选择无限额度，不要限制模型，分组选择 codex渠道-gpt。</p>
      <p>更多 codex 配置及使用详情请参考 codex 官方教程。</p>
    </div>
  </div>
</template>

<script setup>
// 脚本区域（必须存在，否则报错）
</script>

<style scoped>
/* 样式可写在这里，也可以空着 */
</style>