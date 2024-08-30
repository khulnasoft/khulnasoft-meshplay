import React from "react";

import SEO from "../../../components/seo";
import MeshplayTerminal from "../../../sections/Meshplay/Meshplay-terminal";
import loadable from "@loadable/component";
const MeshplayPlatforms = loadable(() => import ("../../../sections/Meshplay/Meshplay-platforms"));
const MeshplayManageMesh = loadable(() => import ("../../../sections/Meshplay/Meshplay-mange-mesh"));
const MeshplayQuotes = loadable(() => import ("../../../sections/Meshplay/Meshplay-quotes"));
const MeshplayMainPage = () => {
  return (
    <>
      <MeshplayTerminal />
      <MeshplayPlatforms />
      <MeshplayManageMesh />
      <MeshplayQuotes />

    </>
  );
};
export default MeshplayMainPage;
export const Head = () => {
  return <SEO title="Meshplay Getting Started"
    description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
    image="/images/meshplay-logo-dark-text.webp" />;
};