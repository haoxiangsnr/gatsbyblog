import React, {Component} from "react";
import Link from "gatsby-link";
import Nav from "../../components/nav/nav";
import styles from "./index-summary.module.less"

class IndexSummary extends Component {
    render () {
        const posts = this.props.posts;
        return (
            <div className={styles.container}>
                <Nav items={['返回首页','标签汇总']} curItem='1' links={['/', '/tags']} />
                <ul className={styles.list}>
                    {
                        Object.keys(posts).map(tagName => {
                            const tag = posts[tagName];
                            const len = tag.length;
                            return (
                                <li className={styles.item} key={tagName}>
                                    <Link className={styles.link} to={`/tags/${tagName}`}>{tagName}({len})</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default IndexSummary;