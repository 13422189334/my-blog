import{_ as n,Y as s,Z as a,$ as e}from"./framework-990fb3f1.js";const p={},t=[e('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Comp1 <span class="token keyword">from</span> <span class="token string">&#39;@/components/Comp1&#39;</span>\n<span class="token keyword">import</span> Comp2 <span class="token keyword">from</span> <span class="token string">&#39;@/components/Comp2&#39;</span>\n<span class="token keyword">import</span> Comp3 <span class="token keyword">from</span> <span class="token string">&#39;@/components/Comp3&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Comp1<span class="token punctuation">,</span> Comp2<span class="token punctuation">,</span> Comp3 <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>引入多个组件，常常用来在组件内引入多个组件, <code>require.context(directory, useSubdirectories, regExp)</code></p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> files <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;@/components&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nfiles<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">)</span>\n  modules<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default <span class="token operator">||</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token literal-property property">components</span><span class="token operator">:</span> modules\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>main.js</code>中引入大量公共组件,利用 <code>require.context</code> 可以写成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token comment">// 自定义组件</span>\n<span class="token keyword">const</span> requireComponents <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;../views/components&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>\n<span class="token comment">// 打印结果</span>\n<span class="token comment">// 遍历出每个组件的路径</span>\nrequireComponents<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fileName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 组件实例</span>\n  <span class="token keyword">const</span> reqCom <span class="token operator">=</span> <span class="token function">requireComponents</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>\n  <span class="token comment">// 截取路径作为组件名</span>\n  <span class="token keyword">const</span> reqComName <span class="token operator">=</span> reqCom<span class="token punctuation">.</span>name<span class="token operator">||</span> fileName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\/(.*)\\.vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>\n  <span class="token comment">// 组件挂载</span>\n  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>reqComName<span class="token punctuation">,</span> reqCom<span class="token punctuation">.</span>default <span class="token operator">||</span> reqCom<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7)];const o=n(p,[["render",function(n,e){return s(),a("div",null,t)}],["__file","index.html.vue"]]);export{o as default};
