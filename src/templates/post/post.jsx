import React, {Component} from "react";
import styles from "./post.module.css";
import Link from "gatsby-link";
import Nav from "../../components/nav/nav";

export default class Post extends Component {
    render() {
        const {html, frontmatter} = this.props.data.markdownRemark;
        const {date, tags, title} = frontmatter;
        return (
            <div className={styles.container}>
                <Nav items={[`${title}`, `All Posts`]} curItem='0' links={['',`/`]} />
                <div className={styles.postContent}>
                    <div dangerouslySetInnerHTML={{
                            __html: html
                        }}> 
                    </div>
                    <ul className={styles.list}>
                        
                        {
                            tags.map((tag, i) => {
                                return <li key={i} className={styles.item}><Link className={styles.link} to={`/tags/${tag}`}>{tag}</Link></li>
                            })
                        }
                    </ul>
                    <p className={styles.date}>创建时间：{date}</p>
                </div>
            </div>
        );
    }
}

export const query = graphql `
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
            }
        }
    }
`;