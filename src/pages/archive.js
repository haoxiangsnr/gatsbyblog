import React, {Component} from "react";
import Card from "../components/card/card";
import Nav from "../components/nav/nav";
import styles from "./archive.module.css";
import Link from "gatsby-link";
class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        return (
        <div className={styles.container}>
            <Nav items={['All Posts', 'Back']} curItem='0' links={[``, `/`]} />
            <ul className={styles.list}>
                {
                    posts.map((post, i) => {
                        const node = post.node;
                        return (
                            <li className={styles.item} key={i}>
                                <Link className={styles.link} to={`${node.fields.slug}`}>{node.frontmatter.title}</Link>
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