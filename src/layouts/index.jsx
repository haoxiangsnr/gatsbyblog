import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.less";
import Header from "../components/header/header";
import {Helmet} from "react-helmet";
import "prismjs/themes/prism-coy.css"

if (typeof document !== `undefined`) {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f1fbab929e8943d0601b6a6606a7d465";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}


export default ({children, data}) => {
    const metadata = data.site.siteMetadata;
    return (
        <div className={styles.container}>
            <Helmet>
                <meta name="description" content="关于郝翔,haoxiang,getcha22的博客,提供技术文章的分享" />
                <meta name="keywords" content="郝翔,博客,前端,机器学习,简历,haoxiang,个人主页"/>
                <title>首页_郝翔的博客_计算机之美_haoxiang</title>
            </Helmet>
            <Header
                title={metadata.title}
                nav={metadata.nav}
                links={metadata.links}
            />
            {children()}
            <footer className={styles.footer}>
                <p className={styles.info}>
                    Copyright © 2018 getcha22 & 郝翔
                </p>
                <p className={styles.info}>
                    576503369@qq.com & getcha576503369@gmail.com
                </p>
                <p className={styles.info}>
                    All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export const query = graphql `
  query LayoutQuery {
    site {
      siteMetadata {
        title
        nav
        links
      }
    }
  }
`;