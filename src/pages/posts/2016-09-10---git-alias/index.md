---
title: "Git 学习小记之使用别名"
date: "2016-09-10"
tags: ["Git"]
popular: true
---
# Git 学习小记之使用别名

Git 是在开发中需要频繁使用的工具，如何高效使用，除了深刻理解用法之外，还可以利用一些别名来减少操作。

Git 中的省略其实无处不在，事实上在我们`push`的时候使用的 `git push origin master`，意思就是`git push origin master:master`（将本地的`master`分支推送至远端的`master`分支，如果没有就新建一个），这就是一个省略了。

哈哈，开玩笑的，下面开始进入正题了，想要使用别名，需要先在 Git 中进行配置，命令如下：

```bash
git config --global alias.<缩写> <全称>
```

举个例子

```bash
git config --global alias.co checkout
```

这里代表的例子就是指用`co`命令代替`checkout`命令，输入这个命令后，后续如果需要切换分支，那么就可以直接使用

```bash
git co haoxiangQ2
Switched to branch 'haoxiangQ2'
```

在使用 Git 的时候，我们会 add 追踪文件，但是有时候需要取消对文件的追踪，就会用的 reset 命令，对于这个命令，经常会有人抱怨不好记，太长，那么可以使用下面的配置

```bash
git config --global alias.unstage 'reset HEAD --'
git unstage fileA
```

方便快捷，哈哈，下面有些官方推荐的别名配置，可以灵活使用

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```