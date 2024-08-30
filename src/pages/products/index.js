import React from "react";
import SEO from "../../components/seo";
import ProductPage from "../../sections/Products";

const Products = () => {
  return (
    <>
      <ProductPage  />
    </>
  );
};
export default Products;
export const Head = () => {
  return <SEO title="Kubernetes management made collaborative"
    description="KhulnaSoft, empowerer of engineers. At KhulnaSoft, we believe collaboration enables innovation, and infrastructure enables collaboration."
    image="/images/KhulnaSoft-overview.svg" />;
};
