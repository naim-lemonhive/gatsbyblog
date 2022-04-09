import * as React from 'react';
import Authors from '../components/homePage/Authors';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import SEO from '../components/seo';
// markup
const IndexPage = () => (
  <>
    <SEO title="Home" description="here is custom description" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <Authors />
      {/* <TopCategories /> */}
    </div>
  </>
);

export default IndexPage;
