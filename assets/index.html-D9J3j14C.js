import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as e,d as c,a as n,e as s,t as l,b as t}from"./app-CJlK69oL.js";const u={},i=n("h1",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言"},[n("span",null,"前言")])],-1),k=n("p",null,"每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。",-1),r=n("p",null,"下面这张官网的图，想必大家都熟悉，那让我们一步一步的分析，并最后验证一下。",-1),d=["src"],g=t(`<p>图中可以看到在一整个生命周期中会有很多的钩子函数，不同的钩子函数提供给我们在vue生命周期不同的时刻进行的操作, 那么我们先列出所有的钩子函数，然后我们再一一详解：</p><blockquote><p>结合下面的Vue生命周期案例，F12看控制台更容易理解。</p></blockquote><p>::: vue-playground Vue 生命周期案例</p><p>@file App.vue</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lifeCycle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ message + &#39;  --- 这是在outer HTML中的&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>自增，验证update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;------beforeCreate创建前状态------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;------created创建完毕状态------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;------beforeMount挂载前状态------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;------mounted 挂载结束状态------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已被初始化</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;beforeUpdate 更新前状态===============》&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;updated 更新完成状态===============》&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;beforeDestroy 销毁前状态===============》&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;destroyed 销毁完成状态===============》&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;el     : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data   : &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color:red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;message: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="beforecreate-创建前" tabindex="-1"><a class="header-anchor" href="#beforecreate-创建前"><span>beforeCreate（创建前）</span></a></h2><p>此阶段为实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。</p><p>在 <strong>beforeCreate</strong> 和 <strong>created</strong> 生命周期之间，进行 <strong>初始化事件，进行数据的观测</strong> ，这时候我们可以看到在created钩子的时候数据已经和data中的属性进行绑定（其中在data中的属性值发生改变的时候，视图也会相对应改变，即所谓的双向绑定）。</p><p>注意事项：此时并没有el</p><h2 id="created-创建后" tabindex="-1"><a class="header-anchor" href="#created-创建后"><span>created（创建后）</span></a></h2><p>此阶段vue实例已经创建，仍然不能获取DOM元素。</p><p>在 <strong>created</strong> 和 <strong>beforeMount</strong> 生命周期之间，发生的事情相对比较多，结合官网给出的生命周期图可以分析下：</p>`,13),m=["src"],v=t('<p>首先会判断对象是否有 <strong>el</strong> 。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)。</p><blockquote><p>此时注释掉demo代码中的 <strong>el: &#39;#app&#39;</strong> ，然后可以看到控制台打印的日志到created的时候就停止了，如果我们在代码后面继续调用 <strong>vm.$mount(el)</strong> ，可以发现代码继续向下执行了，其中这个 <strong>el</strong> 参数就是挂载的dom节点</p></blockquote><p>然后，我们往下看，<strong>template</strong> 参数选项的对生命周期的影响。</p><ol><li><p>如果vue实例对象中有template参数选项，则将其作为模板编译成 <strong>render函数</strong>。</p></li><li><p>如果没有template选项，则将外部HTML作为模板编译。</p></li><li><p>可以看到template中的模板优先级要高于outer HTML的优先级。</p></li></ol><blockquote><p>vue中还有一个 <strong>render 函数</strong> ，它是以createElement作为参数，然后做渲染操作，而且我们可以直接嵌入JSX，可以看到页面中渲染的是： <strong>render function</strong> 。若没有 <strong>rennder 函数</strong> ，则观察demo中的template参数，在有这个参数的时候，页面渲染出来的结果为 <strong>Vue的生命周期 --- 这是在template中的</strong> ，若注释掉 <strong>template</strong> 参数，则页面渲染结果为 <strong>Vue的生命周期 --- 这是在outer HTML中的</strong> ，证明以上三点结论。</p></blockquote><p>同时，也可以从侧面解释为什么 <strong>Has &#39;el&#39; option</strong> 要在 <strong>Has &#39;template&#39; option</strong> 之前，因为vue需要通过 <strong>el</strong> 去找到对应的 <strong>outer html</strong> ，最终可得出优先级结论：<strong>render函数选项 &gt; template选项 &gt; outer HTML</strong></p><h2 id="beforemount-载入前" tabindex="-1"><a class="header-anchor" href="#beforemount-载入前"><span>beforeMount（载入前）</span></a></h2><p>此阶段，依然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行。</p>',8),b=["src"],f=n("p",null,[s("在 "),n("strong",null,"beforeMount"),s(" 和 "),n("strong",null,"mounted"),s(" 生命周期之间，可以看到此时是给vue实例对象添加 "),n("strong",null,"$el成员"),s(" ，并且替换掉挂载的DOM元素。")],-1),h=n("p",null,[s("demo中控制台打印的日志可以看出生命周期在 "),n("strong",null,"beforeMount"),s(" 之前时 "),n("strong",null,"el"),s(" 是undefined。")],-1),y=n("strong",null,"beforeMount",-1),w=n("strong",null,"mounted",-1),_=n("strong",null,"el",-1),M=t('<h2 id="mounted-载入后" tabindex="-1"><a class="header-anchor" href="#mounted-载入后"><span>mounted（载入后）</span></a></h2><p>此阶段数据和DOM都已被渲染出来。</p><h2 id="beforeupdate-更新前" tabindex="-1"><a class="header-anchor" href="#beforeupdate-更新前"><span>beforeUpdate（更新前）</span></a></h2><p>此阶段，vue遵循数据驱动DOM的原则；函数在数据更新后虽然没立即更新数据，但是DOM中的数据会在Vue双向数据绑定的作用下改变。</p><h2 id="updated-更新后" tabindex="-1"><a class="header-anchor" href="#updated-更新后"><span>updated（更新后）</span></a></h2><p>此阶段DOM会和更改过的内容同步。</p><h2 id="beforedestroy-销毁前" tabindex="-1"><a class="header-anchor" href="#beforedestroy-销毁前"><span>beforeDestroy（销毁前）</span></a></h2><h2 id="destroyed-销毁后" tabindex="-1"><a class="header-anchor" href="#destroyed-销毁后"><span>destroyed（销毁后）</span></a></h2>',8);function $(a,T){return o(),e("div",null,[i,k,c(" more "),r,n("img",{src:a.$withBase("/assets/knowledge/frontEnd/vue/lifeCycle/vueLifecycle.png"),alt:"vueLifecycle",style:{zoom:"30%"}},null,8,d),g,n("img",{src:a.$withBase("/assets/knowledge/frontEnd/vue/lifeCycle/createdToBeforeMount.png"),alt:"createdToBeforeMount",style:{zoom:"50%"}},null,8,m),v,n("img",{src:a.$withBase("/assets/knowledge/frontEnd/vue/lifeCycle/beforeMountToMounted.png"),alt:"beforeMountToMounted",style:{zoom:"50%"}},null,8,b),f,n("blockquote",null,[h,n("p",null,[s("同时，我们可以看下控制台打印的日志，"),y,s(" 和 "),w,s(" 两个生命周期上的 "),_,s(" ，在beforeMount时h1中还是使用 "),n("strong",null,l(a.message+"  --- 这是在outer HTML中的"),1),s(" 进行占位，因为此时还有挂在到页面上，还是JavaScript中的虚拟DOM形式存在的。在mounted之后可以看到h1中的内容发生了变化。")])]),M])}const D=p(u,[["render",$],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/FrontEnd/Vue/LifeCycle/","title":"生命周期","lang":"zh-CN","frontmatter":{"title":"生命周期","lang":"zh-CN","date":"2023-02-22T15:55:13.000Z","permalink":"/FrontEnd/Vue/LifeCycle/","category":["VUE"],"tag":["VUE"],"description":"前言 每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。 下面这张官网的图，想必大家都熟悉，那让我们一步一步的分析，并最后验证一下。 vueLifecycle 图中可以看到在一整个生命周期中会有很多的钩子函数，不同的钩子函数提供给我们在vue生命周期不同的时刻进行的操作, 那么我们先列出所有的钩子函数，然后我们再...","head":[["meta",{"property":"og:url","content":"https://shaohui-jin.github.io/FrontEnd/Vue/LifeCycle/"}],["meta",{"property":"og:title","content":"生命周期"}],["meta",{"property":"og:description","content":"前言 每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。 下面这张官网的图，想必大家都熟悉，那让我们一步一步的分析，并最后验证一下。 vueLifecycle 图中可以看到在一整个生命周期中会有很多的钩子函数，不同的钩子函数提供给我们在vue生命周期不同的时刻进行的操作, 那么我们先列出所有的钩子函数，然后我们再..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T10:00:43.000Z"}],["meta",{"property":"article:author","content":"石怜安"}],["meta",{"property":"article:tag","content":"VUE"}],["meta",{"property":"article:published_time","content":"2023-02-22T15:55:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T10:00:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-22T15:55:13.000Z\\",\\"dateModified\\":\\"2024-03-11T10:00:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石怜安\\",\\"url\\":\\"https://shaohui-jin.github.io\\"}]}"]]},"headers":[{"level":2,"title":"beforeCreate（创建前）","slug":"beforecreate-创建前","link":"#beforecreate-创建前","children":[]},{"level":2,"title":"created（创建后）","slug":"created-创建后","link":"#created-创建后","children":[]},{"level":2,"title":"beforeMount（载入前）","slug":"beforemount-载入前","link":"#beforemount-载入前","children":[]},{"level":2,"title":"mounted（载入后）","slug":"mounted-载入后","link":"#mounted-载入后","children":[]},{"level":2,"title":"beforeUpdate（更新前）","slug":"beforeupdate-更新前","link":"#beforeupdate-更新前","children":[]},{"level":2,"title":"updated（更新后）","slug":"updated-更新后","link":"#updated-更新后","children":[]},{"level":2,"title":"beforeDestroy（销毁前）","slug":"beforedestroy-销毁前","link":"#beforedestroy-销毁前","children":[]},{"level":2,"title":"destroyed（销毁后）","slug":"destroyed-销毁后","link":"#destroyed-销毁后","children":[]}],"git":{"createdTime":1710151243000,"updatedTime":1710151243000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1510},"filePathRelative":"zh/Knowledge/FrontEnd/Vue/LifeCycle.md","localizedDate":"2023年2月22日","excerpt":"\\n<p>每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。</p>\\n","autoDesc":true}');export{D as comp,q as data};
