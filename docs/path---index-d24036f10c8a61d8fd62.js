webpackJsonp([0x81b8806e4260],{421:function(e,s){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-2.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（二） 操作系统如何管理物理主存？ 计算机体系结构、主存结构分层 CPU芯片内部有寄存器和Cache，操作系统无法直接访问管理，这一层次的主存容量小但是数据很快。 在主存结构中有一块很大的区域，即主存或者物理主存。这块区域可以用来放置操作系统本身代码以及其他要运行的程序，主存容量大，速度慢。 计算机中可以在主存中存放着多个可运行的程序，若CPU的运行速度很快，且这些可运行的程序都需要很大的主存，那么CPU…",frontmatter:{title:"操作系统（二）",date:"2018-01-12",tags:["os","memory"]},wordCount:{paragraphs:40,sentences:40,words:170},fields:{slug:"/os-2/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-1.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（一） 按下电源之后，如何加载操作系统？ 操作系统如何与外设、应用程序交互？ BIOS、BootLoader、OS的关系 BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS从硬盘放到内存中去，使cpu可以执行OS相关的代码。 一开始加电，CPU从一个预先约定的地址处开始执行BIOS程序，进行加电自检（显卡，键鼠，硬盘），检查成功，即外设均可正常工作，接着要将BootLoader…",frontmatter:{title:"操作系统（一）",date:"2018-01-10",tags:["os","Bootloader"]},wordCount:{paragraphs:36,sentences:36,words:161},fields:{slug:"/os-1/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/pandas-and-bananas.md absPath of file >>> MarkdownRemark",excerpt:"Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!",frontmatter:{title:"Pandas and Bananas",date:"2017-08-21",tags:["animals","Chicago","zoos"]},wordCount:{paragraphs:3,sentences:4,words:30},fields:{slug:"/pandas-and-bananas/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/sweet-pandas-eating-sweets.md absPath of file >>> MarkdownRemark",excerpt:"Pandas are really weet. Here's a video of a pnd eating sweets.",frontmatter:{title:"Sweet Pandas Eating Sweets",date:"2017-08-10",tags:["animals","Chicago","zoos"]},wordCount:{paragraphs:4,sentences:4,words:23},fields:{slug:"/sweet-pandas-eating-sweets/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/git-branch.md absPath of file >>> MarkdownRemark",excerpt:"Git学习小记之分支原理 如果想要熟练使用 Git，没有分支理念是绝对行不通的，在用 Git 管理项目的时候，经常需要使用 commit 这个命令，那么这个 commit 到底是指什么呢？ 按照官方的解释，这应该成为一个对象，它包含着一个指向暂存内容(被add的文件)快照的指针，包含本次提交的附属信息，比如说作者等等，指向父 commit 对象(如果被 merge 而成，可能有多个父 commit 对象)的指针。 举下面这个例子来分析： add：暂存操作会对文件计算校验和(SHA-…",frontmatter:{title:"Git学习小记之分支原理",date:"2016-09-01",tags:["Git"]},wordCount:{paragraphs:11,sentences:11,words:77},fields:{slug:"/git-branch/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/git-add.md absPath of file >>> MarkdownRemark",excerpt:"Git 学习小记之 add 所谓 add 操作，就是 add file into staged area 。下面针对两种情况进行讨论： 新建的文件 旧文件 新建的文件 我们了解 add 是一个重要的操作。假设有一个空目录，此时里面没有任何文件。\n我们新建一个文件，这个文件就是处于 untrack 状态的，可以理解为未被跟踪状态。 此时修改这个文件，依然是处于 untrack 状态。在此时使用 add 操作，有两个作用： 将新文件添加到暂存区( staged ) 将文件标记为  track…",frontmatter:{title:"Git 学习小记之 add",date:"2016-08-20",tags:["Git"]},wordCount:{paragraphs:21,sentences:21,words:92},fields:{slug:"/git-add/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/pixel-layout.md absPath of file >>> MarkdownRemark",excerpt:"布局像素的辨析 下文主要介绍了一些关于分辨率的基础概念。 物理分辨率 所谓物理分辨率，是指一块屏幕上，横向有多少个像素点，纵向有多少个像素点，比如苹果5的分辨率是640x1136，代表它横向有640个像素点，纵向拥有1136个像素点。看官也听出来了，这个物理分辨率是屏幕自带的固定参数，无法更改。 屏幕尺寸 屏幕尺寸指屏幕对角线的长度，根据横向长度和纵向长度进一步计算得到，使用英寸为单位，比如苹果5的尺寸为4.…",frontmatter:{title:"布局像素的辨析",date:"2016-08-12",tags:["CSS"]},wordCount:{paragraphs:21,sentences:21,words:117},fields:{slug:"/pixel-layout/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/opensauce.md absPath of file >>> MarkdownRemark",excerpt:"opensauce单元测试 为开源项目提供免费的云测试\n https://saucelabs.com/opensauce/ 推荐文章 https://philipwalton.com/articles/learning-how-to-set-up-automated-cross-browser-javascript-unit-testing/ 中文版\n http://www.jianshu.com/p/d079b9c61450",frontmatter:{title:"opensauce单元测试",date:"2016-05-03",tags:["opensauce","unit testing"]},wordCount:{paragraphs:6,sentences:6,words:22},fields:{slug:"/opensauce/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/react-summary.md absPath of file >>> MarkdownRemark",excerpt:"React学习总结 参考官方文档，整理一些应该被重视的知识点 React中的事件相关 类似HTML中事件的使用方法，可以直接将事件处理函数作为属性值，赋给用驼峰式命名的事件属性。之后的事情交给React，React自己有一个事件系统，它可以保证事件在所有浏览器中的一致性，React知道如何去冒泡和捕获事件，这个实现是根据w3c的规范，不管使用的是什么浏览器 State 相关 State是可以用来动态渲染，和props是一对好基友。 State 的异步工作方式 setState…",frontmatter:{title:"React学习总结",date:"2016-04-21",tags:["React","JS"]},wordCount:{paragraphs:20,sentences:20,words:136},fields:{slug:"/react-summary/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/regular-expression-2.md absPath of file >>> MarkdownRemark",excerpt:"正则表达式进阶 接上一篇内容，上一篇主要介绍了正则表达式的核心内容，非常的简单易懂，现在对核心内容进行拓展。 界定符 表示正则表达式的开始和结束，具体的由解析器决定 /[0-9]/ #[0-9]# 元字符 元字符定义了原子的筛选方式，可以将某一类原子归类，并且给出缩写，简化正则： | 匹配两个或者多个分支 [] 中括号内部的任意一个原子 [^] 匹配除括号内部原子之外的任何字符 原子的筛选 使用 [] 可以进行原子的筛选，代表或者的关系， [^] 代表非的关系 [Dd]uang (D|d…",frontmatter:{title:"正则表达式进阶",date:"2016-04-06",tags:["regular expression"]},wordCount:{paragraphs:43,sentences:43,words:84},fields:{slug:"/regular-expression-2/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/regular-expression-1.md absPath of file >>> MarkdownRemark",excerpt:"正则表达式核心 若有多个字符串，其中一个字符串中包含部分内容，我们使用正则来进行匹配，匹配的结果到底什么？是包含匹配内容的那个字符串？还是只有匹配的内容？ Go Ahead~ 正则表达式的核心概念就是元字符，它一点也不复杂，掌握了元字符，就可以正则表达式的能力有所了解。 接下来的每一节，我都会介绍数个元字符，最终本文结束时，读者就会对正则表达式的核心元字符有大概的了解。 从 hi, Hao 开始 hi, Hao 这样一个字符串，如果使用正则表达式匹配到 hi ？这非常简单，我们使用 js…",frontmatter:{title:"正则表达式核心",date:"2016-04-05",tags:["regular expression"]},wordCount:{paragraphs:38,sentences:39,words:201},fields:{slug:"/regular-expression-1/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/js-in.md absPath of file >>> MarkdownRemark",excerpt:"JavaScript 中的 in 关键字 在 JavaScript 中,我经常会使用 for(key in ..) 语句来遍历对象的 key  ,这是一种很常用的方式.\n这里需要留意, 其实 for(.. in ..) 语句也可以用来遍历数组,其中的 key 就是数组的 index (索引值,0开始) 。\n除了在 for(.. in ..) 语句中使用, in 也可以作为一个单独的关键字使用,用来判断某个属性或者元素是否存在与数组或者对象.一般会用在判断语句中,下面进行说明。 数组 通过 in…",frontmatter:{title:"JavaScript 中的 in 关键字",date:"2016-02-07",tags:["JS"]},wordCount:{paragraphs:13,sentences:13,words:67},fields:{slug:"/js-in/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/js-function-2.md absPath of file >>> MarkdownRemark",excerpt:"再探JS函数 函数是JS的核心概念，主要用来封装语句，封装单独的功能。 函数参数 函数不在意它本身到底接收多少参数，不关心最后会使用多少参数。因为函数只会接收一个数组，函数可以通过 arguments 属性来访问这个参数数组。关于这个数组，他其实是个对象，如下: 但是为什么又说它是数组呢，因为它本身很数组很像，可以通过方括号加数字的方法来访问具体的参数，同时还有数组对象有的 length 属性。一个有趣的例子： 这样子依然是有效的，在函数执行的时候，通过 arguments 对象的 length…",frontmatter:{title:"再探JS函数",date:"2016-01-10",tags:["JS","function"]},wordCount:{paragraphs:20,sentences:20,words:84},fields:{slug:"/js-function-2/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/css-summary.md absPath of file >>> MarkdownRemark",excerpt:"CSS 总结 计划总结常用的CSS知识 基本布局 下面汇总了传统的绝对，浮动，表格与凝胶等布局方式的优缺点 绝对布局 优点：主内容随页面宽度，固定边栏 缺点：浏览器变宽的时候，页脚可能会遮住边栏，同时浏览器变宽后，主内容区和边栏的比例会不协调。 表格显示布局 优点：使用 table 标签，随窗口缩放 缺点：对于语义化不利 凝胶布局 优点：主内容区建立后，设置左右margin为…",frontmatter:{title:"CSS 总结",date:"2015-10-5",tags:["css"]},wordCount:{paragraphs:22,sentences:22,words:67},fields:{slug:"/css-summary/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/anaconda-introduction.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/anaconda-introduction/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/es6-string.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/es6-string/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/final-summary-2016.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/final-summary-2016/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/git-alias.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/git-alias/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/js-logic-operation.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/js-logic-operation/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/git-develop-workflow.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/git-develop-workflow/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/js-function-1.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/js-function-1/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/mysql-operation.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/mysql-operation/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/node-file-system.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/node-file-system/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/knn-1.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/knn-1/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/knn-2.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/knn-2/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/numpy-ndarray.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/numpy-ndarray/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/node-module-loader.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/node-module-loader/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/shadowsocks-install.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/shadowsocks-install/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/tmux-operation.md absPath of file >>> MarkdownRemark",excerpt:"",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:2,sentences:2,words:9},fields:{slug:"/tmux-operation/"}}},{node:{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/rails-install.md absPath of file >>> MarkdownRemark",excerpt:"Rails 安装记录 本文 ubuntu 版本为 14.04stl 64bit ，参考教程： http://rails-practice.com/content/Chapter_1/1.1.html，  需要翻墙 Git ubuntu安装完毕之后，首先安装git，以便之后会用到： 配置身份信息： 核实信息是否有误： 此时已经能通过 http 正常拉去git上的内容，若想进一步配置 ssh ，可以参考 https://help.github.com/articles/generating-ssh…",frontmatter:{title:"Rails 安装记录",date:"2015-07-10",tags:["Ruby","Rails","installtion-record"]},wordCount:{paragraphs:29,sentences:30,words:116},fields:{slug:"/rails-install/"}}}],totalCount:30}},pathContext:{}}}});
//# sourceMappingURL=path---index-d24036f10c8a61d8fd62.js.map