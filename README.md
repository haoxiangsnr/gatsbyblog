# GatsbyJS Blog

base on GatsbyJS ~

## DEV

clone `gatsbyblog`与`gatsbydeploy`到开发目录:

```bash
# 目前写死了，可以到./deploy.sh中修改
~/center/gatsbyblog
~/center/gatsbydeploy
```

1. 进入`gatsbyblog`目录，运行`npm install`

1. 开发运行`npm run dev`，部署运行`./deploy.sh`

1. 部署时候，如果需要增加`prefix`，可以如下修改:

```js
// gatsby-config.js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/blog`,
};
// package.json
"build": "gatsby build --prefix-paths",
```

## NOTE

1. tags中是后续的属性名，用英文