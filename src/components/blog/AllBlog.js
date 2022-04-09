import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from './BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function AllBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog {
        nodes {
          author {
            name
          }
          categories {
            title
            slug {
              current
            }
          }
          title
          publishedAt
          coverImage {
            asset {
              gatsbyImageData
              altText
            }
          }
          blogBody {
            children {
              text
            }
          }
          slug {
            current
          }
        }
      }
    }
  `);
  const allBlogs = data.allSanityBlog.nodes;
  console.log(allBlogs[0]);
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>All Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo
        ad provident consectetur quis eaque doloribus et, ducimus earum iste est
        corporis
      </ParagraphText>
      <BlogGrid blogs={allBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default AllBlogs;
