import React, {Component} from "react";
import styles from './nav.module.css';
import Link from 'gatsby-link';

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isfull: false
        }
    }

    render() {
        return (
            <div>sider</div>
        )
    }
}

export default Sidebar;