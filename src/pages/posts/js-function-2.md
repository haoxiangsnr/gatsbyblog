---
title: "再探JS函数"
date: "2016-01-10"
tags: ["JS", "function"]
---

# 再探JS函数

函数是JS的核心概念，主要用来封装语句，封装单独的功能。

## 函数参数

函数不在意它本身到底接收多少参数，不关心最后会使用多少参数。因为函数只会接收一个数组，函数可以通过`arguments`属性来访问这个参数数组。关于这个数组，他其实是个对象，如下:

```js
var a = function () {var b= 1; var c = 0} //a是一个函数
typeof a.arguments  // Object
```

但是为什么又说它是数组呢，因为它本身很数组很像，可以通过方括号加数字的方法来访问具体的参数，同时还有数组对象有的`length`属性。一个有趣的例子：

```js
function a (){
  console.log("hello" +　arguments[0] + arguments[1]);
}
a("hao","xiang"); //hellohaoxiang
```

这样子依然是有效的，在函数执行的时候，通过`arguments`对象的`length`属性可以知道被传递的参数个数，还有个更有趣的例子，是关于`arguments`的同步性的：

```js
function doAdd (num1,num2){
  arguments[1]=10;
  alert(arguments[0] + num2);
  }
  doAdd(1,1); //11，arguments[1]和num2是同步的
```

参数就是局部变量，对于函数来说，传递参数是按值的，基本类型的很好理解，相当于变量的复制。对于引用类型来说，还需要留意到此时依然是按值传递的，这个值依然是指引用的内存地址值。证明方法：需要先创建一个对象，传递函数中，此时在函数内部修改对象的属性，此时内外是一致的，因为他们是一种的一个对象。但是此时如果将参数重新初始化为一个对象，那么也就是说此时参数已经指向另一个变量了，和之前的一切无关。

## 函数相关属性

`arguments`属性有一个叫做`callee`的指针，这个指针指向拥有这个`arguments`对象的函数。主要用来解除耦合，下面是关于递归算法的例子

```js
function fac (num) {
    switch (num){
        case 1 :
        return 1;
        default: return num * arguments.callee(num-1);
    }
}
```

函数的另外一个内部属性是`this`对象，`this`引用的是函数据以执行的环境对象，`this`是包含它的函数作为方法被调用是所属的对象 = 包含它的函数 + 作为方法被调用时 + 所属的对象。

## 函数的方法

主要有`apply`,`call`与`bind`

### `apply()`与`call()`：

表示在特定的作用域内调用函数，与`call()`的区别在于`call`在使用时必须指定参数。

## `bind()`

这个方法可以用来创建一个新的实例，实例的`this`值会被绑定到传给`bind()`的值上

## 细碎的小点

- `return`语句，一旦`return`，后续的语句不会继续执行了，不加`return`的话，函数默认的返回值是`undefined`。