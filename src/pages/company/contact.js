import React from "react";

import SEO from "../../components/seo";

import ContactPage from "../../sections/Company/Contact";
import { Script } from "gatsby";
const Contact = () => {
  return (
    <>
      <ContactPage />

    </>
  );
};
export default Contact;
export const Head = () => {
  return <SEO title="Contact" description="Contact KhulnaSoft for help managing your cloud native infrastructre and apps. KhulnaSoft is the maker of Meshplay and service mesh standards.">
    <Script src="https://v8hx52m354g0.statuspage.io/embed/script.js" />
  </SEO>;
};