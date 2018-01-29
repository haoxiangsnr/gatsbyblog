# blog dev
1. clone `gatsbyblog`与`gatsbydeploy`到开发目录:

```
# 目前写死了，后续可以到deploy.sh
~/center/gatsbyblog
~/center/gatsbydeploy
```

1. 进入gatsbyblog目录，运行`npm install`

1. 开发运行`npm run dev`，部署运行`./deploy.sh`

1. 部署时候，如果需要增加prefix，可以如下修改:
```
// gatsby-config.js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/blog`,
};
// package.json
"build": "gatsby build --prefix-paths",
```
