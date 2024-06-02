import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,a as n,f as s}from"./app-DCbk2o9R.js";const p={},o=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"asyncReplaceAll"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("pattern"),n("span",{class:"token punctuation"},","),s(" replacer")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 校验替换参数，如果是文本，调用原本替换方法，同时不是函数的话，报类型错误"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" replacer "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceAll"),n("span",{class:"token punctuation"},"("),s("pattern"),n("span",{class:"token punctuation"},","),s(" replacer"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" replacer "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'function'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TypeError"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'The second argument should be an async function or a string'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 校验正则参数，同时新建正则实例，不会影响传入的正则"),s(`
  `),n("span",{class:"token keyword"},"let"),s(` reg
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" pattern "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    reg `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"RegExp"),n("span",{class:"token punctuation"},"("),s("pattern"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"[.*+\\-?^${}()|[\\]\\\\]"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\\\\$&'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'g'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pattern "),n("span",{class:"token keyword"},"instanceof"),s(),n("span",{class:"token class-name"},"RegExp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("pattern"),n("span",{class:"token punctuation"},"."),s("global"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TypeError"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'The pattern RegExp should have the global flag set'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    reg `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"RegExp"),n("span",{class:"token punctuation"},"("),s("pattern"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TypeError"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'The pattern should be a string or a RegExp'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" match "),n("span",{class:"token comment"},"// 正则执行结果"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" lastIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"// 角标"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token comment"},"// 文本结果集合"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("match "),n("span",{class:"token operator"},"="),s(" reg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exec"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// [ '55', index: 4, input: '234,55-234_j24-455', groups: undefined ]"),s(`
    `),n("span",{class:"token comment"},"// [ '234', index: 7, input: '234,55-234_j24-455', groups: undefined ]"),s(`
    `),n("span",{class:"token comment"},"// [ '24', index: 12, input: '234,55-234_j24-455', groups: undefined ]"),s(`
    `),n("span",{class:"token comment"},"// [ '455', index: 15, input: '234,55-234_j24-455', groups: undefined ]"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("lastIndex"),n("span",{class:"token punctuation"},","),s(" match"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 获取两次结果之间的文本"),s(`
    lastIndex `),n("span",{class:"token operator"},"="),s(" match"),n("span",{class:"token punctuation"},"."),s("index "),n("span",{class:"token operator"},"+"),s(" match"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token comment"},"// 更新当前下标值"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" promise "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"replacer"),n("span",{class:"token punctuation"},"("),s("match"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 执行异步替换函数"),s(`
    result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},","),s(" promise"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("lastIndex"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 防止后面也有字符"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"all"),n("span",{class:"token punctuation"},"("),s("result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 等待异步事件完成"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" template "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"234,55-234_j24-455"),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token comment"},"// 模拟异步函数"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"asyncPlaceFn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"str"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" max "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s("min "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'一二三四五六七八九十'"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" num "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"-"),s(" min "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" min"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},"["),s("num"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" template"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"asyncReplaceAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\d+"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"match"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"asyncPlaceFn"),n("span",{class:"token punctuation"},"("),s("match"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 五,二-五_j七-八"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),c=[o];function l(u,k){return t(),e("div",null,c)}const m=a(p,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/Tips/JavaScript/Data/004/","title":"字符串--异步替换","lang":"zh-CN","frontmatter":{"title":"字符串--异步替换","lang":"zh-CN","date":"2024-05-28T18:19:31.000Z","permalink":"/Tips/JavaScript/Data/004/","category":["JavaScript"],"tag":["Tips"],"head":[["meta",{"property":"og:url","content":"https://shaohui-jin.github.io/Tips/JavaScript/Data/004/"}],["meta",{"property":"og:title","content":"字符串--异步替换"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-02T11:17:14.000Z"}],["meta",{"property":"article:author","content":"石怜安"}],["meta",{"property":"article:tag","content":"Tips"}],["meta",{"property":"article:published_time","content":"2024-05-28T18:19:31.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-02T11:17:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串--异步替换\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-28T18:19:31.000Z\\",\\"dateModified\\":\\"2024-06-02T11:17:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石怜安\\",\\"url\\":\\"https://shaohui-jin.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1717327034000,"updatedTime":1717327034000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"zh/小技巧/JavaScript/数据操作相关/004.字符串--异步替换.md","localizedDate":"2024年5月28日","excerpt":"<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre js=\\"\\" class=\\"language-javascript\\"><code><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">asyncReplaceAll</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">async</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">pattern<span class=\\"token punctuation\\">,</span> replacer</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 校验替换参数，如果是文本，调用原本替换方法，同时不是函数的话，报类型错误</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> replacer <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'string'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replaceAll</span><span class=\\"token punctuation\\">(</span>pattern<span class=\\"token punctuation\\">,</span> replacer<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> replacer <span class=\\"token operator\\">!==</span> <span class=\\"token string\\">'function'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">TypeError</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'The second argument should be an async function or a string'</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token comment\\">// 校验正则参数，同时新建正则实例，不会影响传入的正则</span>\\n  <span class=\\"token keyword\\">let</span> reg\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> pattern <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'string'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    reg <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">RegExp</span><span class=\\"token punctuation\\">(</span>pattern<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token regex\\"><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-source language-regex\\">[.*+\\\\-?^\${}()|[\\\\]\\\\\\\\]</span><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-flags\\">g</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'\\\\\\\\$&amp;'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'g'</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>pattern <span class=\\"token keyword\\">instanceof</span> <span class=\\"token class-name\\">RegExp</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>pattern<span class=\\"token punctuation\\">.</span>global<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">TypeError</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'The pattern RegExp should have the global flag set'</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    reg <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">RegExp</span><span class=\\"token punctuation\\">(</span>pattern<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">TypeError</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'The pattern should be a string or a RegExp'</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">let</span> match <span class=\\"token comment\\">// 正则执行结果</span>\\n  <span class=\\"token keyword\\">let</span> lastIndex <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token comment\\">// 角标</span>\\n  <span class=\\"token keyword\\">const</span> result <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\">// 文本结果集合</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>match <span class=\\"token operator\\">=</span> reg<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">exec</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// [ '55', index: 4, input: '234,55-234_j24-455', groups: undefined ]</span>\\n    <span class=\\"token comment\\">// [ '234', index: 7, input: '234,55-234_j24-455', groups: undefined ]</span>\\n    <span class=\\"token comment\\">// [ '24', index: 12, input: '234,55-234_j24-455', groups: undefined ]</span>\\n    <span class=\\"token comment\\">// [ '455', index: 15, input: '234,55-234_j24-455', groups: undefined ]</span>\\n    <span class=\\"token keyword\\">const</span> str <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">slice</span><span class=\\"token punctuation\\">(</span>lastIndex<span class=\\"token punctuation\\">,</span> match<span class=\\"token punctuation\\">.</span>index<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 获取两次结果之间的文本</span>\\n    lastIndex <span class=\\"token operator\\">=</span> match<span class=\\"token punctuation\\">.</span>index <span class=\\"token operator\\">+</span> match<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>length <span class=\\"token comment\\">// 更新当前下标值</span>\\n    <span class=\\"token keyword\\">const</span> promise <span class=\\"token operator\\">=</span> <span class=\\"token function\\">replacer</span><span class=\\"token punctuation\\">(</span>match<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 执行异步替换函数</span>\\n    result<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>str<span class=\\"token punctuation\\">,</span> promise<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  result<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">slice</span><span class=\\"token punctuation\\">(</span>lastIndex<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 防止后面也有字符</span>\\n  <span class=\\"token keyword\\">const</span> temp <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> Promise<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">all</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 等待异步事件完成</span>\\n  <span class=\\"token keyword\\">return</span> temp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">''</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> template <span class=\\"token operator\\">=</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">234,55-234_j24-455</span><span class=\\"token template-punctuation string\\">\`</span></span>\\n<span class=\\"token comment\\">// 模拟异步函数</span>\\n<span class=\\"token keyword\\">async</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">asyncPlaceFn</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">str</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> max <span class=\\"token operator\\">=</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">,</span>min <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">const</span> temp <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'一二三四五六七八九十'</span>\\n  <span class=\\"token keyword\\">const</span> num <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">random</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token punctuation\\">(</span>max <span class=\\"token operator\\">-</span> min <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> min<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Promise</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">resolve</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">resolve</span><span class=\\"token punctuation\\">(</span>temp<span class=\\"token punctuation\\">[</span>num<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> result <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> template<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asyncReplaceAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token regex\\"><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-source language-regex\\">\\\\d+</span><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-flags\\">g</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">match</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">asyncPlaceFn</span><span class=\\"token punctuation\\">(</span>match<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 五,二-五_j七-八</span>\\n</code></pre></div>"}`);export{m as comp,d as data};
