import React from "react";

import SEO from "../../../components/seo";
import MeshplayOperatorPage from "../../../sections/Meshplay/meshplay-operator";

const MeshplayOperator = () => {
  return (
    <>
      <MeshplayOperatorPage />

    </>
  );
};
export default MeshplayOperator;
export const Head = () => {
  return <SEO title="Meshplay Operator"
    description="Meshplay Operator is the multi-service mesh operator that manages MeshSync and it’s messaging broker."
    image="/images/meshplay-operator.webp" />;
};