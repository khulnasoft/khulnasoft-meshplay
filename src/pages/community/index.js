import React from "react";

import SEO from "../../components/seo";

import Community from "../../sections/Community";
const CommunityIndex = () => {
  return (
    <>
      <Community  />

    </>
  );
};
export default CommunityIndex;
export const Head = () => {
  return  <SEO title="Award-winning Open Source Community"
    description="The Cloud Native Management Community at KhulnaSoft - Learn, Share, Engage.
           Join the award-winning open source community - the warmest and most welcoming open source community around."
  />;
};