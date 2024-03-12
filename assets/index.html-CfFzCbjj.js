import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-CJlK69oL.js";const e={},p=t(`<p>Vue 框架通过数据双向绑定和虚拟 DOM 技术，帮我们处理了前端开发中最脏最累的 DOM 操作部分，</p><p>使得我们不再需要去考虑如何操作 DOM 以及如何最高效地操作 DOM。</p><p>但 Vue 项目中仍然存在项目首屏优化、Webpack 编译配置优化等问题，</p><p>所以我们仍然需要去关注 Vue 项目性能方面的优化，使项目具有更高效的性能、更好的用户体验。本文内容分为以下三部分组成：</p><ul><li>Vue 代码层面的优化</li><li>webpack 配置层面的优化</li><li>基础的 Web 技术层面的优化</li></ul><h2 id="vue-代码层面的优化" tabindex="-1"><a class="header-anchor" href="#vue-代码层面的优化"><span>Vue 代码层面的优化</span></a></h2><h3 id="v-if-和-v-show-区分使用场景" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show-区分使用场景"><span>v-if 和 v-show 区分使用场景</span></a></h3><p>v-if是<strong>真正</strong>的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</p><p>v-show就简单得多，不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 display 属性进行切换。</p><blockquote><p>所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。</p></blockquote><h3 id="computed-和-watch区分使用场景" tabindex="-1"><a class="header-anchor" href="#computed-和-watch区分使用场景"><span>computed 和 watch区分使用场景</span></a></h3><p>computed：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed的值.</p><p>watch：更多是「观察」的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作.</p><blockquote><p>运用场景： 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算. 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</p></blockquote><h3 id="v-for-遍历必须为-item-添加-key-且避免同时使用-v-if" tabindex="-1"><a class="header-anchor" href="#v-for-遍历必须为-item-添加-key-且避免同时使用-v-if"><span>v-for 遍历必须为 item 添加 key，且避免同时使用 v-if</span></a></h3><ol><li>v-for 遍历必须为 item 添加 key</li></ol><p>在列表数据进行遍历渲染时，需要为每一项 item 设置唯一 key 值，方便 Vue.js 内部机制精准找到该条列表数据。当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。</p><ol start="2"><li>v-for 遍历避免同时使用 v-if</li></ol><p>v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性。</p><p>推荐：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in filterList<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">filterList</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> user<span class="token punctuation">.</span>isActive
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不推荐：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
         <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in list<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.isActive<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         {{ user.name }}
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="长列表性能优化" tabindex="-1"><a class="header-anchor" href="#长列表性能优化"><span>长列表性能优化</span></a></h3><p>Vue 会通过 Object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 Vue 来劫持我们的数据， 在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止 Vue 劫持我们的数据呢？可以通过 Object.freeze 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>export default {
  data: () =&gt; ({
    users: {}
  }),
  async created() {
    const users = await axios.get(&quot;/api/users&quot;);
    this.users = Object.freeze(users);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件的销毁" tabindex="-1"><a class="header-anchor" href="#事件的销毁"><span>事件的销毁</span></a></h3><p>Vue 组件销毁时，会自动清理它与其它实例的连接，解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。如果在 js 内</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>created() {
  addEventListener(&#39;click&#39;, this.click, false)
},
beforeDestroy() {
  removeEventListener(&#39;click&#39;, this.click, false)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片资源懒加载" tabindex="-1"><a class="header-anchor" href="#图片资源懒加载"><span>图片资源懒加载</span></a></h3><p>对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。 这样对于页面加载性能上会有很大的提升，也提高了用户体验。我们在项目中使用 Vue 的 vue-lazyload 插件：</p><p>安装插件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-lazyload --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在入口文件 man.js 中引入并使用</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VueLazyload <span class="token keyword">from</span> <span class="token string">&#39;vue-lazyload&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再 vue 中直接使用</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueLazyload<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者添加自定义选项</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueLazyload<span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token literal-property property">preLoad</span><span class="token operator">:</span> <span class="token number">1.3</span><span class="token punctuation">,</span>
<span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&#39;dist/error.png&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token string">&#39;dist/loading.gif&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">attempt</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 vue 文件中将 img 标签的 src 属性直接改为 v-lazy ，从而将图片显示方式更改为懒加载显示：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/static/img/1.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上为 vue-lazyload 插件的简单使用，如果要看插件的更多参数选项，可以查看 vue-lazyload 的 github 地址。</p><h3 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载"><span>路由懒加载</span></a></h3><p>Vue 是单页面应用，可能会有很多的路由引入 ，这样使用 webpcak 打包后的文件很大，当进入首页时，加载的资源过多，页面会出现白屏的情况，不利于用户体验。 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件，这样就更加高效了。这样会大大提高首屏显示的速度，但是可能其他的页面的速度就会降下来。</p><p>路由懒加载：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Foo.vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Foo <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三方插件的按需引入" tabindex="-1"><a class="header-anchor" href="#第三方插件的按需引入"><span>第三方插件的按需引入</span></a></h3><p>我们在项目中经常会需要引入第三方插件，如果我们直接引入整个插件，会导致项目的体积太大，我们可以借助babel-plugin-component，然后可以只引入需要的组件，以达到减小项目体积的目的。 以下为项目中引入 element-ui 组件库为例：</p><p>首先，安装babel-plugin-component：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-plugin-component <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，将 .babelrc 修改为：</p><div class="language-json5 line-numbers-mode" data-ext="json5" data-title="json5"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;styleLibraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;theme-chalk&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 main.js 中引入部分组件：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化无限列表性能" tabindex="-1"><a class="header-anchor" href="#优化无限列表性能"><span>优化无限列表性能</span></a></h3><p>如果你的应用存在非常长或者无限滚动的列表，那么需要采用窗口化的技术来优化性能，只需要渲染少部分区域的内容，减少重新渲染组件和创建 dom 节点的时间。 你可以参考以下开源项目 vue-virtual-scroll-list 和 vue-virtual-scroller来优化这种无限列表的场景的。</p><h3 id="服务端渲染-ssr-or-预渲染" tabindex="-1"><a class="header-anchor" href="#服务端渲染-ssr-or-预渲染"><span>服务端渲染 SSR or 预渲染</span></a></h3><p>服务端渲染是指 Vue 在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的 html 片段直接返回给客户端这个过程就叫做服务端渲染。</p><ul><li>服务端渲染的优点：</li></ul><p><strong>更好的 SEO</strong> ：因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；</p><p>而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面；</p><p><strong>更快的内容到达时间（首屏加载更快）</strong>：SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；</p><ul><li>服务端渲染的缺点：</li></ul><p><strong>更多的开发条件限制</strong>：例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；</p><p><strong>更多的服务器负载</strong>：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用CPU 资源，因此如果你预料在高流量环境下使用，请准备相应的服务器负载，并明智地采用缓存策略。</p><p>如果你的项目的 SEO 和 首屏渲染是评价项目的关键指标，那么你的项目就需要服务端渲染来帮助你实现最佳的初始加载性能和 SEO，具体的 Vue SSR 如何实现，可以参考作者的另一篇文章《Vue SSR 踩坑之旅》。</p><p>如果你的 Vue 项目只需改善少数营销页面（例如 /， /about，/contact等）的 SEO，那么你可能需要预渲染，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。</p><p>优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点，具体你可以使用 prerender-spa-plugin 就可以轻松地添加预渲染 。</p>`,68),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/FrontEnd/Performance/Skill/","title":"性能优化方法","lang":"zh-CN","frontmatter":{"title":"性能优化方法","lang":"zh-CN","date":"2022-06-01T15:08:30.000Z","permalink":"/FrontEnd/Performance/Skill/","icon":"enum","category":["性能优化"],"tag":["不咋滴的性能优化"],"description":"Vue 框架通过数据双向绑定和虚拟 DOM 技术，帮我们处理了前端开发中最脏最累的 DOM 操作部分， 使得我们不再需要去考虑如何操作 DOM 以及如何最高效地操作 DOM。 但 Vue 项目中仍然存在项目首屏优化、Webpack 编译配置优化等问题， 所以我们仍然需要去关注 Vue 项目性能方面的优化，使项目具有更高效的性能、更好的用户体验。本文内容...","head":[["meta",{"property":"og:url","content":"https://shaohui-jin.github.io/FrontEnd/Performance/Skill/"}],["meta",{"property":"og:title","content":"性能优化方法"}],["meta",{"property":"og:description","content":"Vue 框架通过数据双向绑定和虚拟 DOM 技术，帮我们处理了前端开发中最脏最累的 DOM 操作部分， 使得我们不再需要去考虑如何操作 DOM 以及如何最高效地操作 DOM。 但 Vue 项目中仍然存在项目首屏优化、Webpack 编译配置优化等问题， 所以我们仍然需要去关注 Vue 项目性能方面的优化，使项目具有更高效的性能、更好的用户体验。本文内容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T10:00:43.000Z"}],["meta",{"property":"article:author","content":"石怜安"}],["meta",{"property":"article:tag","content":"不咋滴的性能优化"}],["meta",{"property":"article:published_time","content":"2022-06-01T15:08:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T10:00:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能优化方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-01T15:08:30.000Z\\",\\"dateModified\\":\\"2024-03-11T10:00:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石怜安\\",\\"url\\":\\"https://shaohui-jin.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Vue 代码层面的优化","slug":"vue-代码层面的优化","link":"#vue-代码层面的优化","children":[{"level":3,"title":"v-if 和 v-show 区分使用场景","slug":"v-if-和-v-show-区分使用场景","link":"#v-if-和-v-show-区分使用场景","children":[]},{"level":3,"title":"computed 和 watch区分使用场景","slug":"computed-和-watch区分使用场景","link":"#computed-和-watch区分使用场景","children":[]},{"level":3,"title":"v-for 遍历必须为 item 添加 key，且避免同时使用 v-if","slug":"v-for-遍历必须为-item-添加-key-且避免同时使用-v-if","link":"#v-for-遍历必须为-item-添加-key-且避免同时使用-v-if","children":[]},{"level":3,"title":"长列表性能优化","slug":"长列表性能优化","link":"#长列表性能优化","children":[]},{"level":3,"title":"事件的销毁","slug":"事件的销毁","link":"#事件的销毁","children":[]},{"level":3,"title":"图片资源懒加载","slug":"图片资源懒加载","link":"#图片资源懒加载","children":[]},{"level":3,"title":"路由懒加载","slug":"路由懒加载","link":"#路由懒加载","children":[]},{"level":3,"title":"第三方插件的按需引入","slug":"第三方插件的按需引入","link":"#第三方插件的按需引入","children":[]},{"level":3,"title":"优化无限列表性能","slug":"优化无限列表性能","link":"#优化无限列表性能","children":[]},{"level":3,"title":"服务端渲染 SSR or 预渲染","slug":"服务端渲染-ssr-or-预渲染","link":"#服务端渲染-ssr-or-预渲染","children":[]}]}],"git":{"createdTime":1710151243000,"updatedTime":1710151243000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":8.43,"words":2528},"filePathRelative":"zh/Knowledge/FrontEnd/Performance/Skill.md","localizedDate":"2022年6月1日","excerpt":"<p>Vue 框架通过数据双向绑定和虚拟 DOM 技术，帮我们处理了前端开发中最脏最累的 DOM 操作部分，</p>\\n<p>使得我们不再需要去考虑如何操作 DOM 以及如何最高效地操作 DOM。</p>\\n<p>但 Vue 项目中仍然存在项目首屏优化、Webpack 编译配置优化等问题，</p>\\n<p>所以我们仍然需要去关注 Vue 项目性能方面的优化，使项目具有更高效的性能、更好的用户体验。本文内容分为以下三部分组成：</p>\\n<ul>\\n<li>Vue 代码层面的优化</li>\\n<li>webpack 配置层面的优化</li>\\n<li>基础的 Web 技术层面的优化</li>\\n</ul>\\n<h2>Vue 代码层面的优化</h2>","autoDesc":true}');export{d as comp,k as data};
