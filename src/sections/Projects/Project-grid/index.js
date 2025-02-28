import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
// import ProudMaintainers from "../../../sections/Home/Proud-maintainers";
import { ThemeManagerContext } from "../../../theme/app/ThemeManager";
import { ProjectWrapper } from "./projectGrid.style";
import MeshMapCTA from "../../meshmap-cta";

import extension from "../../../assets/images/docker-extension/docker-extension-meshplay-logo.svg";
import meshplay from "../../../assets/images/meshplay/icon-only/meshplay-logo-light.svg";
import landscape from "../../../assets/images/landscape/khulnasoft_landscape_green.svg";
import imagehub from "../../../assets/images/image-hub/khulnasoft-image-hub.svg";
import smp_dark from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import smp_light from "../../../assets/images/service-mesh-performance/icon/smp-light.svg";
import patterns from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import L5gray from "../../../assets/images/khulnasoft/5 icon/svg/gray/5-gray-60.svg";
import nighthawk from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import meshmap from "../../../assets/images/meshmap/icon-only/meshmap-icon.svg";
import catalog from "../../../assets/images/catalog-icon/catalog.svg";
import sistent from "../../../assets/images/sistent/sistent-logo.svg";
import SoSpecial from "../../Home/So-Special-Section";

const ProjectPage = () => {
  const { isDark } = useContext(ThemeManagerContext);
  return (
    <ProjectWrapper>
      <PageHeader
        className="title"
        title="Cloud Native Management"
        path="/projects"
      />
      <h3>
        for the <img src={L5gray} alt="Layer 5 icon" />
        th layer of distributed systems
      </h3>
      <div className="project-page-wrapper">
        <Container>
          <div className="project__grid">
            <Link to="/projects/sistent" className="project__card sistent">
              <div className="project__card-container project__card-container_one">
                <img src={sistent} alt="Sistent" />
                <h5>Sistent</h5>
              </div>
            </Link>
            <Link to="/service-mesh-landscape" className="project__card one">
              <div className="project__card-container project__card-container_one">
                <img src={landscape} alt="Landscape" />
                <h5>Landscape</h5>
              </div>
            </Link>
            <Link
              to="/cloud-native-management/meshplay"
              className="project__card two"
            >
              <div className="project__card-container project__card-container_meshplay">
                <img src={meshplay} alt="Meshplay" />
                <h5>Meshplay</h5>
              </div>
            </Link>
            <Link to="/projects/image-hub" className="project__card three">
              <div className="project__card-container">
                <img src={imagehub} alt="Image Hub" />
                <h5>Image Hub</h5>
              </div>
            </Link>
            <Link
              to="/cloud-native-management/meshmap"
              className="project__card four"
            >
              <div className="project__card-container">
                <img src={meshmap} alt="MeshMap" />
                <h5>MeshMap</h5>
              </div>
            </Link>
            <Link
              to="/projects/cloud-native-performance"
              className="project__card five"
            >
              <div className="project__card-container">
                <img
                  src={isDark ? smp_light : smp_dark}
                  alt="Cloud Native Performance"
                />
                <h5>Cloud Native Performance</h5>
              </div>
            </Link>
            {/* <Link to="/projects/service-mesh-interface-conformance"
              className="project__card nine">
              <div className="project__card-container project__card-container_meshmap">
                <img src={smi} alt="Service Mesh Interface Conformance" />
                <h5>Service Mesh Interface Conformance</h5>
              </div>
            </Link> */}
            <Link to="/projects/nighthawk" className="project__card six">
              <div className="project__card-container project__card-container_nighthawk">
                <img src={nighthawk} alt="Nighthawk" />
                <h5>NightHawk</h5>
              </div>
            </Link>
            <Link
              to="/docker-extension-meshplay"
              className="project__card seven"
            >
              <div className="project__card-container-seven">
                <Row>
                  <img src={extension} alt="Meshplay Docker Extension" />
                  <h5> Meshplay Docker Extension </h5>
                </Row>
              </div>
            </Link>
            <Link
              to="/learn/service-mesh-books/service-mesh-patterns"
              className="project__card eight"
            >
              <div className="project__card-container">
                <img src={patterns} alt="Cloud Native Patterns" />
                <h5> Cloud Native Patterns</h5>
              </div>
            </Link>
            <Link
              to="/cloud-native-management/catalog"
              className="project__card ten"
            >
              <div className="project__card-container project__card-container_nighthawk">
                <img src={catalog} alt="Catalog" />
                <h5>Catalog</h5>
              </div>
            </Link>
            {/* <Link
              to="/catalog"
              className="project__card ten"
            >
              <div className="project__card-container-ten">
                <Col>
                  <img
                    src={catalog}
                    alt="Catalog"
                  />
                  <h5> Catalog</h5>
                </Col>
              </div>
            </Link> */}
          </div>
          <MeshMapCTA />
        </Container>
      </div>
      {/* <ProudMaintainers /> */}
      <SoSpecial />
    </ProjectWrapper>
  );
};

export default ProjectPage;
