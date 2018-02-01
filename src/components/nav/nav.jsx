// links[]，items[], curItem=''都必须有
// links给参数的时候，要注意绝对路径还是相对路径，curitem指向的链接可以不给
import React, {Component} from "react";
import styles from './nav.module.css';
import Link from 'gatsby-link';

class Nav extends Component {
    render() {
        const { items, curItem, links } = this.props;
        return (
            <div className={styles.nav}>
                <ul className={styles.list}>
                    {   
                        // 本页导航，不需要链接，单独处理
                        items.map((item, i) => {
                            if ( curItem == i) {
                                return (
                                    // curItem 项
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