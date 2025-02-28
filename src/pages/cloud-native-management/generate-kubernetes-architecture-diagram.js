import React from "react";

import SEO from "../../components/seo";
import KubernetesDiagram from "../../sections/Kubernetes-Diagram";

const Kubernetes = () => {
  return (
    <>
      <KubernetesDiagram />
    </>
  );
};
export default Kubernetes;
export const Head = () => {
  return <SEO title="Kubernetes Architecture Diagram"
    description="Create your own Kubernetes diagrams with Meshmap."
    image="/images/meshplay-logo-dark-text.webp" />;
};