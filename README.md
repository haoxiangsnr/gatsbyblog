# GatsbyJS Blog

base on GatsbyJS ~

## DEV

clone `gatsbyblog`到开发目录:

```bash
git clone --.git
cd gatsbyblog
yarn
# 进行开发调试
yarn run dev
```

## Deploy

部署时候，如果需要增加`prefix`，可以如下修改：

```js
// gatsby-config.js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/blog`,
};
// package.json
"build": "gatsby build --prefix-paths",
```

修改以后内部的链接都会以此为依据改变。运行根目录`deploy.sh`构建至至`docs`目录，默认情况下会以时间作为`commit`内容。

```bash
# 内部暂时写死了.git，可以.git/config中修改
./deploy.sh
```

## NOTE

1. tags中是后续的属性名，用英文

## TODO

- [ ]`deploy.sh`运行时，增加交互式`commit`