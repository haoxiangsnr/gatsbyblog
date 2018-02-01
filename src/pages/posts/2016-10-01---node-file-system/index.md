---
title: "Node文件系统"
date: "2016-10-01"
tags: ["Node","JS"]
---
# Node文件系统

`Node`通过封装基本的`POSIX`函数来提供文件系统，使用`require('fs')`来使用这个模块，所有与文件相关的方法，都提供了异步和同步的形式。 异步的方法通常会将一个可选的回调函数作为最后一个参数，回调函数的第一个参数通常留给意外情况，如果操作是成功的，第一个参数将是`null`或者`undeefined`。 使用同步方法，对于任何意外都会即时抛出，可以使用`try/catch`语句来处理意外情况，或者让错误时间向上冒泡。 下面是一个有关异步方法的基本例子：

```js
const fs = require('fs');
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('sucessfully deleted /tmp/hello');
}
```

再跟着一个同步的例子：

```js
const fs = require('fs');
fs.unlink('/tmp/hello');
console.log('successfully deleted /tmp/hello');
```

使用异步方法时，需要注意异步方法的执行不一定按照书写顺序，比如下面这种写法很容易出错：

```js
fs.rename('/tmp/hello', '/tmp/world', (err) => {
   if (err) throw err;
   console.log('renamed compelte');
});
fs.stat('/tmp/world', (err, stats) => {if (err) throw err;
console.log(`stats: ${JSON.stringify(stats)}`)});
```

在这里，很可能`fs.stat`函数先于`fs.rename`，这样会出现一些不必要的错误，正确的方法应该是写在回调函数中:

```js
fs.rename('/tmp/hello/', '/tmp/world', (err) ss=> {
    if (err) throw err;
    fs.stat('/tmp/world'),(err, stats) => {
        console.log(`stats: ${JSON.stringfy(stats)});
    });
});
```

执行复杂耗时的方法，强烈建议使用异步版本，同步方法在它们执行结束之前，会一直锁住当前线程，阻断所有操作。 在`fs`模块中，可以使用相对路径，但是需要留意参照的路径来自于`process.cwd()`的返回值。 很多`fs`函数可以忽略掉回调参数，如果这样进行使用，默认会抛出错误，为了跟踪到函数调用的位置，可以设置`NODE_DEBUG`环境变量：

```bash
$ cat script.js
function bad() {
  require('fs').readFile('/');
}
bad();
$ env NODE_DEBUG=fs node script.js
fs.js:66
        throw err;
              ^
Error: EISDIR, read
    at rethrow (fs.js:61:21)
    at maybeCallback (fs.js:79:42)
    at Object.fs.readFile (fs.js:153:18)
    at bad (/path/to/script.js:2:17)
    at Object.<anonymous> (/path/to/script.js:5:1)
    <etc.>
```

`fs.watch(filename[, options][, listener])`监听制定文件或者目录的变化情况，`filename`参数可以是文件或者目录，这个方法返回一个`fs.FSWather`对象。 第二个参数是可选的，提供的`options`参数应该是一个对象，里面要求的成员是`persistent`和`recursive`，这个两个成员都是布尔类型的值。 用做监听的回调函数有两个参数，分别是(`event`, `filename`)，`event`的值视情况，返回字符串`change`，`rename`，文件名指的是触发事件的这个文件。看下面的这个例子：

```js
// node.md
// 被监听的文件
this is cat.
// app.js
// 用来监听文件改变
    fs.watch('./node.md', (event, filename) => {
        console.log('下面是event参数，event参数的类型，filename');
        console.log(typeof event);
        console.log(filename);
    });
// node.md
// 这里修改了监听的node.md文件
this is dog.
// console
// 执行结果
下面是event参数，event参数的类型，filename
change
string
node.md
// node.md => node1.md
// 修改文件的名字
// console
// 执行结果
下面是event参数，event参数的类型，filename
rename
string
node1.md
```

注意事项： `fs.watch`并不是跨所有平台的，在某些常见下不一定可用。 第二个参数中的布尔值`recursive`只在`osx`和`window`下可以使用。

## 可用性

- `fs.watch`依赖于操作系统底层模块，由操作系统底层模块通知Node文件的变化。
- 如果某个操作系统底层模块对于文件的监听本身就有问题，那么`fs.watch`是无法发挥作用的，比如监听了一些不可靠的目录和文件，网络文件系统，虚拟机系统中的文件。
- 在`Linux`，`osx`系统中，`fs.watch`解析路径成一个索引节点，并且监听这个节点，但是如果监听的节点被删除或者重新创建，那么此时它就成了一个新节点了，`watch`将会发送一个`delete`事件，但是仍然监听原来的节点，原来的事件不会响应新节点的改变，这种处理是符合预期的。
- `filename`参数只支持在`Linux`和`windows`上面指定(`osx`也可以，但是有些情况可能会有异常)，事实上，即便是在可以使用的平台上，也不建议直接使用这个参数，因为在回调函数内部，建议增加一些逻辑判断，看一下`filename`是否为`null`，如下面的例子：

```js
fs.watch('somedir', (event, filename) => {
    console.log(`event is: ${event}`);
    if (filename) {
         console.log(`filename provided: ${filename}`);
     } else {
         console.log('filename not provided');
     }
});
```