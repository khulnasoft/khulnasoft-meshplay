import React from "react";
import { DockerMeshplayWrapper } from "./dockerMeshplay.style";
import { Row, Col } from "../../reusecore/Layout";
import docker from "../../assets/images/socialIcons/docker_white.svg";
import meshplay from "../../assets/images/meshplay/icon-only/meshplay-logo-white.svg";
import DockerExtensionMeshplay from "./docker-extension-meshplay";
import MeshMapCTA from "../meshmap-cta";

const MeshplayDockerPage = () => {
  return (
    <DockerMeshplayWrapper>
      <div className="page-header-section">
        <Row>
          <Col md={6} sm={12}>
            <h1>Docker Extension for Meshplay</h1>
          </Col>
          <Col md={3} sm={12}>
            <img src={meshplay} alt="Meshplay" className="meshplayIcon"/>
          </Col>
          <Col md={3} sm={12}>
            <img src={docker} alt="Docker" className="dockerIcon"/>
          </Col>
        </Row>
      </div>
      <DockerExtensionMeshplay />
      <MeshMapCTA />
    </DockerMeshplayWrapper>
  );
};

export default MeshplayDockerPage;