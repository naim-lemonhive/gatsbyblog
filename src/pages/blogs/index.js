import * as React from 'react';
import AllBlogs from '../../components/blog/AllBlog';
import SEO from '../../components/seo';
// markup
const BlogPage = () => (
  <>
    <SEO title="Blogs" description="here is custom description" />
    <div className="container">
      <AllBlogs />
    </div>
  </>
);

export default BlogPage;
