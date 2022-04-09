import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({ authors }) {
  console.log(authors);
  return (
    <AuthorGridStyles>
      {authors &&
        authors.length > 0 &&
        authors.map((item) => (
          <AuthorItem
            key={item.slug.current}
            name={item.name}
            slug={item.slug}
            profileImage={item.profileImage}
          />
        ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;
