<template>
<div class="doc-page">
  <h1>扣子工作流简单配置从输入到获取url</h1>

  <p>如果你是扣子vip，可以直接下载工作流导入即可</p>
  <p>https://wwaod.lanzn.com/b011lwl8ij</p>
  <p>密码:3qnp</p>

  <p>以sora2为例子从输入文本和上传图片到最后获取url的简单循环工作流（下面是整体图）</p>
   <img class="doc-img" src="./../../assets/image/cj/getUrl/1.png" alt="" />

  <h2>一、开始</h2>
  <p>根据提示词和图片 新增输入的变量，根据接口需要的参数来，需要输入更多参数也可以添加</p>
    <img class="doc-img" src="./../../assets/image/cj/getUrl/2.png" alt="" />
  <h2>二、请求模型 （新增http节点）</h2>
  <p>根据文档配置http请求</p>
  <p>1.第一个红框位置配置请求方式和url</p>
  <p>2.第二个红框配置请求头</p>
  <p>3.第三个地方配置请求体，请根据文档中相应的请求体选择格式，在这个例子中用的json，其中标有开始的是从前面的输入中获取的参数，在编辑直接{}输入就能选择</p>
    <img class="doc-img" src="./../../assets/image/cj/getUrl/3.png" alt="" />

  <h2>三、处理请求结果获取taskId（新增代码节点）</h2>
  <p>如图所示在输入的时候变量值直接获取上一个的输出body</p>
  <p>使用代码解析body获取其中的id（在本示例中代码选择的是JavaScript 代码如下）</p>

  <div class="code-block">
    <pre><code>async function main({ params }: Args): Promise&lt;Output&gt; {
    // 1. 从 params.input 中获取 body 字符串
    // 注意：这里假设 params.input 是整个 HTTP 响应对象
    const bodyStr = params.input;

    // 2. 将字符串格式的 body 解析为 JSON 对象
    // 因为 body 的值是一个字符串 "{\"id\":...}"，所以需要 JSON.parse
    let taskId = "";
    try {
        const bodyObj = JSON.parse(bodyStr);
        taskId = bodyObj.id;
    } catch (e) {
        // 防止解析失败导致运行报错
        console.log("JSON 解析失败:", e);
    }

    // 3. 构建输出对象，返回 taskId
    const ret = {
        "taskId": taskId
    };

    return ret;
}</code></pre>
  </div>

  <p>最后输出的位置的变量名请与代码中ret 中的参数名一致</p>
    <img class="doc-img" src="./../../assets/image/cj/getUrl/4.png" alt="" />

  <h2>四、循环请求查询接口获取url（新增循环节点）</h2>
  <p>1. 设置循环（在本次示例中使用的是无限循环根据判断条件跳出循环）根据需要设置</p>
  <p>中间变量是获取的前一个代码节点输出的taskId</p>
  <p>输出了url和状态</p>
  <img class="doc-img" src="./../../assets/image/cj/getUrl/5.png" alt="" />

  <p>2. 在循环中新增一个http节点请求查询任务</p>
  <p>其中参数请求体根据文档中的使用的模型的查询任务来</p>
   <img class="doc-img" src="./../../assets/image/cj/getUrl/6.png" alt="" />

  <p>3. 新增一个代码节点获取url和任务状态</p>
  <p>如图所示 输入获取的是查询任务的输出body代码如下</p>

  <div class="code-block">
    <pre><code>async function main({ params }: Args): Promise&lt;Output&gt; {
    // 1. 从 params.input 中获取 body 字符串
    const bodyStr = params.input;

    // 2. 将字符串格式的 body 解析为 JSON 对象
    let url = "";
    let status = "";
    try {
        const bodyObj = JSON.parse(bodyStr);
        url = bodyObj.video_url;
        status = bodyObj.status;
    } catch (e) {
        // 防止解析失败导致运行报错
        console.log("JSON 解析失败:", e);
    }

    // 3. 构建输出对象，返回 taskId
    const ret = {
        "url": url,
        "status": status
    };

    return ret;
}</code></pre>
  </div>

   <img class="doc-img" src="./../../assets/image/cj/getUrl/7.png" alt="" />

  <p>4.新增一个判断节点来判断查询是否获取了url</p>
  <p>在这个示例中，判断节点设置了两个分支第一个分支是获取的上一个代码节点输出的url判断是否为空</p>
  <p>第二个分支是判断状态是否为失败</p>
    <img class="doc-img" src="./../../assets/image/cj/getUrl/8.png" alt="" />

  <p>5根据判断的结果来执行</p>
  <p>新增终止循环的节点，当判断节点的第一个判断成功或者第二个判断成功时都终止循环</p>
  <p>新增定时器节点和继续循环节点，当判断节点的两个判断都为否时先执行定时器（防止请求并发数量导致请求失败，建议设置为1500ms），定时器后连接继续循环</p>
   <img class="doc-img" src="./../../assets/image/cj/getUrl/9.png" alt="" />

  <h2>五、处理循环得到的结果（新增一个代码节点）</h2>
  <p>因为循环后获得的结果是一个数组需要处理只获取最后输出的结果（代码如下）</p>
  <p>输入的是循环输出的结果</p>

  <div class="code-block">
    <pre><code>async function main({ params }: Args): Promise&lt;Output&gt; {

    // 获取输入
    const urls = params.urls;
    const statuss = params.statuss;

    // 3. 构建输出对象，返回 taskId
    const ret = {
        "url": urls[urls?.length -1],
        "status": statuss[statuss?.length -1]
    };

    return ret;
}</code></pre>
  </div>
  <p>输出的是处理后的url和状态</p>
  <img class="doc-img" src="./../../assets/image/cj/getUrl/10.png" alt="" />

  <h2>六、判断url是否有值来确定视频生成成功还是失败</h2>
  <img class="doc-img" src="./../../assets/image/cj/getUrl/11.png" alt="" />

  <h2>七、最后输出结果</h2>
  <p>如图所示输出成功和失败的结果然后结束，可以根据自己的需要把输出文本还是变量，也可以把输出结果放在结束节点输出</p>
  <img class="doc-img" src="./../../assets/image/cj/getUrl/12.png" alt="" />
    <img class="doc-img" src="./../../assets/image/cj/getUrl/13.png" alt="" />

  <h2>八、实现效果</h2>
  <img class="doc-img" src="./../../assets/image/cj/getUrl/14.png" alt="" />
</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

