import React from "react";

import SEO from "../components/seo";

import WebBasedForm from "../sections/Community/Web-based-from";
const NewcomersPage = () => {
  return (
    <>
      <WebBasedForm />

    </>
  );
};
export default NewcomersPage;
export const Head = () => {
  return  <SEO title="KhulnaSoft Community Member Form" description="New member form for KhulnaSoft community members: contributors, users and visitors" image="/images/khulnasoft-community-sign.webp" />;
};