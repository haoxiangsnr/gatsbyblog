webpackJsonp([0xacac5a8a2d84],{463:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>JavaScript 中的 in 关键字</h1>\n<p>在<code>JavaScript</code>中,我经常会使用<code>for(key in ..)</code>语句来遍历对象的<code>key</code> ,这是一种很常用的方式.\n这里需要留意, 其实<code>for(.. in ..)</code>语句也可以用来遍历数组,其中的<code>key</code>就是数组的<code>index</code>(索引值,0开始) 。\n除了在<code>for(.. in ..)</code>语句中使用,<code>in</code>也可以作为一个单独的关键字使用,用来判断某个属性或者元素是否存在与数组或者对象.一般会用在判断语句中,下面进行说明。</p>\n<h2>数组</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> pig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'head\'</span><span class="token punctuation">,</span> <span class="token string">\'hand\'</span><span class="token punctuation">,</span> <span class="token string">\'leg\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'head\'</span> <span class="token keyword">in</span> pig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'0\'</span> <span class="token keyword">in</span> pig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token keyword">in</span> pig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre>\n      </div>\n<p>通过<code>in</code>操作判断数组是否存在某个索引,逐个分析：</p>\n<ol>\n<li>判断<code>head</code>字符串是否为<code>pig</code>的索引,很明显,索引应该是数字,所以<code>false</code>。</li>\n<li>判断<code>pig</code>是否有索引为字符串 \'0\',可以看到最后判断结果为 true, 这是因为执行<code>in</code>关键字判断时, <code>JS</code>引擎进行了隐式转换。</li>\n<li>判断数字<code>4</code>是否为<code>pig</code>数组的索引,结果<code>false</code>。</li>\n</ol>\n<h2>对象</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> pig <span class="token operator">=</span> <span class="token punctuation">{</span>head<span class="token punctuation">:</span> <span class="token string">\'head\'</span><span class="token punctuation">,</span> hand<span class="token punctuation">:</span> <span class="token string">\'head\'</span><span class="token punctuation">,</span> leg<span class="token punctuation">:</span> <span class="token string">\'leg\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>head <span class="token keyword">in</span> pig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'head\'</span> <span class="token keyword">in</span> pig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>通过<code>in</code>操作判断对象是否有某个键名,逐个分析：</p>\n<ol>\n<li>判断变量<code>head</code>是否为<code>pig</code>的键名, <code>head</code>是一个未声明未赋值的变量,当然不会是<code>pig</code>的键名,返回<code>false</code>。\n判断字符串<code>head</code>是否为<code>pig</code>的键名,返回<code>true</code>。</li>\n</ol>',frontmatter:{title:"JavaScript 中的 in 关键字",date:"2016-02-07",tags:["JS"]}}},pathContext:{slug:"/2016-02-07---js-in/"}}}});
//# sourceMappingURL=path---posts-2016-02-07-js-in-37535436784f7a8c3707.js.map