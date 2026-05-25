<template>
  <div class="doc-page">
    <h1>分组详细表格</h1>

    <h2>API分组类型对比指南</h2>

    <h3>分组类型及特点</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>分组</th>
            <th>类型</th>
            <th>费率</th>
            <th>支持模型</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default默认</td>
            <td>混合ChatGPT(AZ渠道) + Claude(逆向渠道) + MJ(快速模型) + 国产模型(DeepSeek+Qwen)</td>
            <td>官方费率*1</td>
            <td>openAI, Claude, 国产模型</td>
          </tr>
          <tr>
            <td>企业级高可用大模型</td>
            <td>国产模型(DeepSeek+Qwen)</td>
            <td>官方费率*1</td>
            <td>国产模型</td>
          </tr>
          <tr>
            <td>优质grok</td>
            <td>grok模型（部分grok模型）</td>
            <td>官方费率*5</td>
            <td>grok</td>
          </tr>
          <tr>
            <td>优质gemini</td>
            <td>Gemini(Google渠道)模型</td>
            <td>官方费率*1.5</td>
            <td>Gemini</td>
          </tr>
          <tr>
            <td>官转gemini</td>
            <td>Gemini(Google渠道)模型, 价格较贵(账号更多, 成本更高)</td>
            <td>官方费率*3</td>
            <td>Gemini</td>
          </tr>
          <tr>
            <td>纯AZ</td>
            <td>只有ChatGPT模型(AZ渠道) + 国产模型（豆包+deepseek）</td>
            <td>官方费率*1.5</td>
            <td>openAI, Claude, 国产模型</td>
          </tr>
          <tr>
            <td>官转</td>
            <td>ChatGPT(AZ渠道) + ChatGPT(官转渠道) + 国产模型 (先用AZ渠道, 不可用时使用官转渠道)</td>
            <td>官方费率*3</td>
            <td>openAI, 国产模型</td>
          </tr>
          <tr>
            <td>官转OPENAI</td>
            <td>ChetGPT模型(官转渠道)+az渠道（垫底渠道）</td>
            <td>官方费率*6</td>
            <td>openAI</td>
          </tr>
          <tr>
            <td>优质官转OPENAI</td>
            <td>ChatGPT模型(官转渠道), 价格较贵(账号更多)</td>
            <td>官方费率*8</td>
            <td>openAI</td>
          </tr>
          <tr>
            <td>逆向</td>
            <td>支持GPT + Claude + Gemini + Grok</td>
            <td>官方费率*1.4</td>
            <td>openAI, Claude</td>
          </tr>
          <tr>
            <td>限时特价</td>
            <td>支持国产模型(DeepSeek+Qwen)+Gemini(Google渠道)模型+ChatGPT(AZ渠道)</td>
            <td>官方费率*0.6</td>
            <td>Gemini, 国产模型</td>
          </tr>
          <tr>
            <td>官转克劳德2</td>
            <td>Claude(AWS官转渠道)</td>
            <td>官方费率*6</td>
            <td>Claude</td>
          </tr>
          <tr>
            <td>官转克劳德3</td>
            <td>Claude(AWS官转渠道 + Anthropic官转渠道)</td>
            <td>官方费率*12</td>
            <td>Claude</td>
          </tr>
          <tr>
            <td>直连克劳德</td>
            <td>Claude(Anthropic官转渠道)</td>
            <td>官方费率*16</td>
            <td>Claude</td>
          </tr>
          <tr>
            <td>Claude code专属</td>
            <td>Claude code</td>
            <td>官方费率*4</td>
            <td>Claude code</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>优缺点比较</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>特点</th>
            <th>逆向</th>
            <th>默认(混合)</th>
            <th>AZ</th>
            <th>官转</th>
            <th>官转/优质官转openAI</th>
            <th>优质gemini</th>
            <th>官转gemini</th>
            <th>官转克劳德</th>
            <th>直连克劳德</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>优点</td>
            <td>ChatGPT官网同款，更聪明，价格优惠，但是回复和API 有些不一样,虽然都是一个模型,但是估计官方给的版本不同</td>
            <td>ChatGPT官网同款，更聪明，价格优惠</td>
            <td>通道多，备用足，量大、高并发，无审核，支持FC、TC</td>
            <td>高速、量大、高并发，无审核，支持FC、TC</td>
            <td>ChatGPT官网同款，高速、量大、高并发，账号更多，更稳定</td>
            <td>官网同款，更聪明，价格优惠，量大，稳定</td>
            <td>官网同款，更聪明，价格优惠，量大，更稳定，账号更多</td>
            <td>来自亚马逊和Anthropic官方，通道多，备用足，量大、高并发</td>
            <td>来自Anthropic官方，账号更多，更稳定</td>
          </tr>
          <tr>
            <td>缺点</td>
            <td>非官方接口</td>
            <td>非官方接口</td>
            <td>有时Azure会卡顿</td>
            <td>受官方API稳定性影响</td>
            <td>受官方API稳定性影响</td>
            <td>受官方API稳定性影响</td>
            <td>成本更高，倍率更高，受官方API稳定性影响</td>
            <td>受官方API稳定性影响</td>
            <td>受官方API稳定性影响</td>
          </tr>
          <tr>
            <td>介绍</td>
            <td>均采用OpenAI官方逆向严禁频繁sayl等健康测试</td>
            <td>逆向、az混合、官转</td>
            <td>采用企业无审核Azure，支持FC、TC支持 1000w tpm，会用OpenAI 做失败兜底</td>
            <td>均采用OpenAI官方渠道，支持FC、TC，支持 1000w tpm3.5 使用openai 大额账号，并发高</td>
            <td>采用OpenAI官方渠道，支持FC、TC，支持 1000w tpm3.5 使用openai 大额账号，并发高</td>
            <td>谷歌官方api，大额账号，并发高</td>
            <td>谷歌官方api，大额账号，并发高</td>
            <td>均采用官方渠道，支持函数调用、Claude code，大额账号，并发高</td>
            <td>均采用官方渠道，支持函数调用、Claude code，大额账号，并发高</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>模型支持情况</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>模型类型</th>
            <th>逆向</th>
            <th>默认（混合）</th>
            <th>Azure</th>
            <th>官转</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>GPT-4</td><td>逆向，全部支持</td><td>逆向，全部支持</td><td>Azure，全部支持</td><td>OpenAI，全部支持</td></tr>
          <tr><td>GPT-3.5</td><td>逆向，全部支持</td><td>逆向，全部支持</td><td>Azure，全部支持</td><td>OpenAI，全部支持</td></tr>
          <tr><td>OpenAI 其他基础模型</td><td>全部支持</td><td>全部支持</td><td>全部支持</td><td>全部支持</td></tr>
          <tr><td>Midjourney</td><td>不支持</td><td>全部支持</td><td>不支持</td><td>不支持</td></tr>
          <tr><td>国产模型</td><td>不支持</td><td>全部支持</td><td>部分支持</td><td>不支持</td></tr>
          <tr><td>Claude</td><td>逆向，全部支持</td><td>全部支持</td><td>全部支持</td><td>逆向，全部支持</td></tr>
        </tbody>
      </table>
    </div>

    <h3>各种渠道解释</h3>
    <ul class="explain">
      <li>ChatGPT官转渠道：来自openai.com</li>
      <li>AZ渠道：来自微软Azure</li>
      <li>Gemini Google渠道：来自谷歌</li>
      <li>国产模型：来自各自官方</li>
      <li>Claude AWS官转：来自亚马逊</li>
      <li>Claude Anthropic官转：来自Anthropic官方</li>
    </ul>

    <p class="tip">可在令牌页通过令牌设置分组。</p>
  </div>
</template>

<style scoped>
.doc-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  line-height: 1.7;
  color: #333;
}

.doc-page h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #111;
}

.doc-page h2 {
  font-size: 20px;
  margin: 26px 0 14px;
  color: #222;
}

.doc-page h3 {
  font-size: 17px;
  margin: 20px 0 10px;
  color: #333;
}

.table-container {
  overflow-x: auto;
  margin-bottom: 24px;
  border: 1px solid #eee;
  border-radius: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

th, td {
  border: 1px solid #eee;
  padding: 10px 12px;
  font-size: 14px;
  text-align: left;
  vertical-align: top;
  white-space: nowrap;
}

th {
  background: #f9fafb;
  font-weight: 600;
}

td {
  background: #fff;
}

.explain {
  padding-left: 20px;
  margin: 12px 0;
}

.explain li {
  margin-bottom: 6px;
  font-size: 15px;
}

.tip {
  margin-top: 20px;
  font-size: 15px;
  color: #666;
}
</style>