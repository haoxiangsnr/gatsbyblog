import React, {Component} from "react";
import Link from "gatsby-link";
import Nav from "../../components/nav/nav";
import styles from "./index-summary.module.css"

class IndexSummary extends Component {
    render () {
        const posts = this.props.posts;
        return (
            <div className={styles.container}>
                <Nav items={['Tags']} curItem='0' />
                <ul className={styles.list}>
                    {
                        Object.keys(posts).map(tagName => {
                            const tags = posts[tagName];
                            return (
                                <li className={styles.item} key={tagName}>
                                    <Link className={styles.link} to={`/tags/${tagName}`}>{tagName}</Link>
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