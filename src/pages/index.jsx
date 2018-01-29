import React from "react";
import styles from "./index.module.css";
import Card from "../components/card/card";
import Nav from "../components/nav/nav";

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        return (
        <div className={styles.container}>
            <Nav items={['Recently Posts', 'All Posts']} links={[``, `/archive`]} curItem='0' />
            {   
                posts.map((postData, i) => (
                    <Card key={`card-${i}`} node={postData.node} />
                ))
            }
        </div>
        )
    }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
            tags
          }
          wordCount {
            paragraphs
            sentences
            words
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`;