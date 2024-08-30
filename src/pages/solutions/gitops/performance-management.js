import React from "react";

import SEO from "../../../components/seo";
import PerformanceManagementPage from "../../../sections/gitops/PerformanceManagementPage";

export default PerformanceManagementPage;

export const Head = () => {
  // TODO Change this
  return  <SEO title="GitOps with Meshplay"
    description="GitOps, lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshplay-logo-dark-text.png" />;
};