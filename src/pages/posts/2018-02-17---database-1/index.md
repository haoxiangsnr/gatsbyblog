---
title: "数据库学习（一）"
date: "2018-02-17"
tags: ["MySQL", "SQL"]
nopublish: true
---
# 数据库学习（一）(待续)

选择默认数据库(在MySQL中，`schema`是与`database`类似的概念)

```sql
use <database name>
# 0 row(s) affected
```

## 基本表

- 创建基本表
- 修改基本表

### 创建基本表

```sql
create table test_table(
    <列名> <类型> [列级完整性约束条件],
    id char(9) primary key,
    name char(40) NOT NULL,
    age smallint
);
# 0 row(s) affected
```

### 修改基本表

表名：

```sql
alter table test_table
    rename to testtable;
```

针对于列的增加，删除，修改数据类型或者列名，在删除列的时候，可以依据在被其他对象引用时是否直接删除做`[cascade|restrict]`的设置，下面的每个分号完成一个操作

```sql
# 增加列
alter table test_table
    add column sex smallint not null;
# 删除列
alter table test_table
    drop column sex cascade;
# 修改列名与数据类型
alter table test_table
    change column sex sex_changed char(4);
alter table test_table
    change column sex_changed sex char(7);
# 当列名不变时，可以用来修改数据类型
alter table test_table
    change column sex sex char(2);
```

表级完整性约束有`primary key|unique|foreign key`，`not null`约束只能在列级定义。

```sql
alter table testtable # 每行代码之前都有有它，这里为了整洁

--------增加--------
    # 唯一性约束
    add constraint unique (name);
    # 实体完整性约束
    add constraint primary key (id)
    # 增加外键，指定了外键名，后续可用于修改删除
    add constraint fk_name foreign key (name) references testtable(id);
    # 增加外键，但没有指定了外键名
    add constraint foreign key (name) references testtable(id); 

--------删除--------
    # 删除唯一性约束，需要才index入手，先不整理
    # 删掉完整性约束
    drop foreign key fk_name;
    # 删掉主键，主键只有一个，不需要指定主键名了
    drop primary key;
```

## 数据查询

- 列查询
- 查询结果中的若干行
- 排序

### 列查询

查询单列，多列，全部列

```sql
--------查询单列--------
select Sno from student;
# MySQL当真是对于表名，属性名，都不区分大小写啊，下面三个都返回了同样结果
select sagE from Student;
select sagE from student;
select sAGE from student;

--------查询多列--------
# 结果中各个列的先后顺序与查询句内属性的顺序相同，不需要因为这个问题纠结过多，因为很少会将查询结果不做任何处理，直接展示在前端
select Sno, Sage from student;

--------查询所有列-------
select * from student;
```

查询结果中，可能会有多行是相同的，使用`distinct`关键字可以告诉DBMS去重：

```sql
select distinct Sage from student;
# 留意distinct会在查询结果中，某几行全部属性都相同时才起作用，仅仅一个属性重复时，distinct是无视的
select distinct Sage, Sname from student;
```

`select [distinct|all]`之后的，其实跟着的是一个目标列表达式，除了是表中的属性名，还可以是计算表达式，函数。

```sql
--------计算表达式--------
# 结果的列名为2018-Sage，值为计算后的结果
select distinct Sno, 2018-Sage from student;

--------函数--------
# 结果的列名为hex(Sage)，值为对应的16进制转换
select Sname, Sage, hex(Sage) from student;
# 结果的列名为lower(Sdept)，值为对应的小写字母
select Sname, Sage, lower(Sdept) from student;
```

### 查询结果中的若干行

`where`子句可以设置查询结果中元组要满足的条件，达到过滤数据的目的

```sql
# 获得成年人的信息
select Sname, 2018-Sage, Sage from student where Sage > 18;
```

元组需要满足的条件可以通过很多渠道设置，上面的`>`就是其中之一，在这里它也叫做谓词，谓词的作用就是“判断是否存在满足某种条件的元组”。如果存在这样的元组就返回真（TRUE），如果不存在就返回假（FALSE）。留意查询条件一定要写在`where`子句中

#### 比较判断

所有人都知道的，`<`就是其中之一，`<,>,<=,>=,=,!=,<>`这些都是。需要注意的是，mysql可没有这些东西 `!>,!<,!<=,!>=,not+...`，`<>`是有的，就是不等于。

#### 部分一致查询

