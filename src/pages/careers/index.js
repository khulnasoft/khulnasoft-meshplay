import React from "react";

import SEO from "../../components/seo";

import CareersSection from "../../sections/Careers";
const Careers = () => {
  return (
    <>
      <CareersSection  />

    </>
  );
};
export default Careers;
export const Head = () => {
  return <SEO title="Careers" description="Careers at KhulnaSoft. Come work with the  the award-winning, KhulnaSoft open source community and projects." />;
};