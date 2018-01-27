import React, {Component} from "react";
import styles from './header.module.css';
import Link from 'gatsby-link';
class Header extends Component {
    render() {
        const list = this.props.nav;
        return (
            <div className={styles.header}>
                <h1 className={styles.title}>
                    <Link to={"/"}>{this.props.title}'s Blog</Link>
                </h1>
                <ul className={styles.list}>
                    {list.map((item, i) => <li key={i} className={styles.item}><Link key={i} to={`/${item}`} className={styles.link}>{item}</Link></li>)}
                </ul>
            </div>
    )
    }
}

export default Header