import React from "react";

import SEO from "../../../components/seo";

import Conduct from "../../../sections/Company/Legal/code-of-conduct";
const CodeOfConduct = () => {
  return (
    <>
      <Conduct />

    </>
  );
};
export default CodeOfConduct;
export const Head = () => {
  return <SEO title="Code of Conduct" description="Contact KhulnaSoft for help with operating platform engineering. KhulnaSoft is the makers of Meshplay and cloud native application and infrastructure management software for engineers who expect more from their infrastructure." />;
};