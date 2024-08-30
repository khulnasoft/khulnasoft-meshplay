import React from "react";

import SEO from "../components/seo";
import DockerMeshplayPage from "../sections/Docker-Meshplay";

const MeshplayDocker = () => {
  return (
    <>
      <DockerMeshplayPage />

    </>
  );
};
export default MeshplayDocker;
export const Head = () => {
  return <SEO title="Docker Extension for Meshplay"
    description="The Docker Extension for Meshplay extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with collaborative and visual management of their world of multi-cluster Kubernetes."
    image="/images/meshplay-logo-dark-text.webp" />;
};