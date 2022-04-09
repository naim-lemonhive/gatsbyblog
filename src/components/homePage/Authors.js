import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import AuthorGrid from '../author/AuthorGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function Authors() {
  const data = useStaticQuery(graphql`
    {
      allSanityAuthor {
        nodes {
          profileImage {
            altText
            asset {
              gatsbyImageData
            }
          }
          slug {
            current
          }
          name
        }
      }
    }
  `);
  const authors = data.allSanityAuthor.nodes;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Authors</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo
        ad provident consectetur quis eaque doloribus et, ducimus earum iste est
        corporis
      </ParagraphText>
      <AuthorGrid authors={authors || []} />
    </FeaturedBlogsStyles>
  );
}

export default Authors;
