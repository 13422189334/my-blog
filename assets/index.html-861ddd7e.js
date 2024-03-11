import{_ as n,Y as s,Z as a,$ as t}from"./framework-990fb3f1.js";const p={},e=[t('<h2 id="常问问题" tabindex="-1"><a class="header-anchor" href="#常问问题" aria-hidden="true">#</a> 常问问题</h2><h3 id="vue-router实现原理的histroy相关的api" tabindex="-1"><a class="header-anchor" href="#vue-router实现原理的histroy相关的api" aria-hidden="true">#</a> vue-router实现原理的histroy相关的api</h3><h3 id="vue项目想要改变element-ui的组件内部的样式-默认情况下style加了scope无法修改-需怎么做" tabindex="-1"><a class="header-anchor" href="#vue项目想要改变element-ui的组件内部的样式-默认情况下style加了scope无法修改-需怎么做" aria-hidden="true">#</a> vue项目想要改变element-ui的组件内部的样式，默认情况下style加了scope无法修改，需怎么做</h3><h3 id="v-if-和-v-for优先级" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-for优先级" aria-hidden="true">#</a> v-if 和 v-for优先级</h3><details class="hint-container details"><summary>详情</summary><p><strong>v-if和v-for是开发中经常会遇到的2个指令，那么在使用的过程中，二者如果同时存在同一个标签上，谁的优先级会更高一点呢？</strong></p><p>那么我们从源码的角度去看他，源码位置： compiler/codegen/index.js</p><p>在genElement方法中，我们可以看到一些if else的判断</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>staticRoot <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>staticProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">genStatic</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>once <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>onceProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">genOnce</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>for <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>forProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">genFor</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>if <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>ifProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">genIf</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;template&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>slotTarget <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">genChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;void 0&#39;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;slot&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">genSlot</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// component or element</span>\n    <span class="token keyword">let</span> code\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      code <span class="token operator">=</span> <span class="token function">genComponent</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>component<span class="token punctuation">,</span> el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> data\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">.</span>plain <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>pre <span class="token operator">&amp;&amp;</span> state<span class="token punctuation">.</span><span class="token function">maybeComponent</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        data <span class="token operator">=</span> <span class="token function">genData</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">const</span> children <span class="token operator">=</span> el<span class="token punctuation">.</span>inlineTemplate <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> <span class="token function">genChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n      code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">_c(&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>el<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\n        data <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// data</span>\n      <span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\n        children <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>children<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// children</span>\n      <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// module transforms</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> state<span class="token punctuation">.</span>transforms<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      code <span class="token operator">=</span> state<span class="token punctuation">.</span>transforms<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> code<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> code\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>处理for循环是处于if的上面的，所以我们由此可以判定v-for的优先级是高于v-if的。</p></blockquote><p>我们经常会遇见这种情况，在v-for的时候，在数组中会有一些需要进行v-if的判断，这种情况下，我们如果先使用computed将不需要渲染的项过滤出来，那么在进行v-for的时候，循环的就只是需要渲染的项，这也是提升vue性能的一种方式。</p></details><h3 id="vue渐进式" tabindex="-1"><a class="header-anchor" href="#vue渐进式" aria-hidden="true">#</a> vue渐进式</h3><details class="hint-container details"><summary>详情</summary><p><strong>什么是渐进式</strong></p><p>先使用Vue的核心库，再根据你的需要的功能再去逐渐增加加相应的插件。</p><ul><li>渐进式代表的含义是：主张最少，</li><li>渐进式的含义，我的理解是：没有多做职责之外的事。</li></ul><p>Vue的核心的功能，是一个视图模板引擎，但这不是说Vue就不能成为一个框架。</p><p>在声明式渲染（视图模板引擎）的基础上，我们可以通过添加组件系统、客户端路由、大规模状态管理来构建一个完整的框架。</p><p>更重要的是，这些功能相互独立，你可以在核心功能的基础上任意选用其他的部件，不一定要全部整合在一起。</p><p>可以看到，所说的“渐进式”，其实就是Vue的使用方式，同时也体现了Vue的设计的理念。</p></details><h3 id="优雅降级和渐进增强" tabindex="-1"><a class="header-anchor" href="#优雅降级和渐进增强" aria-hidden="true">#</a> 优雅降级和渐进增强</h3><details class="hint-container details"><summary>详情</summary><p><strong>优雅降级</strong>：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会针对旧版本的IE进行降级处理了,使之在旧式浏览器上以某种形式降级体验却不至于完全不能用。</p><p>如：border-shadow</p><p><strong>渐进增强</strong>：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新版本浏览器才支持的功能,向页面增加不影响基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。</p><p>如：默认使用flash上传，但如果浏览器支持 HTML5 的文件上传功能，则使用HTML5实现更好的体验；</p></details><h2 id="实例选项" tabindex="-1"><a class="header-anchor" href="#实例选项" aria-hidden="true">#</a> 实例选项</h2><h3 id="extend-s-与mixins差异" tabindex="-1"><a class="header-anchor" href="#extend-s-与mixins差异" aria-hidden="true">#</a> extend(s)与mixins差异</h3><details class="hint-container details"><summary>详情</summary><ul><li><p><strong>Mixins 的使用方法：</strong></p><p>首先，我们先定义一个Mixins混入类对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">1</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>\n\t\t<span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello from mixin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，将对象混合到当前组件中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n\t\t组件1\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\t<span class="token keyword">import</span> <span class="token punctuation">{</span> myMixin  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/mixin.js&#39;</span>\n\t<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>\n\t\t<span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span> myMixin <span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ Mixins选项接收一个混入对象的数组（即可以多个）。这些混入对象可以像正常实例对象一样包含实例选项，这些选项将会被合并到组件的选项中。</p><p>​ 其中，有以下几点可以便于理解Mixins</p><ol><li><p>应用场景：在项目中，如果我们需要提取公用的数据或者通用的方法，并且这些数据与方法不需要组件间进行维护，就可以使用Mixins</p></li><li><p>特点：方法和参数在各组件中不共享</p><p>当值为对象的选项，如 <strong>methods,components</strong> 等，选项会被合并，键冲突的时候组件会覆盖混入对象</p><p>当值为函数的选项，如 <strong>created,mounted</strong> 等，就会被合并调用，混入对象钩子函数会比组件里的钩子函数先调用</p></li><li><p>与vuex的区别 vuex：用来做状态管理的（即全局），里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。 Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。</p></li><li><p>与公共组件的区别 组件：父组件中引入子组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。 Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。</p></li><li><p>Mixins中的异步请求 当混合里面包含异步请求函数，而我们又需要在组件中使用异步请求函数的返回值时，我们应直接返回异步函数（即 new Promise）</p></li></ol></li><li><p><strong>extends 的使用方法：</strong></p></li></ul><p>首先，我们先定义一个extend对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//只能使用一个extends对象，多个无效，extends会先于mixins执行</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> myExtends <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello extends&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;extends的beforeCreated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，将对象混合到当前组件中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    home\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> myExtends <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/test.js&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>\n <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token punctuation">{</span>\n   <span class="token punctuation">}</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;组件的beforeCreated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1212&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token keyword">extends</span><span class="token operator">:</span> myExtends  <span class="token comment">// 使用extends</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，有以下几点可以便于理解extends</p><ol><li>extends和Mixins类似，通过暴露一个extends对象到组件中使用。</li><li>extends会比Mixins先执行。执行顺序：extends &gt; Mixins&gt; 组件</li><li>extends只能暴露一个extends对象，暴露多个extends不会执行</li></ol><ul><li><strong>extend 的使用方法：</strong></li></ul><p>vue.extend()方法其实是vue的一个构造器，继承自vue，可以通过extent拓展全局组件，首先我们新建一个 hello.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--hello.vue--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们在同级新建一个 hello.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// hello.js</span>\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;docs/question/vue&#39;</span>\n<span class="token keyword">import</span> HelloTemplate <span class="token keyword">from</span> <span class="token string">&#39;./hello.vue&#39;</span>\n\n<span class="token comment">// 使用extend方法创建vue的子类</span>\n<span class="token keyword">const</span> HelloConstructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>HelloTemplate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 使用这个方法调用hello组件</span>\n<span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    options <span class="token operator">=</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">text</span><span class="token operator">:</span> options\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 实例化子组件，然后获取到DOM结构并挂载到body上</span>\n  <span class="token keyword">const</span> helloInstence <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HelloConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> options<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  helloInstence<span class="token punctuation">.</span>vm <span class="token operator">=</span> helloInstence<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>helloInstence<span class="token punctuation">.</span>vm<span class="token punctuation">)</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>helloInstence<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> Hello<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后在main.js引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&#39;./src/components/hello/hello&#39;</span>\n<span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t<span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;hello world&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>extend,extends, Mixins 区别</strong></li></ul><p>Vue.extend创建组件的构造函数，为了复用</p><p>Mixins 可以混入多个Mixin ，extends只能继承一个</p><p>Mixins 类似于面向切面的编程（AOP），extends类似于面向对象的编程</p><p>优先级Vue.extend&gt;extends&gt;Mixins</p></details><h3 id="created与activated差异" tabindex="-1"><a class="header-anchor" href="#created与activated差异" aria-hidden="true">#</a> created与activated差异</h3><details class="hint-container details"><summary>详情</summary><ul><li>keep-alive 有什么作用？</li></ul><p>使用 &lt;<strong>keep-alive</strong>&gt; 会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。 被包含在 &lt;<strong>keep-alive</strong>&gt; 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated</p><ul><li>keep-alive 在vue的生命周期中赋予了什么新的钩子？</li></ul><p>activated：在组件第一次渲染时也会被调用，之后每次keep-alive激活时被调用。</p><p>deactivated：在组件被停用时调用。</p><p>注意：只有组件被 keep-alive 包裹时，这两个生命周期才会被调用，如果作为正常组件使用，是不会被调用，以及在 2.1.0 版本之后，使用 exclude 排除之后，就算被包裹在 &lt;<strong>keep-alive</strong>&gt; 中，这两个钩子依然不会被调用！另外在服务端渲染时此钩子也不会被调用的。</p><ul><li>什么时候获取数据？</li></ul><p>当引入 keep-alive 的时候，页面第一次进入，钩子的触发顺序created -&gt; mounted-&gt; activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。</p><p>我们知道 keep-alive 之后页面模板第一次初始化解析变成HTML片段后，再次进入就不在重新解析而是读取内存中的数据，即只有当数据变化时，才使用VirtualDOM进行diff更新。有需要的话，页面进入的数据获取应该在activated中也放一份。数据下载完毕手动操作DOM的部分也应该在activated中执行才会生效。</p><p>所以，有需要的话，应该activated中留一份数据获取的代码，或者不要created部分，直接将created中的代码转移到activated中。</p><p><strong>注意</strong></p><blockquote><p>created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；</p><p>activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等</p></blockquote></details><h3 id="vue的computed跟普通的函数有什么区别吗-computed怎么实现缓存的-有看过源码吗" tabindex="-1"><a class="header-anchor" href="#vue的computed跟普通的函数有什么区别吗-computed怎么实现缓存的-有看过源码吗" aria-hidden="true">#</a> vue的computed跟普通的函数有什么区别吗，computed怎么实现缓存的，有看过源码吗</h3><h2 id="webpack模块" tabindex="-1"><a class="header-anchor" href="#webpack模块" aria-hidden="true">#</a> webpack模块</h2><h3 id="webpack中-bundle-chunk-module-有什么区别" tabindex="-1"><a class="header-anchor" href="#webpack中-bundle-chunk-module-有什么区别" aria-hidden="true">#</a> webpack中 bundle chunk module 有什么区别</h3><h3 id="webpack中-plugin-loader-有什么区别" tabindex="-1"><a class="header-anchor" href="#webpack中-plugin-loader-有什么区别" aria-hidden="true">#</a> webpack中 plugin loader 有什么区别</h3>',18)];const o=n(p,[["render",function(n,t){return s(),a("div",null,e)}],["__file","index.html.vue"]]);export{o as default};
