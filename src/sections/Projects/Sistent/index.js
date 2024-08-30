import React from "react";
import SistentWrapper from "./sistent.style";
import HandbookCard from "../../../components/HandbookCard";

const SistentHome = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Sistent</h1>
      </div>
      <div className="community-home-subtitle">
        <h3>Design system for KhulnaSoft projects</h3>
      </div>
      <div className="community-home-container">
        <HandbookCard
          title="About"
          description="Ensuring clarity and consistency across projects. Empowering developers with modular components, it defines a unified visual language, fostering a seamless and cohesive user experience."
          to="/projects/sistent/about"
        />
        <HandbookCard
          title="Identity"
          description="Harmonizing KhulnaSoft's visual language. Precision in colors, balanced spacing, and refined typography create a unified, appealing design, enhancing user experience across projects."
          to="/projects/sistent/identity/color"
        />
        <HandbookCard
          title="Components"
          description="Streamlining development with reusable elements for consistent design. Empower projects with modular components, ensuring a unified and efficient user interface across KhulnaSoft initiatives"
          to="/projects/sistent/components"
        />
      </div>
    </SistentWrapper>
  );
};

export default SistentHome;
