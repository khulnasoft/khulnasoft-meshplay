import React from "react";

import SEO from "../../components/seo";
import Nighthawk from "../../sections/Projects/Nighthawk";

import Subscribe from "../../sections/subscribe/subscribe";
const NighthawkPage = () => {
  return (
    <>
      <Nighthawk  />
      <Subscribe />

    </>
  );
};
export default NighthawkPage;
export const Head = () => {
  return <SEO title="Nighthawk"
    description="KhulnaSoft is the maker of Meshplay,  Service Mesh Performance (SMP), Nighthawk and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of cloud native projects and their maintainers in the world.
            Contact KhulnaSoft for help with operating a service mesh."
  />;
};