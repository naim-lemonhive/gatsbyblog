import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from '../typography/ParagraphText';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';

function AuthorItem({ name, slug, profileImage, bio }) {
  return (
    <AuthorItemStyles className="author-item" to={slug.current}>
      <GatsbyImage
        image={profileImage.asset.gatsbyImageData}
        alt={profileImage.altText}
        className="profileImage"
      />
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
