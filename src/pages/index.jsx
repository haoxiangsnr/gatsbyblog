// TODO 增加分页功能
// TODO 首页显示优秀的文章
import React from "react";
import styles from "./index.module.less";
import Card from "../components/card/card";
import Nav from "../components/nav/nav";
import {Helmet} from "react-helmet";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        return (
        <div className={styles.container}>
                <Helmet>
                    <title>getcha22-郝翔-博客-haoxiang</title>
                </Helmet>
            <Nav items={['推荐文章', '文章汇总']} links={[``, `/archive`]} curItem='0' />
            {   
                posts.map((postData, i) => {
                    if (postData.node.frontmatter.popular) {
                        return (<Card key={`card-${i}`} node={postData.node} />);
                    }
                })
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
            popular
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