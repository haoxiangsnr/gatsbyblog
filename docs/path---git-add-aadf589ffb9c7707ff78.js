webpackJsonp([0xb57c832e2eb3],{417:function(d,e){d.exports={data:{markdownRemark:{html:"<h1>Git 学习小记之 add</h1>\n<p>所谓<code>add</code>操作，就是<code>add file into staged area</code>。下面针对两种情况进行讨论：</p>\n<ul>\n<li>新建的文件</li>\n<li>旧文件</li>\n</ul>\n<h2>新建的文件</h2>\n<p>我们了解<code>add</code>是一个重要的操作。假设有一个空目录，此时里面没有任何文件。\n我们新建一个文件，这个文件就是处于<code>untrack</code>状态的，可以理解为未被跟踪状态。</p>\n<p>此时修改这个文件，依然是处于<code>untrack</code>状态。在此时使用<code>add</code>操作，有两个作用：</p>\n<ol>\n<li>将新文件添加到暂存区(<code>staged</code>)</li>\n<li>将文件标记为 <code>track</code></li>\n</ol>\n<p>我们再使用<code>commit</code>操作，生成快照，同时<code>clean</code>暂存区，初始化一切。</p>\n<h2>旧文件</h2>\n<p>另外一种情况，假设已经有了旧文件，文件处于<code>track</code>状态。</p>\n<p>此时修改文件，如果使用<code>status</code>命令查看，会提示<code>Changes not staged for commit</code>，大意就是此时已经更新文件了，但是更新的内容还没有暂存起来，提示使用<code>add</code>操作进行暂存。</p>\n<p>按照提示使用<code>add</code>操作后，使用<code>status</code>命令查看，会发现处于已暂存状态。<code>Changes to be committed</code>，如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。</p>\n<h2>与 <code>commit</code> 搭配使用</h2>\n<p>如果发现不断的<code>add</code>、<code>commit</code>比较麻烦，可以使用<code>commit</code>命令加<code>-a</code>参数，Git会自动更新已经跟踪过的文件，更新暂存区。但这里有个地方需要留意，<code>-a</code> 参数并不会更新未跟踪的文件。</p>\n<h2>总结</h2>\n<p>关于<code>add</code>，最值得留意的就是一旦修改文件，必须重新暂存，否则生成快照(<code>commit</code>)的依然是上次<code>add</code>时的状态，快照只从暂存区来。</p>\n<p>总结起来，对于新文件，<code>add</code>会跟踪文件，同时将文件存入暂存区，如果是旧文件，可以按照本地文件更新暂存区的文件。除了上面提到的，还有一种常见的情况，当文件出现冲突时，经常需要人为解决冲突，在修改之后，可以使用<code>add</code>操作将有冲突的文件标记为已经解决状态。</p>",frontmatter:{title:"Git 学习小记之 add",date:"2016-08-20",tags:["Git"]}}},pathContext:{slug:"/git-add/"}}}});
//# sourceMappingURL=path---git-add-aadf589ffb9c7707ff78.js.map