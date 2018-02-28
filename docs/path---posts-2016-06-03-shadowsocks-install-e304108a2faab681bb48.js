webpackJsonp([0x6f35adc81368],{469:function(s,n){s.exports={data:{markdownRemark:{html:'<h1>ShadowSocks 安装记录</h1>\n<p>这里使用的是 <code>ubuntu 14.04</code>,是我比较喜欢的一个系统。\n首先更新 <code>apt</code> 源，保证获取最新的软件</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update\n</code></pre>\n      </div>\n<p>之后安装 <code>python</code> 相关依赖，<code>pip</code> 包管理器，可能是类似 <code>npm</code> 的一种吧，没有细致研究过</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python-gevent python-pip\n</code></pre>\n      </div>\n<p>通过 <code>pip</code> 安装 <code>ShadowSocks</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> shadowsocks\n<span class="token function">apt-get</span> <span class="token function">install</span> python-m2crypto\n</code></pre>\n      </div>\n<p>配置 <code>ShadowSocks</code> 的配置文件 <code>vim /etc/shadowsocks.json</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token punctuation">{</span>\n    <span class="token string">"server"</span><span class="token keyword">:</span><span class="token string">"0.0.0.0"</span>,\n    <span class="token string">"server_port"</span>:8388,\n    <span class="token string">"local_port"</span>:1080,\n    <span class="token string">"password"</span><span class="token keyword">:</span><span class="token string">"password"</span>,\n    <span class="token string">"timeout"</span>:600,\n    <span class="token string">"method"</span><span class="token keyword">:</span><span class="token string">"aes-256-cfb"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code>server</code> 表示当前服务器的 <code>ip</code> 地址，<code>password</code> 更换成自己需要设置的密码</p>\n<p>切换到 <code>root</code> 用户\n之后启动 <code>shadowsocks</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">su</span> -\nssserver -c /etc/shadowsocks.json -d start\nssserver -c /etc/shadowsocks.json -d stop\n</code></pre>\n      </div>\n<p>参考资料：\n<a href="https://github.com/iMeiji/shadowsocks_install/wiki">https://github.com/iMeiji/shadowsocks_install/wiki</a></p>',frontmatter:{title:"ShadowSocks 安装记录",date:"2016-09-01",tags:["Linux","shadowsocks"]}}},pathContext:{slug:"/2016-06-03---shadowsocks-install/"}}}});
//# sourceMappingURL=path---posts-2016-06-03-shadowsocks-install-e304108a2faab681bb48.js.map