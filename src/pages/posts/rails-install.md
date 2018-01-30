---
title: "Rails 安装记录"
date: "2015-07-10"
tags: ["Ruby", "Rails", "installtion-record"]
---
# Rails 安装记录

> 本文`ubuntu`版本为`14.04stl 64bit`，参考教程：http://rails-practice.com/content/Chapter_1/1.1.html， 需要翻墙

## Git

ubuntu安装完毕之后，首先安装git，以便之后会用到：

```bash
sudo apt-get update
sudo apt-get install git-core
```

配置身份信息：

```bash
git config --global user.name "xxx"
git config --global user.email "xx@gmail.com"
```

核实信息是否有误：

```bash
git config --list
```

此时已经能通过`http`正常拉去git上的内容，若想进一步配置`ssh`，可以参考https://help.github.com/articles/generating-ssh-keys/1323

## RVM

`rails`需要先安装`Ruby`环境，`RVM`是`Ruby`管理工具，可以方便的安装、管理、切换多个`Ruby`，管理`Gemset`。

```bash
curl -sSL https://get.rvm.io | bash -s stable
```

此时会有如下提示：

```bash
getcha22@ubuntu:~/Desktop$ curl -sSL https://get.rvm.io | bash -s stable
Downloading https://github.com/rvm/rvm/archive/1.26.11.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.26.11/1.26.11.tar.gz.asc
gpg: Signature made Mon 30 Mar 2015 02:52:13 PM PDT using RSA key ID BF04FF17
gpg: Can't check signature: public key not found
Warning, RVM 1.26.0 introduces signed releases and automated check of signatures when GPG software found.
Assuming you trust Michal Papis import the mpapis public key (downloading the signatures).
GPG signature verification failed for '/home/getcha22/.rvm/archives/rvm-1.26.11.tgz' - 'https://github.com/rvm/rvm/releases/download/1.26.11/1.26.11.tar.gz.asc'!
try downloading the signatures:
    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
or if it fails:
    command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
the key can be compared with:
    https://rvm.io/mpapis.asc
    https://keybase.io/mpapi
```

按照提示，执行：

```bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0
```

依然warring，继续按照提示

```bash
sudo curl -sSL https://rvm.io/mpapis.asc | gpg --import -
```

提示Thank you for using RVM!，OK，安装成功

## Ruby

重启终端，开始安装`Ruby`，先使用`rvm list known`来查看可以按照的`Ruby`列表，按照参考的教程，我选择使用`2.2.0`

```bash
rvm install 2.2.0123
```

在我安装的过程中，由于vpn不算稳定，出现了404的提示，我尝试重新安装，这次安装成功。 通过下面的命令检查当前的版本：

```bash
rvm list
```

提示结果：

```bash
rvm rubies
   ruby-2.2.0 [ x86_64 ]
```

再进一步核实`ruby`的版本， 此时由于`ubuntu`存在其他版本的`ruby`，需要制定默认的`ruby`版本，此时可以使用:

```bash
rvm --default use 2.2.0
```

发现有错误提示`RVM is not a function`,这个问题是由于`ubuntu`系统的终端导致 ，为了解决这个问题，需要`Run command as login shell`，参考这个链接进行解决：https://rvm.io/integration/gnome-terminal ，之后重新制定默认版本，提示OK。

```bash
ruby 2.2.0p0 (2014-12-25 revision 49005) [x86_64-linux]
```

到此为止，`ruby`的安装告一段落，开始进行`Rails`的安装。

## Rails

先设置`Gemset`。`Gemset` 是一个独立的 `Gem` 集合，可以为每个项目设置自己的 `Gemset`，而不会相互干扰：

```bash
rvm gemset create rails4.2
rvm use 2.2.0@rails4.2 --default
gem install rails -v 4.2.0 --no-ri --no-rdoc
```

出现如下问题:

```bash
ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)
    Errno::ECONNRESET: Connection reset by peer - connect(2) for "rubygems.global.ssl.fastly.net" port 443 (https://api.rubygems.org/quick/Marshal.4.8/rails-4.2.4.gemspec.rz)
```

遇到这个问题，还提示端口是443.可能是`gem`源导致的网络问题，尝试修改https为http。通过以下命令:

```bash
gem sources
gem sources -a url //添加
gem sources -r url  //删除
更新source cache
gem sources -u
// other :
gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
gem sources -l
```

之后重新进行安装，最后结束安装

```bash
Successfully installed rails-4.2.0
30 gems installed
```

## 其他情况
- `bundle install`如果遇到问题，可以先把`gemfile`中的`source`修改成`http`开头即可，如果在操作时提示需要`javascript run time`，只要安装`Node.js`即可