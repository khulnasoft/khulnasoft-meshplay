import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import MeshSectionWrapper from "./ServiceMesh.style";
import SectionTitle from "../../../reusecore/SectionTitle";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const MeshMap = "../../../assets/images/homePage-images/meshmap.webp";

const ServiceMeshManagement = () => {
  return (
    <MeshSectionWrapper>
      <Container fullWidthSM>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={false}
            UniWidth="75%"
          >
            <h4 className="title">Meshplay is</h4>
            <h2 className="big-title">
              The <span>cloud native management platform</span>
              {/* <span className="strikethrough">plane</span> */}
            </h2>
          </SectionTitle>

          <Col xs={12} sm={12} md={6}>
            <Link to="/cloud-native-management/meshplay">
              <StaticImage className="mesh-image" alt="Meshplay - the cloud native management plane" src={MeshMap} />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="side">
              <div className="side-text">
                The <span>extensible</span> cloud native manager.
              </div>
              <div className="description">
                <p>An extensible platform, Meshplay comes packed with <Link to="/cloud-native-management/meshplay/integrations">integrations</Link> for Prometheus, Grafana, Jaeger, CloudEvents, and support for WebAssembly filters for Envoy.</p>
                <p>
                  Meshplay is your microservices manager. With extension points throughout, Meshplay offers users and integrators the ability to extend and customize platform functionality.
                </p>
              </div>
              <div className="backBtn">
                <Link to="/cloud-native-management/meshplay">
                  <p>Learn More <span><IoIosArrowForward className="icon" /></span></p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MeshSectionWrapper>
  );
};

export default ServiceMeshManagement;
