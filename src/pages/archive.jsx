import React, {Component} from "react";
import Card from "../components/card/card";
import Nav from "../components/nav/nav";
import styles from "./archive.module.less";
import Link from "gatsby-link";
import {Helmet} from "react-helmet";

class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        console.log(posts[0].node.frontmatter.date);
        return (
        <div className={styles.container}>
                <Helmet>
                    <title>文章汇总</title>
                </Helmet>
            <Nav items={['返回首页', '文章汇总']} curItem='1' links={[`/`, ``]} />
            <ul className={styles.list}>
                {
                    posts.map((post, i) => {
                        const node = post.node;
                        return (
                            <li className={styles.item} key={i}>
                                <Link className={styles.link} to={`/posts${node.fields.slug}`}>{node.frontmatter.title}</Link>
                                <p className={styles.date}>{node.frontmatter.date}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}

export default Archive;

export const pageQuery = graphql`
  query archive {
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;