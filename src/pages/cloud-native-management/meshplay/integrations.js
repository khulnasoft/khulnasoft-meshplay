import React from "react";

import SEO from "../../../components/seo";

import MeshplayIntegration from "../../../sections/Meshplay/Meshplay-integrations";
const Integrations = () => {
  return (
    <>
      <MeshplayIntegration />

    </>
  );
};
export default Integrations;
export const Head = () => {
  return <SEO title="Meshplay Integrations"
    description="A collection of supported Meshplay Integrations."
  />;
};