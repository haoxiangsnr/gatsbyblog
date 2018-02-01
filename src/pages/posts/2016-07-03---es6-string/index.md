---
title: "ES6中的字符串"
date: "2016-07-03"
tags: ["ES6", "JS"]
---
# ES6中的字符串

在ES6中，`Iterator`也被添加给了字符串，这样代表字符串可以使用`for ... of`循环了。

```js
for (let code of 'foo') {
    console.log(code);
}
// "f"
// "o"
// "o"
```

## 字符串查找

接下来介绍一些可以通过 ES5 PolyFill的方法，但是现在 ES6 原生实现了

|Method|Param|Return|Description|
|-|-|-|-|
|includes()|需要验证是否被包含的字符串|Boolean|表示是否调用此方法的字符串是否包含参数中的字符串|
|startsWith()|需要被验证的字符串|Boolean|表示调用此方法的字符串的开头部分是否就是参数|
|endsWith()|需要验证的字符串|Boolean|与startsWith类似，不同点此方法为结尾|

下面看一下例子：

```js
let name = 'hello,this is Hao!';
name.startsWith('hello');
// true
name.endsWith('!');
// true
name.includes('this');
// true
```

这三个方法很实用，也比较简单，他们同样都接受第二个参数，表示从某个索引开始：

```js
'11112222'.startsWith('2',4)
// true
```

## 字符串重复

|Method|Param|Return|Description|
|-|-|-|-|
|repeat()|需要被重复的次数|重复后的新字符串|将调用此方法的字符串重复n次|

使用这个方法需要注意，如果使用小数，会先被取整，比如：2.9(2)。

## 最重要的，模板字符串

模板字符串，指的是增强版的字符串，使用 ` 来进行标识，它包含普通字符串的使用方法，同时还支持嵌入变量到字符串中,多行字符串。
所谓多行字符串，就是说所有空格和缩进都会被保存，嵌入变量则指使用`${x}`这样的方式来拼接字符串和变量，下面看例子：

```js
let name = "hao
big small
";
console.log(name);
//会保持缩进和空格
"hao
big small
"
let obj = {a: 'xiang'};
let a = `hao${obj.a}`;
console.log(a);
// haoxiang
```

模板字符串本质上就是在`${x}`内部执行JS代码，所以如果是一个函数，也会被执行

```js
function fn() {
  return "Hello World";
}
`foo ${fn()} bar`
// foo Hello World bar
```

以上。