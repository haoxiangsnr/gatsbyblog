webpackJsonp([83148683360039],{439:function(e,a){e.exports={data:{markdownRemark:{html:'<h1>React学习总结</h1>\n<p>参考官方文档，整理一些应该被重视的知识点</p>\n<h2>React中的事件相关</h2>\n<p>类似HTML中事件的使用方法，可以直接将事件处理函数作为属性值，赋给用驼峰式命名的事件属性。之后的事情交给React，React自己有一个事件系统，它可以保证事件在所有浏览器中的一致性，React知道如何去冒泡和捕获事件，这个实现是根据w3c的规范，不管使用的是什么浏览器</p>\n<h2>State 相关</h2>\n<p>State是可以用来动态渲染，和props是一对好基友。</p>\n<h3>State 的异步工作方式</h3>\n<p><code>setState</code> 方法本身是异步的，有一种常见的方式是当React数据改变时，通过 setState(data,callback) 这个方法会将新数据合并到this.state对象上，之后重新渲染组件。当组件结束了重新渲染(re-render），可选的第二个参数callback会被执行。</p>\n<h3>组件在什么时候需要State</h3>\n<p>大多数的组件应该简单的通过props获取数据，之后渲染组件，然而有时候会需要一些复杂的数据处理，比如说响应用户的操作，一个请求，此时需要用到state。但尽可能多的让组件无状态话，减少冗余。一种常见的模式是创建许多无状态的组件，它们仅仅负责渲染数据，有一个拥有状态组件在它们层级之上，经过一系列的逻辑处理，通过props将state传递给它的子组件。有状态的组件囊括了尽可能多的逻辑，而无状态的组件仅仅负责渲染数据。</p>\n<h3>哪些数据应该作为State</h3>\n<p>尽量使用 props 作为唯一的数据源，事件处理函数会响应用户的事件，此时可能会更新影响用户界面的数据，这些数据应该被 State 包含。真实环境下，这个数据应该很小且可以被 JSON 序列化 。\n在创建包含状态的组件时，让它尽可能少的包含状态，并且将这些状态存入 this.state 对象中，后续的 render 方法再根据可能有的状态来计算出需要的其他数据，逻辑处理在 render ，通过状态来计算 render 的内容。</p>\n<h2>组件复用</h2>\n<p>React 因为新的 render 而导致 DOM 发生更新的过程称为组件校正，这个校正过程是根据组件的顺序决定，比如</p>\n<pre><code class="language-html">// Render Pass 1\n&#x3C;Card>\n    &#x3C;p>Paragraph 1&#x3C;/p>\n    &#x3C;p>Paragraph 2&#x3C;/p>\n&#x3C;/Card>\n// Render Pass 2\n&#x3C;Card>\n    &#x3C;p>Paragraph 2&#x3C;/p>\n&#x3C;/Card>\n</code></pre>\n<p>看起来像是 React 通过 diff 删除了第一个标签，但实际上 React 按照组件的顺序，修改了第一个标签的文本，删除了第二个组件。考虑一个组件由很多状态决定，内部的DOM需要来回的切换，由于组件校正的原理，可能会有些性能问题。此时可以选择为组件添加 <code>display: none</code> ，而不是直接选择删除。有些情况可能比较复杂，比如说有一个很长的列表，需要不断的重排序或者向首尾插入删除新子组件，这种情况如果按照顺序来校正，可能会出现性能问题，此时可以为这些子组件指定独一无二的key。当 React 校正这些组件的时候，就会直接重排序或者销毁，而不是按照顺序，修改子组件的内容来校正。</p>\n<h2>PropTypes</h2>\n<p>当项目越来越大，组件的复用越来越频繁，为了确保每次复用接收到的 props 是可用的，需要指定PropTypes。</p>\n<p>类似于 export，React.PropTypes 对象导出很多验证器，这些验证器可以保证传递来的 props 是正确的。\n当一个不可用的值被传递给当前组件的 props，那么在控制台中就会显示异常。\n具体的属性可以参考这个<a href="http://facebook.github.io/react/docs/reusable-components.html">页面</a>，可以为对象或者数组指定具体的内部 Child。</p>',frontmatter:{title:"React学习总结",date:"2016-04-21",tags:["React","JS"]}}},pathContext:{slug:"/react-summary/"}}}});
//# sourceMappingURL=path---react-summary-db936602590ee6acab6d.js.map