---
title: "tmux日常操作"
date: "2017-01-22"
tags: ["Tmux","Linux"]
---
# tmux基本操作

电脑换回了win10系统，使用bash on windows进行开发，有个问题一直很困扰。
在windows系统下面，少见非常优秀的，类似iTerm2那样的终端软件。使用cmder对于bash的美化确实起到了很大的作用，但是对屏幕的管理依然不方便。最近留意到了tmux这款终端复用工具，简单使用后，发现它的确非常棒，给我带来了不少的便利。

## Session

创建一个Session，默认情况下，当在shell中输入`tmux`时，就会自动创建一个名称为`0`的Session

```bash
#　创建Session
tmux
# 查看当前建立的Session，使用下面两个命令
tmux list-session
# 缩写
tmux ls
0: 1 windows (created Sat Jan 21 11:27:33 2017) [55x35]
# 创建一个指定名称的Session
tmux new -s $name
# 使用t参数关闭指定的Session
tmux kill-session -t $name
# 将指定的Session放置到后台中
tmux detach -t  $name
# 加载处于在后台中的Session
tmux attach-session -t $name
# 完全退出，关闭所有的Session
tmux kill-server
```

## Window

在Session之下，可以开设很多得当Window，其实当我们创建一个Session时，就已经会默认创建一个Window了。

在Window中，可以使用很多命令进行闪转腾挪了，默认调用命令的快捷键是`Ctrl-b`，看下面的例子：

```bash
#Ctrl-b <command>
# 列出当前所有的Window
Ctrl-b w 
(0)  0: ~  "DESKTOP-IE8ULOJ"
(1)  1: ~  "DESKTOP-IE8ULOJ"
(2)  2: ~- "DESKTOP-IE8ULOJ"
(3)  3: ~* "DESKTOP-IE8ULOJ"
# 创建一个Wind ow （create）
Ctrl-b c
# 切换到下一个Window （next）
Ctrl-b n
# 切换到上一个Window（previous）
Ctrl-b p
# 切换到指定序号的Window
Ctrl-b [0-9]
# 重命名当前窗口的名称
Ctrl-b ，
# 关闭当前窗口
Ctrl-b &
```

## Pane

在Window层级的切换时全屏的，可以继续分，往下的这个层级叫做Pane

```bash
# 垂直分割
Ctrl-b %
# 水平分割
Ctrl-b “”
# 在窗口之间切换
Ctrl-b o
# 按照指定的方向切换
Ctrl-b 方向键
# tmux默认有几种Pane的布局方式，这个命令用来在默认的布局方式中切换
Ctrl-b 空格
# 关闭当前Pane
Ctrl-b x
```