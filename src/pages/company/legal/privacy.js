import React from "react";

import SEO from "../../../components/seo";

import CompanyPrivacy from "../../../sections/Company/Legal/privacy";
const Privacy = () => {
  return (
    <>
      <CompanyPrivacy />

    </>
  );
};
export default Privacy;
export const Head = () => {
  return <SEO title="Privacy" description="Contact KhulnaSoft for help with operating a service mesh.
  KhulnaSoft is the makers of Meshplay and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world." />;
};