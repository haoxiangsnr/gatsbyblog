import React from "react";
import Link from "gatsby-link";
import IndexSummary from "./index-summary";
import Nav from "../../components/nav/nav";
import Card from "../../components/card/card";
import styles from "./index.module.css";

export default function Tags({pathContext}) {
    const {posts, post, tag} = pathContext;
    if (!tag) {
        console.log(pathContext);
        return <div><IndexSummary posts={posts}/></div>
    }
    const len = post.length;
    const navTitle = `共计 ${len} 个关于 ${tag} 的标签`;
    
    return (
        <div className={styles.container}>
            <Nav items={[`${navTitle}`, `标签汇总`]} curItem='0' links={[``, `/tags`]} />
            <ul>
                {   
                    post.map((node, i) => {
                        return (
                            <Card key={`card-${i}`} node={node} />
                        );
                    })
                }
            </ul>
        </div>
    );
}