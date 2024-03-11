import{_ as l,Y as i,Z as t,a1 as n,a3 as e,a2 as o,$ as s,I as r}from"./framework-990fb3f1.js";const a={},c=s('<div class="hint-container info"><p class="hint-container-title">JavaScript代码</p><ul><li>作用域 <sup>随着作用域链中的作用域数量的增加，访问当前作用域以外的变量的时间也在增加。访问全局变量总是要比访问局部变量慢，因为要遍历作用域链。</sup><ol><li>避免全局查找(少用全局变量)：将在一个函数中会多次用到的全局对象存储为局部变量总是没错的。</li><li>避免 <strong>with</strong> 语句：with会创建自己的作用域，因此会增加其中执行代码的 <strong>作用域链的长度</strong>。</li></ol></li><li>DOM <ol><li>用 <strong>innerHTML</strong> 代替DOM操作，减少DOM操作次数。</li><li>用 <strong>setTimeout</strong> 避免页面失去响应。</li></ol></li><li>用变量保存 <strong>Ajax请求</strong> 结果，操作本地变量时不用请求，减少请求次数。</li><li>尽量使用 <strong>事件委托模式</strong>，避免批量绑定事件。</li></ul></div>',1),d={class:"hint-container info"},p=n("p",{class:"hint-container-title"},"HTML + css",-1),u=n("strong",null,"图片",-1),g=n("strong",null,"iFrame",-1),S=n("strong",null,"src属性",-1),m=n("strong",null,"重新加载",-1),v=n("strong",null,"HTML标签",-1),h=n("strong",null,"Style属性",-1),f=n("strong",null,"className",-1),b=n("strong",null,"Style",-1),y=n("strong",null,"CSS表达式(动态属性)",-1),C=n("strong",null,"高级选择器",-1),x=n("strong",null,"通配选择器",-1),k=n("strong",null,"table",-1),w=n("strong",null,"float",-1),D=n("strong",null,"font-size",-1),P=n("strong",null,"CSS",-1),G=n("strong",null,"页面头部",-1),T=n("strong",null,"0",-1),I=n("strong",null,"display",-1),N=n("ol",null,[n("li",null,[n("strong",null,"display:inline"),o(" 后不应该再使用 width、 height、 margin、 padding和float。")]),n("li",null,[n("strong",null,"display:inline-block"),o(" 后不应该再使用 float。")]),n("li",null,[n("strong",null,"display:block"),o(" 后不应该再使用 vertical-align。")]),n("li",null,[n("strong",null,"display:table-"),o("* 后不应该再使用 margin或者float。")])],-1),L=n("ol",null,[n("li",null,"浏览器无前缀应放在最后。"),n("li",null,"CSS动画只用（-webkit-无前缀）两种即可。"),n("li",null,"他前缀包括 -webkit-、-moz-、-ms-、无前缀（Opera浏览器改用 blink内核，所以-0-被淘汰）")],-1),J=s("<li>通过HTML设置 Viewport元标签， Viewport可以加速页面的渲染，如以下代码所示。 <code>&lt;meta name=viewport content=width=device=width,initial-scale=1&gt;</code></li><li>合理使用 <strong>CSS3动画</strong>，开启硬件加速，CSS中的属性（CSS3 transitions、CSS3 3D transforms、 Opacity、 Canvas、 WebGL、Video）触发 <strong>GPU渲染</strong>。 <ol><li>尽可能多地利用硬件能力，如使用3D变形来开启GPU加速，例如以下代码。 <ul><li><code>webkit-transform: translate 3d(0, 0, 0);</code></li><li><code>-moz-transform: translate3d(0,0, 0);</code></li><li><code>-ms-transform: translate 3d(0,0,0);</code></li><li><code>transform: translate3d(0,0,0);</code></li></ul></li><li>一个元素通过 translate3d右移500X的动画流畅度会明显优于使用left属性实现的动画移动，原因是CSS动画属性会触发整个页面重排、重绘、重组。paint通常是最耗性能的，尽可能避免使用触发 paint的CSS动画属性。如果动画执行过程中有闪烁（通常发生在动画开始的时候），可以通过如下方式处理。 <ul><li><code>-webkit-backface-visibility: hidden;</code></li><li><code>-moz-backface-visibility: hidden;</code></li><li><code>-ms-backface-visibility: hidden;</code></li><li><code>backface-visibility: hidden;</code></li><li><code>-webkit-perspective：1000;</code></li><li><code>-moz-perspective：1000;</code></li><li><code>-ms-perspective：1000;</code></li><li><code>perspective：1000;</code></li></ul></li><li>尽可能少使用box- shadows和 gradients，它们往往严重影响页面的性能，尤其是在一个元素中同时都使用时。</li><li>尽可能让动画元素脱离文档流，以减少重排，如以下代码所示。 <ul><li><code>position: fixed;</code></li><li><code>position: absolute;</code></li></ul></li></ol></li>",2),M=s('<div class="hint-container tip"><p class="hint-container-title">图片</p><ul><li>优化图片文件，减小其尺寸</li><li>图片格式的选择(常用的图片格式：JPEG，GIF，和PNG。) <ul><li>在同体积(24kb)下,jpeg图片显示效果最好。</li><li>gif更适合制作动画。</li><li>png对于非常小的 图片(小于5k)适用。</li></ul></li><li>为图片标明高度和宽度</li><li>对于图片懒加载，可以为页面添加一个滚动条事件，判断图片是否在可视区域内或者即将进入可视区域，优先加载。</li><li>如果为幻灯片、相册文件等，可以使用图片预加载技术，对于当前展示图片的前一张图片和后一张图片优先下载。</li><li>如果图片为CSS图片，可以使用 CSS Sprite、SVG sprite、 Icon font、Base64等技术。</li><li>如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩得特别小的缩略图，以提高用户体验。</li><li>如果图片展示区域小于图片的真实大小，则应在服务器端根据业务需要先行进行图片压缩，图片压缩后，图片大小与展示的就一致了。</li><li>图片尽量避免使用 DataURL。DataURL图片没有使用图片的压缩算法，文件会变大，并且要在解码后再渲染，加载慢，耗时长。</li></ul></div>',1),H=s('<div class="hint-container info"><p class="hint-container-title">移动端</p><ul><li>可以使用 <strong>touch事件</strong> 代替 <strong>click事件</strong>。</li><li>合理使用 <strong>requestAnimation Frame</strong>动画代替 <strong>setTimeout</strong>。</li><li>避免使用CSS3 <strong>渐变阴影</strong> 效果。</li></ul></div><div class="hint-container info"><p class="hint-container-title">HTTP</p><ul><li><p>网址后面加斜杠(&quot; <strong>/</strong> &quot;)，服务器会直接找到 <strong>要处理的目录</strong>，如果后面不加斜杠，服务器会从文件开始找起，使加载时间延长。</p></li><li><p>使用 <strong>CDN</strong>、外部的JavaScript和CSS文件缓存，添加 <strong>Expires</strong> 头，在服务器端配置 <strong>Etag</strong>，减少DNS查找。 <sup>在浏览器地址栏中输入URL以后，浏览器首先要查询域名（hostname）对应服务器的IP地址，一般需要耗费20~120ms的时间。DNS查询完成之前，浏览器无法识别服务器IP，因此不下载任何数据。基于性能考虑，ISP运营商、局域网路由、操作系统、客户端（浏览器）均会有相应的DNS缓存机制。</sup></p><ol><li>正IE缓存30min，可以通过注册表中 DnsCacheTimeout项设置。</li><li>Firefox混存1 min，通过 network.dnsCacheExpiration配置。</li><li>在 Chrome中通过依次单击“设置”→“选项”→“高级选项”，并勾选“用预提取DNS提高网页载入速度”选项来配置缓存时间。</li></ol></li><li><p>减少 cookie头信息的大小，头信息越大，资源传输速度越慢。</p></li><li><p>初始首屏之外的图片资源按需加载，静态资源延迟加载。</p></li><li><p>合并静态资源（减少HTTP请求）</p></li><li><p>减少页面中的元素，网页中的图片,form,flash等元素都会发出http请求，尽量减少页面中非必要元素，可以减少http请求次数。</p></li><li><p>可以把一些图标制作成精灵图样式，使用background-image,background-position属性显示其中一小部分。</p></li><li><p>JS文件和CSS文件只有一个，合并脚本和css文件，减少http请求</p></li><li><p>使用 localstorage缓存和 mainfest 应用缓存</p></li></ul></div><div class="hint-container info"><p class="hint-container-title">webpack</p><ul><li>压缩文件，开启GZIP。</li><li>文件压缩，文件的大小会直接影响浏览器的加载速度，可使用构建工具;webpack,gulp/grunt,rollup等构建工具</li><li>删除代码中无用的css，可以借助Uncss工具移除样式表中无用的css</li><li>压缩源码和图片（ JavaScript采用混淆压缩，CSS进行普通压缩，JPG图片根据具体质量压缩为50%~70%，把PNG图片从24色压缩成8色以去掉一些PNG格式信息等）。</li></ul></div>',3);const U=l(a,[["render",function(l,s){const a=r("Badge");return i(),t("div",null,[c,n("div",d,[p,n("ul",null,[n("li",null,[e(a,{text:"避免",type:"danger",vertical:"middle"}),o(),u,o(" 和 "),g,o(" 等 "),S,o(" 为空。src属性为空，会 "),m,o(" 当前页面。")]),n("li",null,[e(a,{text:"避免",type:"danger",vertical:"middle"}),o(),v,o(" 中写 "),h,o("。当需要设置的样式很多时，设置 "),f,o(" 而不是直接操作 "),b,o("。")]),n("li",null,[e(a,{text:"避免",type:"danger",vertical:"middle"}),o(),y,o("、"),C,o("、"),x,o("。")]),n("li",null,[e(a,{text:"避免",type:"danger",vertical:"middle"}),o(" 在页面的主体布局中使用"),k,o("，table要在其中的内容完全下载之后才会显示出来，显示的速度比DIV+CSS布局慢。 ")]),n("li",null,[e(a,{text:"不滥用",type:"warning",vertical:"middle"}),o(),w,o("，float在渲染时计算量比较大，尽量少使用。")]),n("li",null,[e(a,{text:"不滥用",type:"warning",vertical:"middle"}),o(),D,o("，Web字体需要下载、解析、重绘当前页面，尽量少使用。")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 把 "),P,o(" 放在 "),G,o(" 把 JavaScript代码放在页面底部（这样避免阻塞页面渲染而使页面出现长时间的空白）")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 当值为 "),T,o(" 时不需要单位。")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 将样式表放在顶部，将脚本放在底部，加上时间戳。")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 多个CSS合并为一个CSS")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 尽量使用CSS3动画")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 减少重绘和回流")]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 正确使用 "),I,o(" 属性，display属性会影响页面的渲染，因此要注意以下几方面。"),N]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 标准化各种浏览器前缀，并注意以下几方面。"),L]),n("li",null,[e(a,{text:"tip",type:"tip",vertical:"middle"}),o(" 添加 Favicon.ico，如果没有设置图标ico，则默认的图标会导致发送一个404或者500请求。")]),J]),M]),H])}],["__file","index.html.vue"]]);export{U as default};
