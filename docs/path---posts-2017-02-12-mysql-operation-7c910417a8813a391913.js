webpackJsonp([0x5f06e501dc3e],{436:function(n,e){n.exports={data:{markdownRemark:{html:'<h1>MySQL常用操作</h1>\n<p>下文整理一些常用的操作</p>\n<h2>初始信息</h2>\n<p>MySQL默认的端口号码是3306，服务器是本地localhost\n查看MySQL版本</p>\n<pre><code class="language-sql">SELECT VERSION();\n+------------+\n| VERSION()  |\n+------------+\n| 5.7.17-log |\n+------------+\n1 row in set (0.01 sec)\n</code></pre>\n<h2>常用规范</h2>\n<ul>\n<li>关键字函数名一律使用大写（但使用小写不会报错）</li>\n<li>数据库名，变量名使用小写</li>\n<li>末尾要加分号</li>\n</ul>\n<h2>　数据库</h2>\n<p>数据库广义上说应该是一个框架，我们针对这个框架创造它所包含的数据库文件。</p>\n<h3>创建数据库</h3>\n<blockquote>\n<p>CREATE DATABASE [IF NOT EXSITS] database<em>name\n[CHARACTER SET character</em>set]</p>\n</blockquote>\n<p>其中留意[]里面的内容，这部分的内容为可选项。如果使用了中括号的关键字，表示如果创建的数据库和之前的数据库同名，那么不会报错，数据库会将这个错误归类到warnings中，比如我创建一个已经存在的数据books</p>\n<pre><code class="language-sql">root@localhost (none)CREATE DATABASE BOOKS;\nQuery OK, 1 row affected (0.01 sec)\nroot@localhost (none)CREATE DATABASE IF NOT EXISTS books;\nQuery OK, 1 row affected, 1 warning (0.00 sec)\nroot@localhost (none)SHOW WARNINGS ;\n+-------+------+------------------------------------------------+\n| Level | Code | Message                                        |\n+-------+------+------------------------------------------------+\n| Note  | 1007 | Can\'t create database \'books\'; database exists |\n+-------+------+------------------------------------------------+\n</code></pre>\n<h3>数据库编码</h3>\n<p>数据库的编码可以在创建时，通过第二个方括号中的内容来指定，同时也有对应的命令可以检测已经创建好的数据库的编码</p>\n<pre><code class="language-sql">root@localhost (none)CREATE DATABASE t2 CHARACTER SET gbk;\nQuery OK, 1 row affected (0.01 sec)\nroot@localhost (none)SHOW CREATE DATABASE t2;\n+----------+------------------------------------------------------------+\n| Database | Create Database                                            |\n+----------+------------------------------------------------------------+\n| t2       | CREATE DATABASE `t2` /*!40100 DEFAULT CHARACTER SET gbk */ |\n+----------+------------------------------------------------------------+\n1 row in set (0.00 sec)\n</code></pre>\n<p>如果需要修改已经创建好的数据库的编码，可以使用ALTER命令，这个命令的语法结构与CREATE DATABASE非常相似。</p>\n<pre><code class="language-sql">root@localhost (none)ALTER DATABASE t2 CHARACTER SET = utf8\n    -> ;\nQuery OK, 1 row affected (0.00 sec)\n</code></pre>\n<p>修改之后继续查看结果</p>\n<pre><code class="language-sql">root@localhost (none)SHOW CREATE DATABASE t2;\n+----------+-------------------------------------------------------------+\n| Database | Create Database                                             |\n+----------+-------------------------------------------------------------+\n| t2       | CREATE DATABASE `t2` /*!40100 DEFAULT CHARACTER SET utf8 */ |\n+----------+-------------------------------------------------------------+\n1 row in set (0.00 sec)\n</code></pre>\n<h3>查看已有数据库</h3>\n<p>使用下面的命令，会显示出目前所有的数据库</p>\n<pre><code class="language-sql"> root@localhost (none)SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| books              |\n| performance_schema |\n| sys                |\n+--------------------+\n</code></pre>\n<h2>数据表</h2>\n<p>一个数据库中可以有多个数据表，数据表经常可以使用query等等字串来进行查询。</p>\n<h3>创建数据表</h3>\n<p>我想在数据库test下面创建了一张数据表，首先需要打开一个数据库，使用USE命令，之后使用函数查看当前在使用的数据库，确认无误。</p>\n<pre><code class="language-sql">mysql> USE test;\nDatabase changed\nmysql> SELECT DATABASE();\n+------------+\n| DATABASE() |\n+------------+\n| test       |\n+------------+\n1 row in set (0.00 sec)\n</code></pre>\n<p>现在开始创建一张数据表，创建数据库使用的是 CREATE DATABASE，相应的创建数据表使用相似的语法</p>\n<blockquote>\n<p>CREATE TABLE table_name()</p>\n</blockquote>\n<p>括号中填写的内容为需要存储的键值对，以及控制信息，现在是例子</p>\n<pre><code class="language-sql">mysql> CREATE TABLE tb1(\n    -> username VARCHAR(20),\n    -> age TINYINT UNSIGNED,\n    -> salary FLOAT(8,2) UNSIGNED\n    -> );\nQuery OK, 0 rows affected (0.07 sec)\n</code></pre>\n<p>这里在数据表tb1中创建变长的字符串类型变量username，创建TINYINT 无符号类型的变量age，之后创建无符号浮点类型的变量salary。这里的TINYINT 指1个byte（8bit）足够存储年龄了，FLOAT(8,2) UNSIGNED 指一个小数，它的小数点左侧为8位，有个两位。</p>\n<p>创建成功之后，查看一下数据表，这个函数和SHOW DATABASE函数类似：</p>\n<pre><code class="language-sql">mysql> SHOW TABLES;\n+----------------+\n| Tables_in_test |\n+----------------+\n| tb1            |\n+----------------+\n1 row in set (0.00 sec)\n</code></pre>\n<p>如果想要再确认一下数据表的结构，可以使用下面的操作：</p>\n<pre><code class="language-sql">mysql> SHOW COLUMNS FROM tb1;\n+----------+---------------------+------+-----+---------+-------+\n| Field    | Type                | Null | Key | Default | Extra |\n+----------+---------------------+------+-----+---------+-------+\n| username | varchar(20)         | YES  |     | NULL    |       |\n| age      | tinyint(3) unsigned | YES  |     | NULL    |       |\n| salary   | float(8,2) unsigned | YES  |     | NULL    |       |\n+----------+---------------------+------+-----+---------+-------+\n3 rows in set (0.02 sec)\n</code></pre>',frontmatter:{title:" MySQL常用操作",date:"2017-02-12",tags:["MySQL"]}}},pathContext:{slug:"/2017-02-12---mysql-operation/"}}}});
//# sourceMappingURL=path---posts-2017-02-12-mysql-operation-7c910417a8813a391913.js.map