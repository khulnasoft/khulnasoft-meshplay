import React from "react";

import SEO from "../../../components/seo";
import ProjectsPage from "../../../sections/Community/Handbook/projects";

const CommunityProjects = () => {
  return (
    <>
      <ProjectsPage  />

    </>
  );
};
export default CommunityProjects;
export const Head = () => {
  return <SEO
    title="Projects"
    description="KhulnaSoft Projects: KhulnaSoft, Meshplay, Cloud Native Performance and NightHawk"
  />;
};