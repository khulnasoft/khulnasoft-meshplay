import React from "react";
import ArchitectureDiagram from "../../../sections/ArchitectureDiagram";
import ServiceMeshFocused from "../../../sections/Home/Service-mesh-focussed";
import SEO from "../../../components/seo";
const ArchitectureDiagramPage = () => {
  return (
    <>
      <ArchitectureDiagram/>
      <ServiceMeshFocused bookName={"enterprise-path"} />
    </>
  );
};

export default ArchitectureDiagramPage;
export const Head = () => {
  return <SEO title="Design Architecture Diagram | KhulnaSoft"
    description="Create architecture diagram for AWS, GCP or Kubernetes"
    image="/images/meshplay-logo-dark-text.webp" />;
};