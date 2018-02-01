---
title: "ShadowSocks 安装记录"
date: "2016-09-01"
tags: ["Linux", "shadowsocks"]
---
# ShadowSocks 安装记录

这里使用的是 `ubuntu 14.04`,是我比较喜欢的一个系统。
首先更新 `apt` 源，保证获取最新的软件

```bash
sudo apt-get update
```

之后安装 `python` 相关依赖，`pip` 包管理器，可能是类似 `npm` 的一种吧，没有细致研究过

```bash
sudo apt-get install python-gevent python-pip
```

通过 `pip` 安装 `ShadowSocks`

```bash
sudo pip install shadowsocks
apt-get install python-m2crypto
```

配置 `ShadowSocks` 的配置文件 `vim /etc/shadowsocks.json`

```bash
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_port":1080,
    "password":"password",
    "timeout":600,
    "method":"aes-256-cfb"
}
```

`server` 表示当前服务器的 `ip` 地址，`password` 更换成自己需要设置的密码

切换到 `root` 用户
之后启动 `shadowsocks`

```bash
su -
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
```

参考资料：
https://github.com/iMeiji/shadowsocks_install/wiki