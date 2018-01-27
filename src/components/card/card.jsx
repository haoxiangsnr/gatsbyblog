import React, {Component} from "react";
import styles from './card.module.css';
import Link from 'gatsby-link';

class Card extends Component {
    render() {
        const node = this.props.node;
        const {excerpt, frontmatter, fields, wordCount} = node;
        const slug = fields.slug;
        const tags = frontmatter.tags;
        return (
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <Link to={slug}>{frontmatter.title}</Link>
                </h1>
                <ul className={styles.meta}>
                    <li className={styles.item}>创建时间：{frontmatter.date}</li>
                </ul>
                <p className={styles.excerpt}>
                {excerpt}
                </p>
                <div className={styles.tags}>
                    {   
                        tags.map((tag, i) => {
                            return (
                            <Link key={i} to={`/tags/${tag}`} className={styles.tag}>
                            {tag}</Link>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Card