有点像超级弱化版的正则表达式，用`like`, `not like`作为关键字，只有两个通配符，`%`和`_`。
- `%`匹配任意多个位置（包括一个位置也没有），`ab`是目标串，`a%b`为模式串,`ab`之间没有位置，也会被匹配到
- `_`仅仅匹配一个位置，要匹配几个位置就重复写几次

```sql
# 所有姓郝的学生
select * from student where sname like '郝%'
# 所有第二个字为翔的学生
select * from student where sname like '_翔%'
```

如果需要匹配的字符串中含有`%`或者`_`，使用`\`转义即可
```sql
# _开头的家庭作业名
select * from student where homework_name like '\_%' 
```

#### 范围查询

判断属性在什么范围内，使用`between and`, `not between and`

```sql
select * from student where Sage between 15 and 18;
```

#### 空值判断

`is null`可以取出目标列的存在空值的所属元祖，`is not null`与之相反。

#### 确定所属集合

`in`、`not in`用来指定属性值需要满足的集合，不是范围。

```sql
select * from student where Sage not in (17,18);
```

#### 叠加大法

以上五种查询条件，每个又可以看做一个分句，使用`AND`，`OR`可以将它们叠加，注意`AND`的优先级高于`OR`（可以使用括号改变优先级），当然也可以不必这么费脑子想如何叠加，直接嵌套子句也不错，发挥SQL的特点。

```sql
select * from student where Sage >10 and Sname like'李_';
```

在查询语句的最末，可以跟着一个`order by <列名> [desc]`子句，用来对最终的结果排序。默认为升序，越到表尾越大，在列名后跟上关键字`desc`(descent)可以指定降序。

```sql
select * from student where Sage >10 order by Sage;
select * from student where Sage >10 order by Sage desc;
```

### 聚集分组

聚集分组是两个内容，先看聚集

#### 聚集函数

类似于`count()`，`sum()`，`avg()`，`max()`，`min()`这样的函数称为聚集函数，可以用来非常方便的统计数据，叫聚集函数，我猜测是因为这面的特性：

先看看现在有什么
```sql
select sno from student;
```

基本表中的内容如下

```bash
+-----------+--------+------+-------+------+
| Sno       | Sname  | Ssex | Sdept | Sage |
+-----------+--------+------+-------+------+
| 201215121 | 李勇   | 男   | CS    |   20 |
| 201215122 | 刘晨   | 女   | CS    |   19 |
| 201215123 | 王敏   | 女   | MA    |   18 |
| 201215125 | 张立   | 男   | IS    |   19 |
+-----------+--------+------+-------+------+
4 rows in set (0.00 sec)
```

使用聚集函数统计结果中的人数

```sql
select count(Sno) from student;
```

返回结果显示4个人

```bash
+------------+
| count(Sno) |
+------------+
|          4 |
+------------+
1 row in set (0.00 sec)
```

下面的查询语句，猜猜会返回什么？`count(Sno)`的结果上面就有，一行一列，值为4。`Sname`这一列呢？按理说应该是一列四行，但这有些奇怪啊，一行与四行怎么组合...

```sql
select count(Sno), Sname from student;
```

看看结果吧，左边由于聚集函数，现在聚集成了一行，值为学生的数量4，属性名是`count(Sno)`。右边本该是四行，现在只有一行，值是`201215122`，也就是第一个学生的学号。
多的迁就了少的，不是少的复制多次迎合多的。

如果用在`select`中，聚集函数还是单独用吧（`select count(Sno) from student;`），别和属性名放在一起用了。

```bash
+------------+-----------+
| count(Sno) | sno       |
+------------+-----------+
|          4 | 201215122 |
+------------+-----------+
1 row in set (0.00 sec)
```

#### 分组

聚集分组是一对好基友，两者结合起来，就很滋润了。上面的查询中，我们聚集的对象是全部查询结果，现在使用分组子句，可以细化聚集函数的作用对象。分组子句可以跟着`where`子句之后。作用分组子句后，相同列名的元组被分为一组，每组分别作用`having`子句中的表达式

```sql
where ...
group by <column name> [having <条件表达式>] 
```

下面的查询语句将`sc`表按照`Sno`属性分组，展示每组的`sno`，`avg(grade)`

```sql
select sno, avg(grade) from sc group by Sno;
```

当然也可以按照多个属性分组

```sql
select sno, grade from sc group by Sno, grade; 
```

增加`having`短语，`having`短语的作用类似与`where`子句，用来过滤分组后的每个组内的元祖，判断每个组元组的最小成绩是否大于60，若大于60，再通过`select`选择每组的编号`sno`和`avg(grade)`。

```sql
select sno, avg(grade) from sc group by Sno having min(grade)>60;
```

#### 多此一举的试试

多此一举的试试，如果将`avg(grade)`改为`grade`会怎么样，按照`sno`分组，自然每个组都是具有相同的`sno`属性，那么结果是将`sno`重复多次，`sno`的右侧对应着每个成绩？

```sql
select sno, grade from sc group by Sno;
```

结果是`sno`仅出现了一次，右侧的`grade`列仅仅展示拥有同一`sno`属性的第一个元组的`grade`

```bash
+-----------+-------+
| sno       | grade |
+-----------+-------+
| 201215121 |    92 |
| 201215122 |    90 |
| 201216121 |    85 |
+-----------+-------+
3 rows in set (0.00 sec)
```

#### 注意点

在`where`子句中，不能出现聚集函数，`having`中可以用在非分组属性之上


在`having`语句中，可以使用`where`子句的六种过滤方法，但这六种方法只能用在作为分组的属性之上，比如下面强行凑出的例子，按照`sno`分组后（`Sno`即是分组属性），可以通过范围过滤，得到学号`100000000`到学号`300000000`同学的课程最高成绩：

```sql
select sno, max(grade) from sc group by Sno having sno between 100000000 and 300000000;
```

若将这六种方法作用在非分组属性上，就会出问题，having判断的对象就是相同`sno`属性的第一个元组的属性，对于下面这个表

```bash
+-----------+-----+-------+
| Sno       | Cno | Grade |
+-----------+-----+-------+
| 201215121 | 1   |    92 |
| 201215121 | 3   |    80 |
| 201215122 | 2   |    80 |
| 201215122 | 3   |    90 |
| 201216121 | 2   |    85 |
+-----------+-----+-------+
5 rows in set (0.00 sec)
```

`grade`不是分组属性，上面已经提到，如果没有聚集函数的话，会只显示各分组的第一个元组对应的属性值

```sql
select sno, grade from sc group by Sno;
```

如下：

```bash
+-----------+-------+
| sno       | grade |
+-----------+-------+
| 201215121 |    92 |
| 201215122 |    80 |
| 201216121 |    85 |
+-----------+-------+
3 rows in set (0.00 sec)
```

对非分组属性使用`having`子句。猜猜结果，使用`sno`作为分组属性，分成多组，`having`的作用对象为每个组，难道是判断每组中是否有元组的`grade`值在`90`到`98`？


```sql
select sno, grade from sc group by Sno having grade between 90 and 98;
```

看看结果，`sno`对应的`grade`值有`80`，`90`，有`grade`值在`90`到`98`，但结果的`sno`中却没有它，猜想失败了，会不会过滤条件在非分组属性时，仅仅作用于第一个值？

```bash
+-----------+-------+
| sno       | grade |
+-----------+-------+
| 201215121 |    92 |
+-----------+-------+
1 row in set (0.00 sec)
```

调换`sc`表中`201215122`对应的两个`grade`的值

```bash
+-----------+-----+-------+
| Sno       | Cno | Grade |
+-----------+-----+-------+
| 201215121 | 1   |    92 |
| 201215121 | 3   |    80 |
| 201215122 | 2   |    80 |
| 201215122 | 3   |    90 |
| 201216121 | 2   |    85 |
+-----------+-----+-------+
5 rows in set (0.00 sec)

-------修改后--------

+-----------+-----+-------+
| Sno       | Cno | Grade |
+-----------+-----+-------+
| 201215121 | 1   |    92 |
| 201215121 | 3   |    80 |
| 201215122 | 2   |    90 |
| 201215122 | 3   |    80 |
| 201216121 | 2   |    85 |
+-----------+-----+-------+
5 rows in set (0.00 sec)
```

重新查询一次

```sql
select sno, grade from sc group by Sno having grade between 90 and 98;
```

果然如此，在`having`中过滤非分组属性时，由于它有多个，便默认只对同组内的第一个元组作用过滤条件

```bash
+-----------+-------+
| sno       | grade |
+-----------+-------+
| 201215121 |    92 |
| 201215122 |    90 |
+-----------+-------+
2 rows in set (0.00 sec)
```

总结一下：

`having`和`where`非常像，都可以用来过滤元组，`where`子句的判断对象是所有元组，而`having`的判断对象

- 分组属性，按照它分组后的，该组内所有的分组属性的属性值都是相同的，取它进行是否满足过滤条件
- 非分组属性，按照分组属性分组后，非分组属性内的属性组一般是不同的，取组内的第一个对应属性值来判断是否满足过滤条件。


