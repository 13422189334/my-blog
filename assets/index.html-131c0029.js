const e=JSON.parse('{"key":"v-462bea94","path":"/FrontEnd/Standard/HTML/","title":"HTML规范指南","lang":"zh-CN","frontmatter":{"title":"HTML规范指南","date":"2022-06-22T10:28:05.000Z","permalink":"/FrontEnd/Standard/HTML/","icon":"html","category":["前端规范"],"tag":["前端规范"],"description":"HTML 作为描述网页结构的超文本标记语言，本文档的目标是使 HTML 代码风格保持一致，容易被理解和被维护。","head":[["meta",{"property":"og:url","content":"https://jin-shaohui.gitee.io/FrontEnd/Standard/HTML/"}],["meta",{"property":"og:site_name","content":"繁华中自律，落魄中自愈"}],["meta",{"property":"og:title","content":"HTML规范指南"}],["meta",{"property":"og:description","content":"HTML 作为描述网页结构的超文本标记语言，本文档的目标是使 HTML 代码风格保持一致，容易被理解和被维护。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-14T09:02:01.000Z"}],["meta",{"property":"article:tag","content":"前端规范"}],["meta",{"property":"article:published_time","content":"2022-06-22T10:28:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-14T09:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML规范指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-22T10:28:05.000Z\\",\\"dateModified\\":\\"2023-08-14T09:02:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"通用","slug":"通用","link":"#通用","children":[{"level":3,"title":"【强制】 使用 HTML5 的 doctype 来启用标准模式，建议使用大写的 DOCTYPE。","slug":"【强制】-使用-html5-的-doctype-来启用标准模式-建议使用大写的-doctype。","link":"#【强制】-使用-html5-的-doctype-来启用标准模式-建议使用大写的-doctype。","children":[]},{"level":3,"title":"【推荐】在 html 标签上设置正确的 lang 属性。","slug":"【推荐】在-html-标签上设置正确的-lang-属性。","link":"#【推荐】在-html-标签上设置正确的-lang-属性。","children":[]},{"level":3,"title":"【强制】 页面必须使用精简形式，明确指定字符编码。指定字符编码的 meta 必须是 head 的第一个直接子元素。","slug":"【强制】-页面必须使用精简形式-明确指定字符编码。指定字符编码的-meta-必须是-head-的第一个直接子元素。","link":"#【强制】-页面必须使用精简形式-明确指定字符编码。指定字符编码的-meta-必须是-head-的第一个直接子元素。","children":[]},{"level":3,"title":"【强制】 CSS 和 JavaScript 引入","slug":"【强制】-css-和-javascript-引入","link":"#【强制】-css-和-javascript-引入","children":[]},{"level":3,"title":"【建议】 引入 CSS 和 JavaScript 时无须指明 type 属性。","slug":"【建议】-引入-css-和-javascript-时无须指明-type-属性。","link":"#【建议】-引入-css-和-javascript-时无须指明-type-属性。","children":[]},{"level":3,"title":"【建议】 JavaScript 应当放在页面末尾，或采用异步加载。","slug":"【建议】-javascript-应当放在页面末尾-或采用异步加载。","link":"#【建议】-javascript-应当放在页面末尾-或采用异步加载。","children":[]},{"level":3,"title":"【建议】 移动环境或只针对现代浏览器设计的 Web 应用，如果引用外部资源的 URL 协议部分与页面相同，建议省略协议前缀。","slug":"【建议】-移动环境或只针对现代浏览器设计的-web-应用-如果引用外部资源的-url-协议部分与页面相同-建议省略协议前缀。","link":"#【建议】-移动环境或只针对现代浏览器设计的-web-应用-如果引用外部资源的-url-协议部分与页面相同-建议省略协议前缀。","children":[]},{"level":3,"title":"【强制】 页面必须包含 title 标签声明标题。且 title 必须作为 head 的直接子元素，并紧随 charset 声明之后。","slug":"【强制】-页面必须包含-title-标签声明标题。且-title-必须作为-head-的直接子元素-并紧随-charset-声明之后。","link":"#【强制】-页面必须包含-title-标签声明标题。且-title-必须作为-head-的直接子元素-并紧随-charset-声明之后。","children":[]},{"level":3,"title":"【强制】 保证 favicon 可访问。","slug":"【强制】-保证-favicon-可访问。","link":"#【强制】-保证-favicon-可访问。","children":[]},{"level":3,"title":"【建议】 若页面欲对移动设备友好，需指定页面的 viewport。","slug":"【建议】-若页面欲对移动设备友好-需指定页面的-viewport。","link":"#【建议】-若页面欲对移动设备友好-需指定页面的-viewport。","children":[]}]},{"level":2,"title":"JavaScript规范指南","slug":"javascript规范指南","link":"#javascript规范指南","children":[{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[{"level":4,"title":"【强制】 所有的赋值都用 const，避免使用 var。eslint: prefer-const, no-const-assign","slug":"【强制】-所有的赋值都用-const-避免使用-var。eslint-prefer-const-no-const-assign","link":"#【强制】-所有的赋值都用-const-避免使用-var。eslint-prefer-const-no-const-assign","children":[]},{"level":4,"title":"【强制】 如果你一定要对参数重新赋值，使用 let，而不是 var。eslint: no-var","slug":"【强制】-如果你一定要对参数重新赋值-使用-let-而不是-var。eslint-no-var","link":"#【强制】-如果你一定要对参数重新赋值-使用-let-而不是-var。eslint-no-var","children":[]},{"level":4,"title":"注意：let 和 const 都是块级作用域。","slug":"注意-let-和-const-都是块级作用域。","link":"#注意-let-和-const-都是块级作用域。","children":[]}]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[{"level":4,"title":"【强制】 使用字面值创建对象。eslint: no-new-object","slug":"【强制】-使用字面值创建对象。eslint-no-new-object","link":"#【强制】-使用字面值创建对象。eslint-no-new-object","children":[]},{"level":4,"title":"【强制】 使用计算属性名创建一个带有动态属性名的对象。","slug":"【强制】-使用计算属性名创建一个带有动态属性名的对象。","link":"#【强制】-使用计算属性名创建一个带有动态属性名的对象。","children":[]},{"level":4,"title":"【强制】 用对象方法简写。eslint: object-shorthand","slug":"【强制】-用对象方法简写。eslint-object-shorthand","link":"#【强制】-用对象方法简写。eslint-object-shorthand","children":[]},{"level":4,"title":"【强制】 用属性值缩写。eslint: object-shorthand","slug":"【强制】-用属性值缩写。eslint-object-shorthand","link":"#【强制】-用属性值缩写。eslint-object-shorthand","children":[]},{"level":4,"title":"【推荐】将你的所有缩写放在对象声明的前面。","slug":"【推荐】将你的所有缩写放在对象声明的前面。","link":"#【推荐】将你的所有缩写放在对象声明的前面。","children":[]},{"level":4,"title":"【强制】 只对那些无效的标示使用引号 \'\'。eslint: quote-props","slug":"【强制】-只对那些无效的标示使用引号-。eslint-quote-props","link":"#【强制】-只对那些无效的标示使用引号-。eslint-quote-props","children":[]},{"level":4,"title":"【强制】 不要直接调用 Object.prototype上的方法，如 hasOwnProperty、propertyIsEnumerable、isPrototypeOf。","slug":"【强制】-不要直接调用-object-prototype上的方法-如-hasownproperty、propertyisenumerable、isprototypeof。","link":"#【强制】-不要直接调用-object-prototype上的方法-如-hasownproperty、propertyisenumerable、isprototypeof。","children":[]},{"level":4,"title":"【强制】 对象浅拷贝时，更推荐使用扩展运算符（即 ... 运算符），而不是 Object.assign 。获取对象指定的几个属性时，用对象的 rest 解构运算符（即 ... 运算符）更好。eslint: prefer-object-spread","slug":"【强制】-对象浅拷贝时-更推荐使用扩展运算符-即-运算符-而不是-object-assign-。获取对象指定的几个属性时-用对象的-rest-解构运算符-即-运算符-更好。eslint-prefer-object-spread","link":"#【强制】-对象浅拷贝时-更推荐使用扩展运算符-即-运算符-而不是-object-assign-。获取对象指定的几个属性时-用对象的-rest-解构运算符-即-运算符-更好。eslint-prefer-object-spread","children":[]}]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[{"level":4,"title":"【强制】 用字面量创建数组。eslint: no-array-constructor","slug":"【强制】-用字面量创建数组。eslint-no-array-constructor","link":"#【强制】-用字面量创建数组。eslint-no-array-constructor","children":[]},{"level":4,"title":"【强制】 用 Array#push代替直接向数组中添加一个值。","slug":"【强制】-用-array-push代替直接向数组中添加一个值。","link":"#【强制】-用-array-push代替直接向数组中添加一个值。","children":[]},{"level":4,"title":"【强制】 用扩展运算符做数组浅拷贝，类似上面的对象浅拷贝。","slug":"【强制】-用扩展运算符做数组浅拷贝-类似上面的对象浅拷贝。","link":"#【强制】-用扩展运算符做数组浅拷贝-类似上面的对象浅拷贝。","children":[]},{"level":4,"title":"【强制】 用 ... 运算符而不是 Array.from来将一个可迭代的对象转换成数组。","slug":"【强制】-用-运算符而不是-array-from来将一个可迭代的对象转换成数组。","link":"#【强制】-用-运算符而不是-array-from来将一个可迭代的对象转换成数组。","children":[]},{"level":4,"title":"【强制】 用 Array.from将一个类数组对象转成一个数组。","slug":"【强制】-用-array-from将一个类数组对象转成一个数组。","link":"#【强制】-用-array-from将一个类数组对象转成一个数组。","children":[]},{"level":4,"title":"【强制】 用 Array.from而不是 ... 运算符去做 map 遍历。 因为这样可以避免创建一个临时数组。","slug":"【强制】-用-array-from而不是-运算符去做-map-遍历。-因为这样可以避免创建一个临时数组。","link":"#【强制】-用-array-from而不是-运算符去做-map-遍历。-因为这样可以避免创建一个临时数组。","children":[]},{"level":4,"title":"【强制】 在数组方法的回调函数中使用 return 语句。如果函数体由一条返回一个表达式的语句组成，并且这个表达式没有副作用， 这个时候可以忽略 return，详见 7.2。eslint: array-callback-return","slug":"【强制】-在数组方法的回调函数中使用-return-语句。如果函数体由一条返回一个表达式的语句组成-并且这个表达式没有副作用-这个时候可以忽略-return-详见-7-2。eslint-array-callback-return","link":"#【强制】-在数组方法的回调函数中使用-return-语句。如果函数体由一条返回一个表达式的语句组成-并且这个表达式没有副作用-这个时候可以忽略-return-详见-7-2。eslint-array-callback-return","children":[]},{"level":4,"title":"【强制】 如果一个数组有很多行，在数组的 [ 后和 ] 前断行。请看下面示例：","slug":"【强制】-如果一个数组有很多行-在数组的-后和-前断行。请看下面示例","link":"#【强制】-如果一个数组有很多行-在数组的-后和-前断行。请看下面示例","children":[]}]},{"level":3,"title":"解构","slug":"解构","link":"#解构","children":[{"level":4,"title":"【强制】 用对象的解构赋值来获取和使用对象某个或多个属性值。eslint: prefer-destructuring","slug":"【强制】-用对象的解构赋值来获取和使用对象某个或多个属性值。eslint-prefer-destructuring","link":"#【强制】-用对象的解构赋值来获取和使用对象某个或多个属性值。eslint-prefer-destructuring","children":[]},{"level":4,"title":"【强制】 用数组解构。eslint: prefer-destructuring","slug":"【强制】-用数组解构。eslint-prefer-destructuring","link":"#【强制】-用数组解构。eslint-prefer-destructuring","children":[]},{"level":4,"title":"【强制】 多个返回值用对象的解构，而不是数组解构。","slug":"【强制】-多个返回值用对象的解构-而不是数组解构。","link":"#【强制】-多个返回值用对象的解构-而不是数组解构。","children":[]}]},{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[{"level":4,"title":"【强制】 字符串应使用单引号 \'\' 。eslint: quotes","slug":"【强制】-字符串应使用单引号-。eslint-quotes","link":"#【强制】-字符串应使用单引号-。eslint-quotes","children":[]},{"level":4,"title":"【强制】 超过 100 个字符的字符串不应该用字符串连接成多行。","slug":"【强制】-超过-100-个字符的字符串不应该用字符串连接成多行。","link":"#【强制】-超过-100-个字符的字符串不应该用字符串连接成多行。","children":[]},{"level":4,"title":"【推荐】当需要动态生成字符串时，使用模板字符串而不是字符串拼接。eslint: prefer-templatetemplate-curly-spacing","slug":"【推荐】当需要动态生成字符串时-使用模板字符串而不是字符串拼接。eslint-prefer-templatetemplate-curly-spacing","link":"#【推荐】当需要动态生成字符串时-使用模板字符串而不是字符串拼接。eslint-prefer-templatetemplate-curly-spacing","children":[]},{"level":4,"title":"永远不要使用 eval()，该方法有太多漏洞。eslint: no-eval","slug":"永远不要使用-eval-该方法有太多漏洞。eslint-no-eval","link":"#永远不要使用-eval-该方法有太多漏洞。eslint-no-eval","children":[]},{"level":4,"title":"不要使用不必要的转义字符。eslint: no-useless-escape","slug":"不要使用不必要的转义字符。eslint-no-useless-escape","link":"#不要使用不必要的转义字符。eslint-no-useless-escape","children":[]}]},{"level":3,"title":"函数","slug":"函数","link":"#函数","children":[{"level":4,"title":"【推荐】使用命名函数表达式而不是函数声明。eslint: func-style","slug":"【推荐】使用命名函数表达式而不是函数声明。eslint-func-style","link":"#【推荐】使用命名函数表达式而不是函数声明。eslint-func-style","children":[]},{"level":4,"title":"【强制】 把立即执行函数包裹在圆括号里。eslint: wrap-iife","slug":"【强制】-把立即执行函数包裹在圆括号里。eslint-wrap-iife","link":"#【强制】-把立即执行函数包裹在圆括号里。eslint-wrap-iife","children":[]},{"level":4,"title":"【强制】 不要在非函数块（if、while 等）内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做，但不同浏览器的解析方式不同，这是一个坏消息。eslint: no-loop-func","slug":"【强制】-不要在非函数块-if、while-等-内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做-但不同浏览器的解析方式不同-这是一个坏消息。eslint-no-loop-func","link":"#【强制】-不要在非函数块-if、while-等-内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做-但不同浏览器的解析方式不同-这是一个坏消息。eslint-no-loop-func","children":[]},{"level":4,"title":"【强制】 不要用 arguments 命名参数。他的优先级高于每个函数作用域自带的 arguments 对象，这会导致函数自带的 arguments 值被覆盖。","slug":"【强制】-不要用-arguments-命名参数。他的优先级高于每个函数作用域自带的-arguments-对象-这会导致函数自带的-arguments-值被覆盖。","link":"#【强制】-不要用-arguments-命名参数。他的优先级高于每个函数作用域自带的-arguments-对象-这会导致函数自带的-arguments-值被覆盖。","children":[]},{"level":4,"title":"【强制】 不要使用 arguments，用收集参数语法 ... 代替。eslint: prefer-rest-params","slug":"【强制】-不要使用-arguments-用收集参数语法-代替。eslint-prefer-rest-params","link":"#【强制】-不要使用-arguments-用收集参数语法-代替。eslint-prefer-rest-params","children":[]},{"level":4,"title":"【推荐】用默认参数语法而不是在函数里对参数重新赋值。","slug":"【推荐】用默认参数语法而不是在函数里对参数重新赋值。","link":"#【推荐】用默认参数语法而不是在函数里对参数重新赋值。","children":[]},{"level":4,"title":"【强制】 避免默认参数的副作用。","slug":"【强制】-避免默认参数的副作用。","link":"#【强制】-避免默认参数的副作用。","children":[]},{"level":4,"title":"【推荐】把默认参数赋值放在最后。eslint: default-param-last","slug":"【推荐】把默认参数赋值放在最后。eslint-default-param-last","link":"#【推荐】把默认参数赋值放在最后。eslint-default-param-last","children":[]},{"level":4,"title":"【强制】 不要用函数构造器创建函数。eslint: no-new-func","slug":"【强制】-不要用函数构造器创建函数。eslint-no-new-func","link":"#【强制】-不要用函数构造器创建函数。eslint-no-new-func","children":[]},{"level":4,"title":"【强制】 函数定义部分要有空格。eslint: space-before-function-parenspace-before-blocks","slug":"【强制】-函数定义部分要有空格。eslint-space-before-function-parenspace-before-blocks","link":"#【强制】-函数定义部分要有空格。eslint-space-before-function-parenspace-before-blocks","children":[]},{"level":4,"title":"【强制】 不要修改参数. eslint: no-param-reassign","slug":"【强制】-不要修改参数-eslint-no-param-reassign","link":"#【强制】-不要修改参数-eslint-no-param-reassign","children":[]},{"level":4,"title":"【推荐】不要对参数重新赋值。eslint: no-param-reassign","slug":"【推荐】不要对参数重新赋值。eslint-no-param-reassign","link":"#【推荐】不要对参数重新赋值。eslint-no-param-reassign","children":[]},{"level":4,"title":"【强制】 使用拓展运算符调用多参数的函数。eslint: prefer-spread","slug":"【强制】-使用拓展运算符调用多参数的函数。eslint-prefer-spread","link":"#【强制】-使用拓展运算符调用多参数的函数。eslint-prefer-spread","children":[]},{"level":4,"title":"【强制】 调用或者编写一个包含多个参数的函数的缩进，应该像这个指南里的其他多行代码写法一样——即每行只包含一个参数，每行逗号结尾。","slug":"【强制】-调用或者编写一个包含多个参数的函数的缩进-应该像这个指南里的其他多行代码写法一样——即每行只包含一个参数-每行逗号结尾。","link":"#【强制】-调用或者编写一个包含多个参数的函数的缩进-应该像这个指南里的其他多行代码写法一样——即每行只包含一个参数-每行逗号结尾。","children":[]}]},{"level":3,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[{"level":4,"title":"【强制】 当你一定要用函数表达式（在回调函数里）的时候，使用箭头函数。 eslint: prefer-arrow-callback, arrow-spacing","slug":"【强制】-当你一定要用函数表达式-在回调函数里-的时候-使用箭头函数。-eslint-prefer-arrow-callback-arrow-spacing","link":"#【强制】-当你一定要用函数表达式-在回调函数里-的时候-使用箭头函数。-eslint-prefer-arrow-callback-arrow-spacing","children":[]},{"level":4,"title":"【强制】 如果函数体由一个没有副作用的 表达式语句组成，删除大括号和 return。否则，使用大括号和 return 语句。 eslint: arrow-parens , arrow-body-style","slug":"【强制】-如果函数体由一个没有副作用的-表达式语句组成-删除大括号和-return。否则-使用大括号和-return-语句。-eslint-arrow-parens-arrow-body-style","link":"#【强制】-如果函数体由一个没有副作用的-表达式语句组成-删除大括号和-return。否则-使用大括号和-return-语句。-eslint-arrow-parens-arrow-body-style","children":[]},{"level":4,"title":"【强制】 如果表达式涉及多行，把他包裹在圆括号里以提高可读性。","slug":"【强制】-如果表达式涉及多行-把他包裹在圆括号里以提高可读性。","link":"#【强制】-如果表达式涉及多行-把他包裹在圆括号里以提高可读性。","children":[]},{"level":4,"title":"【推荐】在箭头函数参数两头，总是使用小括号包裹住参数，这样做使代码更清晰且一致. eslint: arrow-parens","slug":"【推荐】在箭头函数参数两头-总是使用小括号包裹住参数-这样做使代码更清晰且一致-eslint-arrow-parens","link":"#【推荐】在箭头函数参数两头-总是使用小括号包裹住参数-这样做使代码更清晰且一致-eslint-arrow-parens","children":[]},{"level":4,"title":"【推荐】避免箭头函数（=>）和比较操作符（<=, >=）混淆. eslint: no-confusing-arrow","slug":"【推荐】避免箭头函数-和比较操作符-混淆-eslint-no-confusing-arrow","link":"#【推荐】避免箭头函数-和比较操作符-混淆-eslint-no-confusing-arrow","children":[]},{"level":4,"title":"【推荐】使箭头函数体有一个清晰的返回。 eslint: implicit-arrow-linebreak","slug":"【推荐】使箭头函数体有一个清晰的返回。-eslint-implicit-arrow-linebreak","link":"#【推荐】使箭头函数体有一个清晰的返回。-eslint-implicit-arrow-linebreak","children":[]}]},{"level":3,"title":"类与构造函数","slug":"类与构造函数","link":"#类与构造函数","children":[{"level":4,"title":"【推荐】使用 class 语法。避免直接操作 prototype。","slug":"【推荐】使用-class-语法。避免直接操作-prototype。","link":"#【推荐】使用-class-语法。避免直接操作-prototype。","children":[]},{"level":4,"title":"【强制】 用 extends 实现继承。","slug":"【强制】-用-extends-实现继承。","link":"#【强制】-用-extends-实现继承。","children":[]},{"level":4,"title":"【推荐】方法可以返回 this 来实现链式调用。","slug":"【推荐】方法可以返回-this-来实现链式调用。","link":"#【推荐】方法可以返回-this-来实现链式调用。","children":[]},{"level":4,"title":"【强制】 自己写 toString() 方法是可以的，但需要保证它可以正常工作且没有副作用。","slug":"【强制】-自己写-tostring-方法是可以的-但需要保证它可以正常工作且没有副作用。","link":"#【强制】-自己写-tostring-方法是可以的-但需要保证它可以正常工作且没有副作用。","children":[]},{"level":4,"title":"【强制】 如果没有特别定义，类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。 eslint: no-useless-constructor","slug":"【强制】-如果没有特别定义-类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。-eslint-no-useless-constructor","link":"#【强制】-如果没有特别定义-类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。-eslint-no-useless-constructor","children":[]},{"level":4,"title":"【强制】 避免重复定义类成员。eslint: no-dupe-class-members","slug":"【强制】-避免重复定义类成员。eslint-no-dupe-class-members","link":"#【强制】-避免重复定义类成员。eslint-no-dupe-class-members","children":[]},{"level":4,"title":"【推荐】除非外部库或框架需要使用特定的非静态方法，否则类方法应该使用 this 或被写成静态方法。 作为一个实例方法表明它应该根据实例的属性有不同的行为。eslint: class-methods-use-this","slug":"【推荐】除非外部库或框架需要使用特定的非静态方法-否则类方法应该使用-this-或被写成静态方法。-作为一个实例方法表明它应该根据实例的属性有不同的行为。eslint-class-methods-use-this","link":"#【推荐】除非外部库或框架需要使用特定的非静态方法-否则类方法应该使用-this-或被写成静态方法。-作为一个实例方法表明它应该根据实例的属性有不同的行为。eslint-class-methods-use-this","children":[]}]},{"level":3,"title":"模块","slug":"模块","link":"#模块","children":[{"level":4,"title":"【推荐】使用（import/export）模块而不是非标准的模块系统。你可以随时转到你喜欢的模块系统。","slug":"【推荐】使用-import-export-模块而不是非标准的模块系统。你可以随时转到你喜欢的模块系统。","link":"#【推荐】使用-import-export-模块而不是非标准的模块系统。你可以随时转到你喜欢的模块系统。","children":[]},{"level":4,"title":"【推荐】不要用 import 通配符， 即 * 这种方式。","slug":"【推荐】不要用-import-通配符-即-这种方式。","link":"#【推荐】不要用-import-通配符-即-这种方式。","children":[]},{"level":4,"title":"【推荐】不要直接从 import 中直接 export。","slug":"【推荐】不要直接从-import-中直接-export。","link":"#【推荐】不要直接从-import-中直接-export。","children":[]},{"level":4,"title":"【强制】 一个路径只 import 一次。eslint: no-duplicate-imports","slug":"【强制】-一个路径只-import-一次。eslint-no-duplicate-imports","link":"#【强制】-一个路径只-import-一次。eslint-no-duplicate-imports","children":[]},{"level":4,"title":"【强制】 不要导出可变的东西。eslint: import/no-mutable-exports","slug":"【强制】-不要导出可变的东西。eslint-import-no-mutable-exports","link":"#【强制】-不要导出可变的东西。eslint-import-no-mutable-exports","children":[]},{"level":4,"title":"【推荐】在一个单一导出模块里，用 export default 更好。eslint: import/prefer-default-export","slug":"【推荐】在一个单一导出模块里-用-export-default-更好。eslint-import-prefer-default-export","link":"#【推荐】在一个单一导出模块里-用-export-default-更好。eslint-import-prefer-default-export","children":[]},{"level":4,"title":"【强制】 把 import 放在其他所有语句之前。eslint: import/first","slug":"【强制】-把-import-放在其他所有语句之前。eslint-import-first","link":"#【强制】-把-import-放在其他所有语句之前。eslint-import-first","children":[]},{"level":4,"title":"【强制】 多行 import 应该缩进，就像多行数组和对象字面量一样。","slug":"【强制】-多行-import-应该缩进-就像多行数组和对象字面量一样。","link":"#【强制】-多行-import-应该缩进-就像多行数组和对象字面量一样。","children":[]},{"level":4,"title":"【强制】 在 import 语句里不允许 Webpack loader 语法。eslint: import/no-webpack-loader-syntax","slug":"【强制】-在-import-语句里不允许-webpack-loader-语法。eslint-import-no-webpack-loader-syntax","link":"#【强制】-在-import-语句里不允许-webpack-loader-语法。eslint-import-no-webpack-loader-syntax","children":[]}]},{"level":3,"title":"迭代器与生成器","slug":"迭代器与生成器","link":"#迭代器与生成器","children":[{"level":4,"title":"【强制】 不要用迭代器。使用 JavaScript 高级函数代替 for-in、 for-of。eslint: no-iterator no-restricted-syntax","slug":"【强制】-不要用迭代器。使用-javascript-高级函数代替-for-in、-for-of。eslint-no-iterator-no-restricted-syntax","link":"#【强制】-不要用迭代器。使用-javascript-高级函数代替-for-in、-for-of。eslint-no-iterator-no-restricted-syntax","children":[]},{"level":4,"title":"【强制】 现在暂时不要使用生成器。","slug":"【强制】-现在暂时不要使用生成器。","link":"#【强制】-现在暂时不要使用生成器。","children":[]},{"level":4,"title":"【强制】 如果你一定要用生成器，或者你忽略我们的建议，请确保它们的函数标志空格是得当的。eslint: generator-star-spacing","slug":"【强制】-如果你一定要用生成器-或者你忽略我们的建议-请确保它们的函数标志空格是得当的。eslint-generator-star-spacing","link":"#【强制】-如果你一定要用生成器-或者你忽略我们的建议-请确保它们的函数标志空格是得当的。eslint-generator-star-spacing","children":[]}]},{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[{"level":4,"title":"【强制】 访问属性时使用点符号。eslint: dot-notation","slug":"【强制】-访问属性时使用点符号。eslint-dot-notation","link":"#【强制】-访问属性时使用点符号。eslint-dot-notation","children":[]},{"level":4,"title":"【强制】 当使用变量获取属性时用方括号 []。","slug":"【强制】-当使用变量获取属性时用方括号-。","link":"#【强制】-当使用变量获取属性时用方括号-。","children":[]},{"level":4,"title":"【强制】 做幂运算时用幂操作符 ** 。eslint: no-restricted-properties .","slug":"【强制】-做幂运算时用幂操作符-。eslint-no-restricted-properties","link":"#【强制】-做幂运算时用幂操作符-。eslint-no-restricted-properties","children":[]}]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[{"level":4,"title":"【强制】 使用 const 或 let 声明变量。不这样做会导致全局变量。我们想要避免污染全局命名空间。地球超人也这样警告我们（译者注：可能是一个冷笑话）。 eslint: no-undef prefer-const","slug":"【强制】-使用-const-或-let-声明变量。不这样做会导致全局变量。我们想要避免污染全局命名空间。地球超人也这样警告我们-译者注-可能是一个冷笑话-。-eslint-no-undef-prefer-const","link":"#【强制】-使用-const-或-let-声明变量。不这样做会导致全局变量。我们想要避免污染全局命名空间。地球超人也这样警告我们-译者注-可能是一个冷笑话-。-eslint-no-undef-prefer-const","children":[]},{"level":4,"title":"【推荐】为每个变量声明都用一个 const 或 let。eslint: one-var","slug":"【推荐】为每个变量声明都用一个-const-或-let。eslint-one-var","link":"#【推荐】为每个变量声明都用一个-const-或-let。eslint-one-var","children":[]},{"level":4,"title":"【推荐】把const 和 let 分别放一起。","slug":"【推荐】把const-和-let-分别放一起。","link":"#【推荐】把const-和-let-分别放一起。","children":[]},{"level":4,"title":"【强制】 在你需要的地方声明变量，但是要放在合理的位置。","slug":"【强制】-在你需要的地方声明变量-但是要放在合理的位置。","link":"#【强制】-在你需要的地方声明变量-但是要放在合理的位置。","children":[]},{"level":4,"title":"【强制】 不要使用链式声明变量。 eslint: no-multi-assign","slug":"【强制】-不要使用链式声明变量。-eslint-no-multi-assign","link":"#【强制】-不要使用链式声明变量。-eslint-no-multi-assign","children":[]},{"level":4,"title":"【强制】 不要使用一元自增自减运算符（++， --）. eslint no-plusplus","slug":"【强制】-不要使用一元自增自减运算符-eslint-no-plusplus","link":"#【强制】-不要使用一元自增自减运算符-eslint-no-plusplus","children":[]},{"level":4,"title":"【推荐】在赋值的时候避免在 = 前/后换行。 如果你的赋值语句超出 max-len ，那就用小括号把这个值包起来再换行。eslint operator-linebreak .","slug":"【推荐】在赋值的时候避免在-前-后换行。-如果你的赋值语句超出-max-len-那就用小括号把这个值包起来再换行。eslint-operator-linebreak","link":"#【推荐】在赋值的时候避免在-前-后换行。-如果你的赋值语句超出-max-len-那就用小括号把这个值包起来再换行。eslint-operator-linebreak","children":[]},{"level":4,"title":"【强制】 不允许有未使用的变量。eslint: no-unused-vars","slug":"【强制】-不允许有未使用的变量。eslint-no-unused-vars","link":"#【强制】-不允许有未使用的变量。eslint-no-unused-vars","children":[]}]},{"level":3,"title":"提升","slug":"提升","link":"#提升","children":[{"level":4,"title":"var 声明会被提前到离他最近的作用域的最前面，但是它的赋值语句并没有提前。const 和 let 被赋予了新的概念 暂时性死区 。 重要的是要知道为什么 typeof 不再安全 .","slug":"var-声明会被提前到离他最近的作用域的最前面-但是它的赋值语句并没有提前。const-和-let-被赋予了新的概念-暂时性死区-。-重要的是要知道为什么-typeof-不再安全","link":"#var-声明会被提前到离他最近的作用域的最前面-但是它的赋值语句并没有提前。const-和-let-被赋予了新的概念-暂时性死区-。-重要的是要知道为什么-typeof-不再安全","children":[]},{"level":4,"title":"【强制】 匿名函数表达式和 var 情况相同。","slug":"【强制】-匿名函数表达式和-var-情况相同。","link":"#【强制】-匿名函数表达式和-var-情况相同。","children":[]},{"level":4,"title":"已命名函数表达式提升他的变量名，不是函数名或函数体。","slug":"已命名函数表达式提升他的变量名-不是函数名或函数体。","link":"#已命名函数表达式提升他的变量名-不是函数名或函数体。","children":[]},{"level":4,"title":"函数声明则提升了函数名和函数体。","slug":"函数声明则提升了函数名和函数体。","link":"#函数声明则提升了函数名和函数体。","children":[]}]},{"level":3,"title":"比较运算符与相等","slug":"比较运算符与相等","link":"#比较运算符与相等","children":[{"level":4,"title":"【强制】 用 === 和 !== 而不是 == 和 !=. eslint: eqeqeq","slug":"【强制】-用-和-而不是-和-eslint-eqeqeq","link":"#【强制】-用-和-而不是-和-eslint-eqeqeq","children":[]},{"level":4,"title":"【强制】 条件语句如 if 语句使用强制 ToBoolean 抽象方法来计算它们的表达式，并且始终遵循以下简单规则：","slug":"【强制】-条件语句如-if-语句使用强制-toboolean-抽象方法来计算它们的表达式-并且始终遵循以下简单规则","link":"#【强制】-条件语句如-if-语句使用强制-toboolean-抽象方法来计算它们的表达式-并且始终遵循以下简单规则","children":[]},{"level":4,"title":"【推荐】布尔值要用缩写，而字符串和数字要明确使用比较操作符。","slug":"【推荐】布尔值要用缩写-而字符串和数字要明确使用比较操作符。","link":"#【推荐】布尔值要用缩写-而字符串和数字要明确使用比较操作符。","children":[]},{"level":4,"title":"【推荐】在 case 和 default 分句里用大括号创建一块包含词法声明的区域（例如：let、const、function 和 class）。eslint rules: no-case-declarations.","slug":"【推荐】在-case-和-default-分句里用大括号创建一块包含词法声明的区域-例如-let、const、function-和-class-。eslint-rules-no-case-declarations","link":"#【推荐】在-case-和-default-分句里用大括号创建一块包含词法声明的区域-例如-let、const、function-和-class-。eslint-rules-no-case-declarations","children":[]},{"level":4,"title":"【强制】 三元表达式不应该嵌套，通常是单行表达式。eslint rules: no-nested-ternary","slug":"【强制】-三元表达式不应该嵌套-通常是单行表达式。eslint-rules-no-nested-ternary","link":"#【强制】-三元表达式不应该嵌套-通常是单行表达式。eslint-rules-no-nested-ternary","children":[]},{"level":4,"title":"【强制】 避免不必要的三元表达式。eslint rules: no-unneeded-ternary","slug":"【强制】-避免不必要的三元表达式。eslint-rules-no-unneeded-ternary","link":"#【强制】-避免不必要的三元表达式。eslint-rules-no-unneeded-ternary","children":[]},{"level":4,"title":"【强制】 用圆括号来组合操作符。 只有当标准的算术运算符（+, -, *, 和 /）， 并且它们的优先级显而易见时，才可以不用圆括号括起来。eslint: no-mixed-operators","slug":"【强制】-用圆括号来组合操作符。-只有当标准的算术运算符-和-并且它们的优先级显而易见时-才可以不用圆括号括起来。eslint-no-mixed-operators","link":"#【强制】-用圆括号来组合操作符。-只有当标准的算术运算符-和-并且它们的优先级显而易见时-才可以不用圆括号括起来。eslint-no-mixed-operators","children":[]}]},{"level":3,"title":"块","slug":"块","link":"#块","children":[{"level":4,"title":"【强制】 用大括号包裹多行代码块。 eslint: nonblock-statement-body-position","slug":"【强制】-用大括号包裹多行代码块。-eslint-nonblock-statement-body-position","link":"#【强制】-用大括号包裹多行代码块。-eslint-nonblock-statement-body-position","children":[]},{"level":4,"title":"【强制】 if 表达式的 else和 if 的右大括号在一行。eslint: brace-style","slug":"【强制】-if-表达式的-else和-if-的右大括号在一行。eslint-brace-style","link":"#【强制】-if-表达式的-else和-if-的右大括号在一行。eslint-brace-style","children":[]},{"level":4,"title":"【强制】 如果 if 语句中总是需要用 return 返回，那后续的 else 就不需要写了。 if 块中包含 return， 它后面的 else if 块中也包含了 return， 这个时候就可以把 return 分到多个 if 语句块中。 eslint: no-else-return","slug":"【强制】-如果-if-语句中总是需要用-return-返回-那后续的-else-就不需要写了。-if-块中包含-return-它后面的-else-if-块中也包含了-return-这个时候就可以把-return-分到多个-if-语句块中。-eslint-no-else-return","link":"#【强制】-如果-if-语句中总是需要用-return-返回-那后续的-else-就不需要写了。-if-块中包含-return-它后面的-else-if-块中也包含了-return-这个时候就可以把-return-分到多个-if-语句块中。-eslint-no-else-return","children":[]}]},{"level":3,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[{"level":4,"title":"【推荐】不要用选择操作符代替控制语句。","slug":"【推荐】不要用选择操作符代替控制语句。","link":"#【推荐】不要用选择操作符代替控制语句。","children":[]}]},{"level":3,"title":"注释","slug":"注释","link":"#注释","children":[{"level":4,"title":"【强制】 多行注释用 /** ... */。","slug":"【强制】-多行注释用-。","link":"#【强制】-多行注释用-。","children":[]},{"level":4,"title":"【强制】 单行注释用 //，将单行注释放在被注释区域上面。如果注释不是在第一行，那么注释前面就空一行。","slug":"【强制】-单行注释用-将单行注释放在被注释区域上面。如果注释不是在第一行-那么注释前面就空一行。","link":"#【强制】-单行注释用-将单行注释放在被注释区域上面。如果注释不是在第一行-那么注释前面就空一行。","children":[]},{"level":4,"title":"【强制】 所有注释开头空一格，方便阅读。eslint: spaced-comment","slug":"【强制】-所有注释开头空一格-方便阅读。eslint-spaced-comment","link":"#【强制】-所有注释开头空一格-方便阅读。eslint-spaced-comment","children":[]},{"level":4,"title":"【强制】 在你的注释前使用 FIXME 或 TODO 前缀，这有助于其他开发人员快速理解你指出的需要修复的问题， 或者您建议需要实现的问题的解决方案。 这些不同于常规注释，它们是有明确含义的。FIXME：需要修复这个问题或TODO：需要实现的功能。","slug":"【强制】-在你的注释前使用-fixme-或-todo-前缀-这有助于其他开发人员快速理解你指出的需要修复的问题-或者您建议需要实现的问题的解决方案。-这些不同于常规注释-它们是有明确含义的。fixme-需要修复这个问题或todo-需要实现的功能。","link":"#【强制】-在你的注释前使用-fixme-或-todo-前缀-这有助于其他开发人员快速理解你指出的需要修复的问题-或者您建议需要实现的问题的解决方案。-这些不同于常规注释-它们是有明确含义的。fixme-需要修复这个问题或todo-需要实现的功能。","children":[]},{"level":4,"title":"【强制】 用 // FIXME: 给问题做注释。","slug":"【强制】-用-fixme-给问题做注释。","link":"#【强制】-用-fixme-给问题做注释。","children":[]},{"level":4,"title":"【强制】 用 // TODO: 去注释问题的解决方案。","slug":"【强制】-用-todo-去注释问题的解决方案。","link":"#【强制】-用-todo-去注释问题的解决方案。","children":[]}]},{"level":3,"title":"空格","slug":"空格","link":"#空格","children":[{"level":4,"title":"【强制】 一个缩进使用两个空格。eslint: indent","slug":"【强制】-一个缩进使用两个空格。eslint-indent","link":"#【强制】-一个缩进使用两个空格。eslint-indent","children":[]},{"level":4,"title":"【推荐】在大括号前空一格。eslint: space-before-blocks","slug":"【推荐】在大括号前空一格。eslint-space-before-blocks","link":"#【推荐】在大括号前空一格。eslint-space-before-blocks","children":[]},{"level":4,"title":"【推荐】在控制语句（if, while 等）的圆括号前空一格。在函数调用和定义时，参数列表和函数名之间不空格。 eslint: keyword-spacing","slug":"【推荐】在控制语句-if-while-等-的圆括号前空一格。在函数调用和定义时-参数列表和函数名之间不空格。-eslint-keyword-spacing","link":"#【推荐】在控制语句-if-while-等-的圆括号前空一格。在函数调用和定义时-参数列表和函数名之间不空格。-eslint-keyword-spacing","children":[]},{"level":4,"title":"【推荐】用空格来隔开运算符。eslint: space-infix-ops","slug":"【推荐】用空格来隔开运算符。eslint-space-infix-ops","link":"#【推荐】用空格来隔开运算符。eslint-space-infix-ops","children":[]},{"level":4,"title":"【推荐】文件结尾空一行。eslint: eol-last","slug":"【推荐】文件结尾空一行。eslint-eol-last","link":"#【推荐】文件结尾空一行。eslint-eol-last","children":[]},{"level":4,"title":"【强制】 当出现长的方法链式调用时（>2个）用缩进。用点开头强调该行是一个方法调用，而不是一个新的语句。eslint: newline-per-chained-callno-whitespace-before-property","slug":"【强制】-当出现长的方法链式调用时-2个-用缩进。用点开头强调该行是一个方法调用-而不是一个新的语句。eslint-newline-per-chained-callno-whitespace-before-property","link":"#【强制】-当出现长的方法链式调用时-2个-用缩进。用点开头强调该行是一个方法调用-而不是一个新的语句。eslint-newline-per-chained-callno-whitespace-before-property","children":[]},{"level":4,"title":"【推荐】在一个代码块后下一条语句前空一行。","slug":"【推荐】在一个代码块后下一条语句前空一行。","link":"#【推荐】在一个代码块后下一条语句前空一行。","children":[]},{"level":4,"title":"【强制】 不要用空白行填充块。eslint: padded-blocks","slug":"【强制】-不要用空白行填充块。eslint-padded-blocks","link":"#【强制】-不要用空白行填充块。eslint-padded-blocks","children":[]},{"level":4,"title":"【强制】 不要在代码之间使用多个空白行填充。eslint: no-multiple-empty-lines","slug":"【强制】-不要在代码之间使用多个空白行填充。eslint-no-multiple-empty-lines","link":"#【强制】-不要在代码之间使用多个空白行填充。eslint-no-multiple-empty-lines","children":[]},{"level":4,"title":"【强制】 圆括号里不要加空格。eslint: space-in-parens","slug":"【强制】-圆括号里不要加空格。eslint-space-in-parens","link":"#【强制】-圆括号里不要加空格。eslint-space-in-parens","children":[]},{"level":4,"title":"【强制】 方括号里不要加空格。 eslint: array-bracket-spacing","slug":"【强制】-方括号里不要加空格。-eslint-array-bracket-spacing","link":"#【强制】-方括号里不要加空格。-eslint-array-bracket-spacing","children":[]},{"level":4,"title":"【强制】 花括号里加空格 。eslint: object-curly-spacing","slug":"【强制】-花括号里加空格-。eslint-object-curly-spacing","link":"#【强制】-花括号里加空格-。eslint-object-curly-spacing","children":[]},{"level":4,"title":"【强制】 避免一行代码超过100个字符（包含空格）。注意：对于 上面，长字符串不受此规则限制，不应换行。 eslint: max-len","slug":"【强制】-避免一行代码超过100个字符-包含空格-。注意-对于-上面-长字符串不受此规则限制-不应换行。-eslint-max-len","link":"#【强制】-避免一行代码超过100个字符-包含空格-。注意-对于-上面-长字符串不受此规则限制-不应换行。-eslint-max-len","children":[]},{"level":4,"title":"【强制】 作为语句的花括号内也要加空格 —— { 后和 } 前都需要空格。 eslint: block-spacing","slug":"【强制】-作为语句的花括号内也要加空格-——-后和-前都需要空格。-eslint-block-spacing","link":"#【强制】-作为语句的花括号内也要加空格-——-后和-前都需要空格。-eslint-block-spacing","children":[]},{"level":4,"title":"【强制】 , 前不要空格， , 后需要空格。 eslint: comma-spacing","slug":"【强制】-前不要空格-后需要空格。-eslint-comma-spacing","link":"#【强制】-前不要空格-后需要空格。-eslint-comma-spacing","children":[]},{"level":4,"title":"【强制】 计算属性内要空格。参考上述花括号和中括号的规则。 eslint: computed-property-spacing","slug":"【强制】-计算属性内要空格。参考上述花括号和中括号的规则。-eslint-computed-property-spacing","link":"#【强制】-计算属性内要空格。参考上述花括号和中括号的规则。-eslint-computed-property-spacing","children":[]},{"level":4,"title":"【强制】 调用函数时，函数名和小括号之间不要空格。 eslint: func-call-spacing","slug":"【强制】-调用函数时-函数名和小括号之间不要空格。-eslint-func-call-spacing","link":"#【强制】-调用函数时-函数名和小括号之间不要空格。-eslint-func-call-spacing","children":[]},{"level":4,"title":"【推荐】在对象的字面量属性中， key 和 value 之间要有空格。 eslint: key-spacing","slug":"【推荐】在对象的字面量属性中-key-和-value-之间要有空格。-eslint-key-spacing","link":"#【推荐】在对象的字面量属性中-key-和-value-之间要有空格。-eslint-key-spacing","children":[]},{"level":4,"title":"【强制】 行末不要空格。 eslint: no-trailing-spaces","slug":"【强制】-行末不要空格。-eslint-no-trailing-spaces","link":"#【强制】-行末不要空格。-eslint-no-trailing-spaces","children":[]},{"level":4,"title":"【强制】 避免出现多个空行。 在文件末尾只允许空一行。避免在文件开始处出现空行。eslint: no-multiple-empty-lines","slug":"【强制】-避免出现多个空行。-在文件末尾只允许空一行。避免在文件开始处出现空行。eslint-no-multiple-empty-lines","link":"#【强制】-避免出现多个空行。-在文件末尾只允许空一行。避免在文件开始处出现空行。eslint-no-multiple-empty-lines","children":[]}]},{"level":3,"title":"逗号","slug":"逗号","link":"#逗号","children":[{"level":4,"title":"【强制】 不要前置逗号。eslint: comma-style","slug":"【强制】-不要前置逗号。eslint-comma-style","link":"#【强制】-不要前置逗号。eslint-comma-style","children":[]},{"level":4,"title":"【强制】 额外结尾逗号: 要 eslint: comma-dangle","slug":"【强制】-额外结尾逗号-要-eslint-comma-dangle","link":"#【强制】-额外结尾逗号-要-eslint-comma-dangle","children":[]}]},{"level":3,"title":"类型转换与强制转换","slug":"类型转换与强制转换","link":"#类型转换与强制转换","children":[{"level":4,"title":"【强制】 在语句开始执行强制类型转换。","slug":"【强制】-在语句开始执行强制类型转换。","link":"#【强制】-在语句开始执行强制类型转换。","children":[]},{"level":4,"title":"【强制】 字符串: eslint: no-new-wrappers","slug":"【强制】-字符串-eslint-no-new-wrappers","link":"#【强制】-字符串-eslint-no-new-wrappers","children":[]},{"level":4,"title":"【强制】 数字: 用 Number 做类型转换，parseInt 转换 string 应总是带上基数。 eslint: radix","slug":"【强制】-数字-用-number-做类型转换-parseint-转换-string-应总是带上基数。-eslint-radix","link":"#【强制】-数字-用-number-做类型转换-parseint-转换-string-应总是带上基数。-eslint-radix","children":[]},{"level":4,"title":"【强制】 请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事，比如由于 parseInt 是你的性能瓶颈导致你一定要用移位运算。说明这个是因为 性能原因 。","slug":"【强制】-请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事-比如由于-parseint-是你的性能瓶颈导致你一定要用移位运算。说明这个是因为-性能原因-。","link":"#【强制】-请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事-比如由于-parseint-是你的性能瓶颈导致你一定要用移位运算。说明这个是因为-性能原因-。","children":[]},{"level":4,"title":"【强制】 注意: 用移位运算要小心。数字是用 64-位 表示的，但移位运算常常返回的是32为整形source )。移位运算对大于 32 位的整数会导致意外行为。Discussion . 最大的 32 位整数是 2,147,483,647:","slug":"【强制】-注意-用移位运算要小心。数字是用-64-位-表示的-但移位运算常常返回的是32为整形source-。移位运算对大于-32-位的整数会导致意外行为。discussion-最大的-32-位整数是-2-147-483-647","link":"#【强制】-注意-用移位运算要小心。数字是用-64-位-表示的-但移位运算常常返回的是32为整形source-。移位运算对大于-32-位的整数会导致意外行为。discussion-最大的-32-位整数是-2-147-483-647","children":[]},{"level":4,"title":"【强制】 布尔: eslint: no-new-wrappers","slug":"【强制】-布尔-eslint-no-new-wrappers","link":"#【强制】-布尔-eslint-no-new-wrappers","children":[]}]},{"level":3,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[{"level":4,"title":"【强制】 避免用一个字母命名，让你的命名有意义。eslint: id-length","slug":"【强制】-避免用一个字母命名-让你的命名有意义。eslint-id-length","link":"#【强制】-避免用一个字母命名-让你的命名有意义。eslint-id-length","children":[]},{"level":4,"title":"【强制】 用小驼峰命名法来命名你的对象、函数、实例。eslint: camelcase","slug":"【强制】-用小驼峰命名法来命名你的对象、函数、实例。eslint-camelcase","link":"#【强制】-用小驼峰命名法来命名你的对象、函数、实例。eslint-camelcase","children":[]},{"level":4,"title":"【强制】 用大驼峰命名法来命名类。eslint: new-cap","slug":"【强制】-用大驼峰命名法来命名类。eslint-new-cap","link":"#【强制】-用大驼峰命名法来命名类。eslint-new-cap","children":[]},{"level":4,"title":"【推荐】不要用前置或后置下划线。eslint: no-underscore-dangle","slug":"【推荐】不要用前置或后置下划线。eslint-no-underscore-dangle","link":"#【推荐】不要用前置或后置下划线。eslint-no-underscore-dangle","children":[]},{"level":4,"title":"【强制】 不要保存引用 this，用箭头函数或 函数绑定——Function#bind。","slug":"【强制】-不要保存引用-this-用箭头函数或-函数绑定——function-bind。","link":"#【强制】-不要保存引用-this-用箭头函数或-函数绑定——function-bind。","children":[]},{"level":4,"title":"【强制】 export default 导出模块A，则这个文件名也叫 A.*， import 时候的参数也叫 A。 大小写完全一致。","slug":"【强制】-export-default-导出模块a-则这个文件名也叫-a-import-时候的参数也叫-a。-大小写完全一致。","link":"#【强制】-export-default-导出模块a-则这个文件名也叫-a-import-时候的参数也叫-a。-大小写完全一致。","children":[]},{"level":4,"title":"【强制】  当你 export-default 一个函数时，函数名用小驼峰，文件名需要和函数名一致。","slug":"【强制】-当你-export-default-一个函数时-函数名用小驼峰-文件名需要和函数名一致。","link":"#【强制】-当你-export-default-一个函数时-函数名用小驼峰-文件名需要和函数名一致。","children":[]},{"level":4,"title":"【推荐】当你 export 一个结构体/类/单例/函数库/对象 时用大驼峰。","slug":"【推荐】当你-export-一个结构体-类-单例-函数库-对象-时用大驼峰。","link":"#【推荐】当你-export-一个结构体-类-单例-函数库-对象-时用大驼峰。","children":[]},{"level":4,"title":"【强制】 简称和缩写应该全部大写或全部小写。","slug":"【强制】-简称和缩写应该全部大写或全部小写。","link":"#【强制】-简称和缩写应该全部大写或全部小写。","children":[]},{"level":4,"title":"【强制】 你可以用全大写字母设置静态变量，他需要满足三个条件。","slug":"【强制】-你可以用全大写字母设置静态变量-他需要满足三个条件。","link":"#【强制】-你可以用全大写字母设置静态变量-他需要满足三个条件。","children":[]}]},{"level":3,"title":"Get-Set 访问器","slug":"get-set-访问器","link":"#get-set-访问器","children":[{"level":4,"title":"【强制】 不需要使用属性的访问器函数。","slug":"【强制】-不需要使用属性的访问器函数。","link":"#【强制】-不需要使用属性的访问器函数。","children":[]},{"level":4,"title":"【强制】 不要使用 JavaScript 的 getters/setters，因为他们会产生副作用，并且难以测试、维护和理解。相反的，你可以用 getVal() 和 setVal(\'hello\') 去创造你自己的访问器函数。","slug":"【强制】-不要使用-javascript-的-getters-setters-因为他们会产生副作用-并且难以测试、维护和理解。相反的-你可以用-getval-和-setval-hello-去创造你自己的访问器函数。","link":"#【强制】-不要使用-javascript-的-getters-setters-因为他们会产生副作用-并且难以测试、维护和理解。相反的-你可以用-getval-和-setval-hello-去创造你自己的访问器函数。","children":[]},{"level":4,"title":"【推荐】如果属性/方法是 boolean， 用 isVal() 或 hasVal()。","slug":"【推荐】如果属性-方法是-boolean-用-isval-或-hasval-。","link":"#【推荐】如果属性-方法是-boolean-用-isval-或-hasval-。","children":[]},{"level":4,"title":"【推荐】用 get() 和 set() 函数是可以的，但是要一起用。","slug":"【推荐】用-get-和-set-函数是可以的-但是要一起用。","link":"#【推荐】用-get-和-set-函数是可以的-但是要一起用。","children":[]}]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[{"level":4,"title":"【强制】 当传递数据载荷给事件时（不论是 DOM 还是像 Backbone 这样有很多属性的事件）。这使得后续的贡献者（程序员）向这个事件添加更多的数据时不用去找或者更新每个处理器。例如：","slug":"【强制】-当传递数据载荷给事件时-不论是-dom-还是像-backbone-这样有很多属性的事件-。这使得后续的贡献者-程序员-向这个事件添加更多的数据时不用去找或者更新每个处理器。例如","link":"#【强制】-当传递数据载荷给事件时-不论是-dom-还是像-backbone-这样有很多属性的事件-。这使得后续的贡献者-程序员-向这个事件添加更多的数据时不用去找或者更新每个处理器。例如","children":[]}]},{"level":3,"title":"标准库","slug":"标准库","link":"#标准库","children":[{"level":4,"title":"【强制】 用 Number.isNaN 代替全局的 isNaN。 eslint: no-restricted-globals","slug":"【强制】-用-number-isnan-代替全局的-isnan。-eslint-no-restricted-globals","link":"#【强制】-用-number-isnan-代替全局的-isnan。-eslint-no-restricted-globals","children":[]},{"level":4,"title":"【强制】 用 Number.isFinite 代替 isFinite. eslint: no-restricted-globals","slug":"【强制】-用-number-isfinite-代替-isfinite-eslint-no-restricted-globals","link":"#【强制】-用-number-isfinite-代替-isfinite-eslint-no-restricted-globals","children":[]}]}]},{"level":2,"title":"CSS规范指南","slug":"css规范指南","link":"#css规范指南","children":[{"level":3,"title":"命名约定的模式","slug":"命名约定的模式","link":"#命名约定的模式","children":[{"level":4,"title":"【强制】 命名约定的模式如下","slug":"【强制】-命名约定的模式如下","link":"#【强制】-命名约定的模式如下","children":[]}]},{"level":3,"title":"块","slug":"块-1","link":"#块-1","children":[{"level":4,"title":"【强制】 一个块就是一个组件，如：","slug":"【强制】-一个块就是一个组件-如","link":"#【强制】-一个块就是一个组件-如","children":[]}]},{"level":3,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[{"level":4,"title":"【强制】 修饰符是改变某个块的外观的标志。要使用修饰符，可以将 --modifier 添加到块中。从上面的form示例继续命名","slug":"【强制】-修饰符是改变某个块的外观的标志。要使用修饰符-可以将-modifier-添加到块中。从上面的form示例继续命名","link":"#【强制】-修饰符是改变某个块的外观的标志。要使用修饰符-可以将-modifier-添加到块中。从上面的form示例继续命名","children":[]}]},{"level":3,"title":"元素","slug":"元素","link":"#元素","children":[{"level":4,"title":"【强制】 元素是块的子节点。为了表明某个东西是一个元素，你需要在块名后添加 __element。所以，如果你看到一个像那样的名字，比如 form__row ，你将立即知道 .form 块中有一个 row 元素。","slug":"【强制】-元素是块的子节点。为了表明某个东西是一个元素-你需要在块名后添加-element。所以-如果你看到一个像那样的名字-比如-form-row-你将立即知道-form-块中有一个-row-元素。","link":"#【强制】-元素是块的子节点。为了表明某个东西是一个元素-你需要在块名后添加-element。所以-如果你看到一个像那样的名字-比如-form-row-你将立即知道-form-块中有一个-row-元素。","children":[]},{"level":4,"title":"【强制】 永远不应该链式命名 BEM 元素。通过以下两种方式绕过长长的 BEM 链式命名：","slug":"【强制】-永远不应该链式命名-bem-元素。通过以下两种方式绕过长长的-bem-链式命名","link":"#【强制】-永远不应该链式命名-bem-元素。通过以下两种方式绕过长长的-bem-链式命名","children":[]}]}]}],"git":{"createdTime":1682567520000,"updatedTime":1692003721000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":2}]},"readingTime":{"minutes":46.19,"words":13857},"filePathRelative":"Knowledge/FrontEnd/Standard/HTML.md","localizedDate":"2022年6月22日","excerpt":"<p><em>HTML 作为描述网页结构的超文本标记语言，本文档的目标是使 HTML 代码风格保持一致，容易被理解和被维护。</em></p>\\n","copyright":{"author":"JSH","license":"MIT"},"autoDesc":true}');export{e as data};
