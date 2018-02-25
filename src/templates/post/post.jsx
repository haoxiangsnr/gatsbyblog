import React, {Component} from "react";
import styles from "./post.module.less";
import Link from "gatsby-link";
import Nav from "../../components/nav/nav";
import {Helmet} from "react-helmet";

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isfull: false
        }
    }

    handleClick = () => {
        this.setState({
            isfull: !this.state.isfull
        });
        console.log(this.state);
    }

    render() {
        const {html, frontmatter} = this.props.data.markdownRemark;
        const {date, tags, title} = frontmatter;
        let nav, fullContainer;
        if (this.state.isfull == false) {
            nav = <Nav items={[`${title}`, `其他文章`]} curItem='0' links={['',`/archive`]} />;
        }
        fullContainer = this.state.isfull ? `${styles.fullContainer}` : `${styles.container}`;
        return (
            <div className={fullContainer}>
                <Helmet>
                    <title>{title} 来自郝翔的个人网站</title>
                </Helmet>
                {nav}
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
                    <div className={styles.button} onClick={this.handleClick}>{this.state.isfull ? `退出全屏` : `全屏模式`}</div>
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