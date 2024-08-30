import React from "react";

import SEO from "../../components/seo";

import InternshipPage from "../../sections/Careers/Careers-Internship-grid";
const Internships = () => {
  return (
    <>
      <InternshipPage />

    </>
  );
};
export default Internships;
export const Head = () => {
  return  <SEO title="Internship, Part-time, and Full-time Opportunities with KhulnaSoft" description="Engage, Learn, Share. Join the award-winning, KhulnaSoft open source community and projects." />;
};
