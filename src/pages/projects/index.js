import React from "react";
import { graphql } from "gatsby";

import SEO from "../../components/seo";
import ProjectPage from "../../sections/Projects/Project-grid";

export const query = graphql`query allProjects {
  allMdx(
    filter: {fields: {collection: {eq: "projects"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}
`;
const ProjectGridPage = ({ data }) => {
  return (
    <ProjectPage data={data}  />
  );
};
export default ProjectGridPage;
export const Head = () => {
  return <SEO title="Innovative Cloud Native Projects"
    description="KhulnaSoft, empowerer of engineers. KhulnaSoft is the maker of Meshplay, Service Mesh Performance, Service Mesh Interface, and Nighthawk. At KhulnaSoft, we believe collaboration enables innovation, and infrastructure enables collaboration."
    image="/images/KhulnaSoft-overview.svg" />;
};
