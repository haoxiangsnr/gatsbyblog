import React, {Component} from "react";
import styles from './header.module.css';
import Link from 'gatsby-link';

class Header extends Component {
    render() {
        const list = this.props.nav;
        const links = this.props.links;
        return (
            <div className={styles.header}>
                <h1 className={styles.title}>
                    <Link to={"http://haoxiang.tech"}>{this.props.title}'s Blog</Link>
                </h1>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to={'/archive'} className={styles.link}>Archive</Link></li>
                    <li className={styles.item}><a href='http://resume.haoxiang.tech' className={styles.link}>Resume</a></li>
                </ul>
            </div>
    )
    }
}

export default Header