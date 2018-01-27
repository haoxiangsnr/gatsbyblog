import React from "react";

// data 应该是gatsby提供的
export default ({data}) => (
  <div>
    <h1>
        About {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
);
// 这部分graphql会由gatsby预处理
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`