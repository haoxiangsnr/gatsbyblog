---
title: "Node原生模块加载器"
date: "2016-11-12"
tags: ["Node"]
---
# Node原生模块加载器

Node.js包含一个简单的模块加载器，在Node.js 中，文件和模块是一一对应的，比如下面这个例子，`foo.js`装载在处于相同目录的`circle.js`

`foo.js`中的内容：

```js
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

`circle.js`中的内容:

```js
const PI = Math.PI;
exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;
```

`circle.js`模块导出了两个函数`area()`和`circumference()`。

为了将函数或者对象添加到模块上，你可以将它们添加给特殊的对象`exports`。

模块中的局部变量是模块私有的，因为模块最终会被包裹在 Node.js的一个函数中。在这个例子中，变量`PI`是 `circle.js`的私有变量。

## exports 和 module 的关系

如果想要一次赋值，就直接导出一个对象或者函数，那么应该是用`module.exports`而不是使用`exports`。

```js
const square = require('./square.js');
var mySquare = square(2);
console.log(`The area of my square is ${mySquare.area()}`);
```

使用`module.exports`

```js
module.exports = (width) => {
   return {
    area: () => width * width
   };
}
```

## require 对象的解析逻辑

在`Y`路径的模块内`require(x)`，总体会经过下面的过程

1. 检查是否为核心模块(`fs`, `assert`)
    1. return 核心模块
    1. 停止
1. 检查是否为相对路径('./', '../');
    1. 装载文件
    1. 装载目录
1. 检查是否为`node_modules`中的模块，如果没有，抛出错误

其中装载文件又有如下过程：

1. 文件是`X`， 装载为`JS text`
1. 是一个文件，文件名为`X.js`，装载为`js text`
1. 文件是`X.json`，parse为`js object`
1. 文件是`.node`，装在为二进制

装载目录的过程如下：

1. `X/package.json`是否存在，解析`package.json`中的 `main`字段的值
1. 依次检查`X/index.js` ,`X/index.json`, `X/index.node`是否存在，按照上面的相同规则引入

装载`node_modules`中的模块的过程如下：

执行类似下面的函数，生成标识`node_modules`目录位置的数组，将当前当前目录通过`split`方法解析为数组：

```js
/demo/tmp/src
split =>
['','demo', 'tmp', 'src','']
```

遍历每个层级，追加字符串`'node_modules'`

```js
DIRS: ['demo/node_module','tmp/node_module', 'src/node_modules']
```

返回数组`DIRS`，遍历上面数组，装载：

```js
for each DIR in DIRS:
```

先优先按文件解析`（DIR/x）`，再按照目录解析。