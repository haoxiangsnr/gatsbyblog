---
title: " MySQL常用操作"
date: "2017-02-12"
tags: ["MySQL"]
---
# MySQL常用操作

下文整理一些常用的操作

## 初始信息

MySQL默认的端口号码是3306，服务器是本地localhost
查看MySQL版本

```sql
SELECT VERSION();
+------------+
| VERSION()  |
+------------+
| 5.7.17-log |
+------------+
1 row in set (0.01 sec)
```

## 常用规范

- 关键字函数名一律使用大写（但使用小写不会报错）
- 数据库名，变量名使用小写
- 末尾要加分号

##　数据库

数据库广义上说应该是一个框架，我们针对这个框架创造它所包含的数据库文件。

### 创建数据库

> CREATE DATABASE [IF NOT EXSITS] database_name
> [CHARACTER SET character_set]

其中留意[]里面的内容，这部分的内容为可选项。如果使用了中括号的关键字，表示如果创建的数据库和之前的数据库同名，那么不会报错，数据库会将这个错误归类到warnings中，比如我创建一个已经存在的数据books

```sql
root@localhost (none)CREATE DATABASE BOOKS;
Query OK, 1 row affected (0.01 sec)
root@localhost (none)CREATE DATABASE IF NOT EXISTS books;
Query OK, 1 row affected, 1 warning (0.00 sec)
root@localhost (none)SHOW WARNINGS ;
+-------+------+------------------------------------------------+
| Level | Code | Message                                        |
+-------+------+------------------------------------------------+
| Note  | 1007 | Can't create database 'books'; database exists |
+-------+------+------------------------------------------------+
```

### 数据库编码

数据库的编码可以在创建时，通过第二个方括号中的内容来指定，同时也有对应的命令可以检测已经创建好的数据库的编码

```sql
root@localhost (none)CREATE DATABASE t2 CHARACTER SET gbk;
Query OK, 1 row affected (0.01 sec)
root@localhost (none)SHOW CREATE DATABASE t2;
+----------+------------------------------------------------------------+
| Database | Create Database                                            |
+----------+------------------------------------------------------------+
| t2       | CREATE DATABASE `t2` /*!40100 DEFAULT CHARACTER SET gbk */ |
+----------+------------------------------------------------------------+
1 row in set (0.00 sec)
```

如果需要修改已经创建好的数据库的编码，可以使用ALTER命令，这个命令的语法结构与CREATE DATABASE非常相似。

```sql
root@localhost (none)ALTER DATABASE t2 CHARACTER SET = utf8
    -> ;
Query OK, 1 row affected (0.00 sec)
```

修改之后继续查看结果

```sql
root@localhost (none)SHOW CREATE DATABASE t2;
+----------+-------------------------------------------------------------+
| Database | Create Database                                             |
+----------+-------------------------------------------------------------+
| t2       | CREATE DATABASE `t2` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+-------------------------------------------------------------+
1 row in set (0.00 sec)
```

### 查看已有数据库

使用下面的命令，会显示出目前所有的数据库

```sql
 root@localhost (none)SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| books              |
| performance_schema |
| sys                |
+--------------------+
```

## 数据表

一个数据库中可以有多个数据表，数据表经常可以使用query等等字串来进行查询。

### 创建数据表

我想在数据库test下面创建了一张数据表，首先需要打开一个数据库，使用USE命令，之后使用函数查看当前在使用的数据库，确认无误。

```sql
mysql> USE test;
Database changed
mysql> SELECT DATABASE();
+------------+
| DATABASE() |
+------------+
| test       |
+------------+
1 row in set (0.00 sec)
```

现在开始创建一张数据表，创建数据库使用的是 CREATE DATABASE，相应的创建数据表使用相似的语法

> CREATE TABLE table_name()

括号中填写的内容为需要存储的键值对，以及控制信息，现在是例子

```sql
mysql> CREATE TABLE tb1(
    -> username VARCHAR(20),
    -> age TINYINT UNSIGNED,
    -> salary FLOAT(8,2) UNSIGNED
    -> );
Query OK, 0 rows affected (0.07 sec)
```

这里在数据表tb1中创建变长的字符串类型变量username，创建TINYINT 无符号类型的变量age，之后创建无符号浮点类型的变量salary。这里的TINYINT 指1个byte（8bit）足够存储年龄了，FLOAT(8,2) UNSIGNED 指一个小数，它的小数点左侧为8位，有个两位。

创建成功之后，查看一下数据表，这个函数和SHOW DATABASE函数类似：

```sql
mysql> SHOW TABLES;
+----------------+
| Tables_in_test |
+----------------+
| tb1            |
+----------------+
1 row in set (0.00 sec)

```

如果想要再确认一下数据表的结构，可以使用下面的操作：


```sql
mysql> SHOW COLUMNS FROM tb1;
+----------+---------------------+------+-----+---------+-------+
| Field    | Type                | Null | Key | Default | Extra |
+----------+---------------------+------+-----+---------+-------+
| username | varchar(20)         | YES  |     | NULL    |       |
| age      | tinyint(3) unsigned | YES  |     | NULL    |       |
| salary   | float(8,2) unsigned | YES  |     | NULL    |       |
+----------+---------------------+------+-----+---------+-------+
3 rows in set (0.02 sec)
```
