import React from "react";

import SEO from "../../components/seo";
import AwsDiagram from "../../sections/AWS-Diagram";

const Aws = () => {
  return (
    <>
      <AwsDiagram />
    </>
  );
};
export default Aws;
export const Head = () => {
  return <SEO title="AWS Architecture Diagram"
    description="Create your own AWS architecture diagrams with Meshmap."
    image="/images/meshplay-logo-dark-text.webp" />;
};