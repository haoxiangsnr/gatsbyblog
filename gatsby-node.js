const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


// 截取出路径，将路径放在一个新的属性中
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

const createTagPages = (createPage, edges) => {
  // Tell it to use our tags template.
  const tagTemplate = path.resolve(`src/templates/tags/index.jsx`);
  // Create an empty object to store the posts.
  const posts = {};
  
  // Loop through all nodes (our markdown posts) and add the tags to our post object.

  edges.forEach(({ node }) => {
    
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });
  // Create the tags page with the list of tags from our posts object.
  createPage({
    path: "/tags",
    component: tagTemplate,
    context: {
      posts,
    },
  });
  
  // For each of the tags in the post object, create a tag page.
  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName];
    
    createPage({
      path: `/tags/${tagName}`,
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName,
      },
    });
  });
};

// 根据这个属性查东西，装页面
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
{
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date
          tags
        }
        html
        fields {
          slug
        }
      }
    }
    totalCount
  }
}
    `).then(result => {
      // 结果就是路径，使用post对应的模板文件，
      const edges = result.data.allMarkdownRemark.edges;
      edges.forEach(({ node }) => {
        createTagPages(createPage, edges);
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.jsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
