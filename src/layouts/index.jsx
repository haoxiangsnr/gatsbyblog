import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";
import Header from "../components/header/header";
import "prismjs/themes/prism-coy.css"

if (typeof document !== `undefined`) {
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?f1fbab929e8943d0601b6a6606a7d465";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
}


export default ({ children, data }) => {
    const metadata = data.site.siteMetadata;
  return (
      <div className={styles.container}>
        <div className={styles.loader}></div>
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
`