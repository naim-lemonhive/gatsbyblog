import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import SEO from '../components/seo';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';

export default function BlogDetails(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const blogData = props.data.allSanityBlog.nodes[0];
  console.log(blogData);
  return (
    <div>
      <SEO title="Blogs details" description="here is custom description" />
      <SingleBlogStyles>
        <div className="title">{blogData.title}</div>
        <GatsbyImage
          image={blogData.coverImage.asset.gatsbyImageData}
          alt={blogData.title}
          className="blog-cover-image"
        />
        <div className="publishedAt">
          {blogData.publishedAt
            ? format(new Date(blogData.publishedAt), 'p, dd/MM/yyyy')
            : ''}
        </div>
        <div className="author">{blogData.author.name}</div>
        <div className="body">
          {blogData.blogBody.map((ele) =>
            ele.children.map((textData) => <p>{textData.text}</p>)
          )}
        </div>
      </SingleBlogStyles>
    </div>
  );
}

export const query = graphql`
  query BlogPage($slug: String) {
    allSanityBlog(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        blogBody {
          children {
            text
          }
        }
        author {
          name
        }
        categories {
          title
        }
        title
        publishedAt
        coverImage {
          asset {
            gatsbyImageData
            altText
          }
        }
      }
    }
  }
`;
