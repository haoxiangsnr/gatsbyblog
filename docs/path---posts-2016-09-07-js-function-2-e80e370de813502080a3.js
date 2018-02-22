webpackJsonp([55887744043112],{447:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>再探JS函数</h1>\n<p>函数是JS的核心概念，主要用来封装语句，封装单独的功能。</p>\n<h2>函数参数</h2>\n<p>函数不在意它本身到底接收多少参数，不关心最后会使用多少参数。因为函数只会接收一个数组，函数可以通过<code>arguments</code>属性来访问这个参数数组。关于这个数组，他其实是个对象，如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">var</span> b<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">//a是一个函数</span>\n<span class="token keyword">typeof</span> a<span class="token punctuation">.</span>arguments  <span class="token comment">// Object</span>\n</code></pre>\n      </div>\n<p>但是为什么又说它是数组呢，因为它本身很数组很像，可以通过方括号加数字的方法来访问具体的参数，同时还有数组对象有的<code>length</code>属性。一个有趣的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span> <span class="token operator">+</span>　arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">a</span><span class="token punctuation">(</span><span class="token string">"hao"</span><span class="token punctuation">,</span><span class="token string">"xiang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//hellohaoxiang</span>\n</code></pre>\n      </div>\n<p>这样子依然是有效的，在函数执行的时候，通过<code>arguments</code>对象的<code>length</code>属性可以知道被传递的参数个数，还有个更有趣的例子，是关于<code>arguments</code>的同步性的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">doAdd</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">doAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//11，arguments[1]和num2是同步的</span>\n</code></pre>\n      </div>\n<p>参数就是局部变量，对于函数来说，传递参数是按值的，基本类型的很好理解，相当于变量的复制。对于引用类型来说，还需要留意到此时依然是按值传递的，这个值依然是指引用的内存地址值。证明方法：需要先创建一个对象，传递函数中，此时在函数内部修改对象的属性，此时内外是一致的，因为他们是一种的一个对象。但是此时如果将参数重新初始化为一个对象，那么也就是说此时参数已经指向另一个变量了，和之前的一切无关。</p>\n<h2>函数相关属性</h2>\n<p><code>arguments</code>属性有一个叫做<code>callee</code>的指针，这个指针指向拥有这个<code>arguments</code>对象的函数。主要用来解除耦合，下面是关于递归算法的例子</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">fac</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token number">1</span> <span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token keyword">return</span> num <span class="token operator">*</span> arguments<span class="token punctuation">.</span><span class="token function">callee</span><span class="token punctuation">(</span>num<span class="token number">-1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>函数的另外一个内部属性是<code>this</code>对象，<code>this</code>引用的是函数据以执行的环境对象，<code>this</code>是包含它的函数作为方法被调用是所属的对象 = 包含它的函数 + 作为方法被调用时 + 所属的对象。</p>\n<h2>函数的方法</h2>\n<p>主要有<code>apply</code>,<code>call</code>与<code>bind</code></p>\n<h3><code>apply()</code>与<code>call()</code>：</h3>\n<p>表示在特定的作用域内调用函数，与<code>call()</code>的区别在于<code>call</code>在使用时必须指定参数。</p>\n<h3><code>bind()</code></h3>\n<p>这个方法可以用来创建一个新的实例，实例的<code>this</code>值会被绑定到传给<code>bind()</code>的值上</p>\n<h3>细碎的小点</h3>\n<ul>\n<li><code>return</code>语句，一旦<code>return</code>，后续的语句不会继续执行了，不加<code>return</code>的话，函数默认的返回值是<code>undefined</code>。</li>\n</ul>',frontmatter:{title:"再探JS函数",date:"2016-09-07",tags:["JS","function"]}}},pathContext:{slug:"/2016-09-07---js-function-2/"}}}});
//# sourceMappingURL=path---posts-2016-09-07-js-function-2-e80e370de813502080a3.js.map