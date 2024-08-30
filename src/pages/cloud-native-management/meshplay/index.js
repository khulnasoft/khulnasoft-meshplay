import React from "react";

import SEO from "../../../components/seo";
import MeshplayPage from "../../../sections/Meshplay";

const Meshplay = () => {
  return (
    <>
      <MeshplayPage />
    </>
  );
};
export default Meshplay;
export const Head = () => {
  return <SEO title="Meshplay" description="Lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshplay-logo-dark-text.webp" />;
};