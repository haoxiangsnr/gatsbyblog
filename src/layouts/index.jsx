import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";
import Header from "../components/header/header";


export default ({ children, data }) => {
    const metadata = data.site.siteMetadata;
  return (
      <div className={styles.container}>
        <div className={styles.loader}></div>
        <Header 
            title={metadata.title}
            nav={metadata.nav}
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
      }
    }
  }
`