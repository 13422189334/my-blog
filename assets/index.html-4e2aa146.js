import{_ as n,Y as s,Z as a,$ as e}from"./framework-990fb3f1.js";const t={},p=[e('<p>我们平时在 <code>computed</code> 属性中可以通过 <code>this.xxx</code> 去拿 <code>data</code> 里面的数据和 <code>methods</code> 里面的方法，</p><p>或许还会通过 <code>this.$store</code> 去拿 <code>vuex</code> 的 <code>state</code> 和 <code>commit</code> 等，</p><p>甚至，还会通过 this.<code>$route</code> 去获取路由里面的数据。</p><p>其实，我们可以避免这些丑陋的this，它甚至会给我们带来看不见的性能问题。</p><p>实现上，我们通过this能访问到的数据，在 <code>computed</code> 的 <code>第一个参数</code> 上都能 <code>解构</code> 出来。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">a</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>$attrs<span class="token punctuation">,</span>$route<span class="token punctuation">,</span>$store<span class="token punctuation">,</span>$listeners<span class="token punctuation">,</span>$ref<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token comment">// 还能结构很多属性，可自行打印看看</span>\n      <span class="token keyword">return</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6)];const o=n(t,[["render",function(n,e){return s(),a("div",null,p)}],["__file","index.html.vue"]]);export{o as default};
