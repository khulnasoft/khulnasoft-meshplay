import React from "react";

import SEO from "../../components/seo";
import Brand from "../../sections/Company/Brand";

import SimpleReactLightbox from "simple-react-lightbox";
const BrandPage = () => {
  return (
    <>
      <SimpleReactLightbox>
        <Brand />
      </SimpleReactLightbox>

    </>
  );
};
export default BrandPage;
export const Head = () => {
  return <SEO title="Brand Kits" description="KhulnaSoft brand kits with logos, color schemes, and approved usage of Meshplay, Image Hub, and other KhulnaSoft projects" />;
};