import React from "react";

import SEO from "../../components/seo";
import SMIPage from "../../sections/Projects/SMI";

const SMI = () => {
  return (
    <>
      <SMIPage />

    </>
  );
};
export default SMI;
export const Head = () => {
  return  <SEO title="Service Mesh Interface (SMI)"
    description="KhulnaSoft is the maker of Meshplay and Service Mesh Performance (SMP) and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of cloud native projects and their maintainers in the world.
            Contact KhulnaSoft for help with operating a service mesh."
    image="/images/servicemeshinterface-icon-color.webp" />;
};