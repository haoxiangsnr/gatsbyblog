// links[]，items[], curItem=''
// items.len > 1， 必须要有links
import React, {Component} from "react";
import styles from './nav.module.css';
import Link from 'gatsby-link';

class Nav extends Component {
    render() {
        const { items, curItem, links } = this.props;
        // 最常规的标题，仅有一个导航的时候，不需要链接
        if (items.length == 1) {
            return (
                <div className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.curItem}>{items[0]}</li>
                    </ul>
                </div>
            );
        }
        return (
            <div className={styles.nav}>
                <ul className={styles.list}>
                    {   
                        // 本页导航，不需要链接，单独处理
                        items.map((item, i) => {
                            if ( curItem == i) {
                                return (
                                    <li key={i} className={styles.curItem}>{item}</li>
                                );
                            }
                            else {
                                // 其他页导航，需要链接，按照index即可
                                return (
                                    <li key={i} className={styles.item}>
                                        <Link className={styles.link} to={links[i]}>{item}</Link>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Nav;