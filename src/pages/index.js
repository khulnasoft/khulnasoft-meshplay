import React from "react";

import SEO from "../components/seo";
import Partners from "../sections/Home/Partners-home";
import Integrations from "../sections/Home/Playground-home";
import Banner from "../sections/Home/Banner";
import loadable from "@loadable/component";
import CornerPopup from "../components/Corner-popup";
const CloudNativeManagement = loadable(() => import("../sections/Home/CloudNativeManagement"));
const SubscribeSection = loadable(() => import("../sections/subscribe/subscribe"));
// const ServiceMeshFocussed = loadable(() => import("../sections/Home/Service-mesh-focussed"));
import CaseStudyBanner from "../components/Case-study-banner";

// const EngineerEnabler = loadable(() => import("../sections/Home/Engineer-enabler"));
// const SoSpecial = loadable(() => import("../sections/Home/So-Special-Section"));
const MeshplayIntegration = loadable(() => import("../sections/Meshplay/Meshplay-integrations"));
const FeaturesContainer = loadable(() => import("../sections/Home/FeaturesContainer"));

// import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";


const IndexPage = () => {
  return (
    <>
      <Banner />
      <FeaturesContainer />
      <Integrations />
      <Partners />
      <CornerPopup/>
      {/* <ServiceMeshManagement /> */}
      <CloudNativeManagement />
      <MeshplayIntegration  />
      {/* <Statement /> */}
      {/* <AppScreens /> */}
      {/* <Pricing /> */}
      {/* <Testimonial /> */}
      {/* <Getapp /> */}
      {/* <News /> */}
      {/* <Faq category = "all"/> */}
      {/*<ContactCard />*/}
      {/* <SoSpecial  /> */}
      {/* <CloudNativeLeaders /> */}
      <CaseStudyBanner/>
      {/* <ServiceMeshFocussed bookName={"enterprise-path"} /> */}
      {/* <EngineerEnabler /> */}
      <SubscribeSection />

    </>
  );
};
export const Head = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "KhulnaSoft",
    "url": "https://khulnasoft.com/",
    "logo": "https://khulnasoft.com/images/khulnasoft-gradient.webp",
    "sameAs": [
      "https://twitter.com/khulnasoft",
      "https://www.linkedin.com/company/khulnasoft/",
      "https://github.com/khulnasoft",
      "https://www.youtube.com/c/KhulnaSoft?sub_confirmation=1"
    ]
  };
  return (
    <SEO title="KhulnaSoft" description="An empowerer of engineers, KhulnaSoft helps you extract more value from your infrastructure. Creator and maintainer of cloud native standards. Maker of Meshplay, the cloud native manager."
      schemaMarkup={schema} />
  );
};
export default IndexPage;
