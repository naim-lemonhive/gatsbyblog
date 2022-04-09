import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 100px auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  .author {
    font-size: 2rem;
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    font-size: 1.5rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
`;
