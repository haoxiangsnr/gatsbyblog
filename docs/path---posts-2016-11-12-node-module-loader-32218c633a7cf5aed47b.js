webpackJsonp([88902746007230],{479:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Node原生模块加载器</h1>\n<p>Node.js包含一个简单的模块加载器，在Node.js 中，文件和模块是一一对应的，比如下面这个例子，<code>foo.js</code>装载在处于相同目录的<code>circle.js</code></p>\n<p><code>foo.js</code>中的内容：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./circle.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`The area of a circle of radius 4 is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>circle<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>circle.js</code>中的内容:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> PI <span class="token operator">=</span> Math<span class="token punctuation">.</span>PI<span class="token punctuation">;</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">area</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> PI <span class="token operator">*</span> r <span class="token operator">*</span> r<span class="token punctuation">;</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">circumference</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">2</span> <span class="token operator">*</span> PI <span class="token operator">*</span> r<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>circle.js</code>模块导出了两个函数<code>area()</code>和<code>circumference()</code>。</p>\n<p>为了将函数或者对象添加到模块上，你可以将它们添加给特殊的对象<code>exports</code>。</p>\n<p>模块中的局部变量是模块私有的，因为模块最终会被包裹在 Node.js的一个函数中。在这个例子中，变量<code>PI</code>是 <code>circle.js</code>的私有变量。</p>\n<h2>exports 和 module 的关系</h2>\n<p>如果想要一次赋值，就直接导出一个对象或者函数，那么应该是用<code>module.exports</code>而不是使用<code>exports</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> square <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./square.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> mySquare <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`The area of my square is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mySquare<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>使用<code>module.exports</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span>width<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    area<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> width <span class="token operator">*</span> width\n   <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>require 对象的解析逻辑</h2>\n<p>在<code>Y</code>路径的模块内<code>require(x)</code>，总体会经过下面的过程</p>\n<ol>\n<li>\n<p>检查是否为核心模块(<code>fs</code>, <code>assert</code>)</p>\n<ol>\n<li>return 核心模块</li>\n<li>停止</li>\n</ol>\n</li>\n<li>\n<p>检查是否为相对路径(\'./\', \'../\');</p>\n<ol>\n<li>装载文件</li>\n<li>装载目录</li>\n</ol>\n</li>\n<li>检查是否为<code>node_modules</code>中的模块，如果没有，抛出错误</li>\n</ol>\n<p>其中装载文件又有如下过程：</p>\n<ol>\n<li>文件是<code>X</code>， 装载为<code>JS text</code></li>\n<li>是一个文件，文件名为<code>X.js</code>，装载为<code>js text</code></li>\n<li>文件是<code>X.json</code>，parse为<code>js object</code></li>\n<li>文件是<code>.node</code>，装在为二进制</li>\n</ol>\n<p>装载目录的过程如下：</p>\n<ol>\n<li><code>X/package.json</code>是否存在，解析<code>package.json</code>中的 <code>main</code>字段的值</li>\n<li>依次检查<code>X/index.js</code> ,<code>X/index.json</code>, <code>X/index.node</code>是否存在，按照上面的相同规则引入</li>\n</ol>\n<p>装载<code>node_modules</code>中的模块的过程如下：</p>\n<p>执行类似下面的函数，生成标识<code>node_modules</code>目录位置的数组，将当前当前目录通过<code>split</code>方法解析为数组：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">/</span>demo<span class="token operator">/</span>tmp<span class="token operator">/</span>src\nsplit <span class="token operator">=></span>\n<span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">,</span><span class="token string">\'demo\'</span><span class="token punctuation">,</span> <span class="token string">\'tmp\'</span><span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">,</span><span class="token string">\'\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>遍历每个层级，追加字符串<code>\'node_modules\'</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>DIRS<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'demo/node_module\'</span><span class="token punctuation">,</span><span class="token string">\'tmp/node_module\'</span><span class="token punctuation">,</span> <span class="token string">\'src/node_modules\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>返回数组<code>DIRS</code>，遍历上面数组，装载：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">for</span> each DIR <span class="token keyword">in</span> DIRS<span class="token punctuation">:</span>\n</code></pre>\n      </div>\n<p>先优先按文件解析<code>（DIR/x）</code>，再按照目录解析。</p>',frontmatter:{title:"Node原生模块加载器",date:"2016-11-12",tags:["Node"]}}},pathContext:{slug:"/2016-11-12---node-module-loader/"}}}});
//# sourceMappingURL=path---posts-2016-11-12-node-module-loader-32218c633a7cf5aed47b.js.map