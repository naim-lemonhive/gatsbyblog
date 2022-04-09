const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allSanityBlog {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  data.allSanityBlog.nodes.forEach((node) => {
    actions.createPage({
      path: `/blogs/${node.slug.current}`,
      component: path.resolve('./src/templates/blog-details.js'),
      context: { slug: node.slug.current },
    });
  });
};
