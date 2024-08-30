import React from "react";

import SEO from "../../../components/seo";
import GitOps from "../../../sections/gitops";

const Meshplay = () => {
  return (
    <>
      <GitOps />
    </>
  );
};
export default Meshplay;
export const Head = () => {
  return  <SEO title="GitOps with Meshplay"
    description="GitOps, lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshplay-logo-dark-text.png" />;
};