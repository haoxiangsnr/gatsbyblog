---
title: "Anaconda介绍"
date: "2017-04-10"
tags: ["Python", "Anaconda"]
---
# Anaconda介绍

Anaconda 是一个第三方开源免费IDE，它本质上是第三方库和主流工具的集成平台。支持市面上主流的第三方库和工具，非常适合数据计算相关领域，且它支持跨平台。
Anaconda可以直接从官网上面下载，它会随着Python版本的更新不断更新。

## conda

很多人听过conda，它是什么？
conda其实是一个进行用户包管理（类似pip）和Python环境管理（切换Python版本）的工具。日常中我们经常使用conda为旧程序配置Python2，新程序配置Python3。
conda特点是可以将工具，第三方库，Pyhton甚至自身都当成包来管理，非常强大。

## 关系

conda和Anaconda有什么关系呢？其实Anaconda是conda的父集合，且除了conda外它包含了某个版本的Python，大量的第三方库。我们在安装Anaconda后打开Navigator程序，切换至Envronments（环境空间）后，就进入了conda的图形化界面。

![conda图形化界面](https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2015-07-10---anaconda-introduction/a.png)


我们可以看到有个root的环境空间，里面包含了很多不同类型的包。我们可以创建新的环境空间。

![创建环境空间](https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2015-07-10---anaconda-introduction/b.png)


在新的环境中，可以指定Python的版本，并且增加我们需要的包。除此之外，Anaconda还已经预装了一个非常棒的编辑器Spyder，交互式脚本程序IPython等，可以覆盖到非常多的开发需求点。