---
title: "JavaScript 中的 in 关键字"
date: "2016-02-07"
tags: ["JS"]
popular: true
---
# JavaScript 中的 in 关键字

在`JavaScript`中,我经常会使用`for(key in ..)`语句来遍历对象的`key` ,这是一种很常用的方式.
这里需要留意, 其实`for(.. in ..)`语句也可以用来遍历数组,其中的`key`就是数组的`index`(索引值,0开始) 。
除了在`for(.. in ..)`语句中使用,`in`也可以作为一个单独的关键字使用,用来判断某个属性或者元素是否存在与数组或者对象.一般会用在判断语句中,下面进行说明。

## 数组

```js
var pig = ['head', 'hand', 'leg'];
console.log('head' in pig); // false
console.log('0' in pig); // true
console.log(4 in pig); // false
```

通过`in`操作判断数组是否存在某个索引,逐个分析：

1. 判断`head`字符串是否为`pig`的索引,很明显,索引应该是数字,所以`false`。
1. 判断`pig`是否有索引为字符串 '0',可以看到最后判断结果为 true, 这是因为执行`in`关键字判断时, `JS`引擎进行了隐式转换。
1. 判断数字`4`是否为`pig`数组的索引,结果`false`。

## 对象

```js
var pig = {head: 'head', hand: 'head', leg: 'leg'};
console.log(head in pig); // false
console.log('head' in pig); // true
```

通过`in`操作判断对象是否有某个键名,逐个分析：

1. 判断变量`head`是否为`pig`的键名, `head`是一个未声明未赋值的变量,当然不会是`pig`的键名,返回`false`。
判断字符串`head`是否为`pig`的键名,返回`true`。
