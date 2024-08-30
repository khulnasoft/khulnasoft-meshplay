import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { GiClockwork } from "@react-icons/all-files/gi/GiClockwork";

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import FeaturesTable from "./Features-Col";

import meshplayDemo from "../../assets/video/meshplay/meshplay-full-perf-720p.mp4";
import DockerExtensionCTA from "../Docker-Meshplay/docker-extension-CTA";

import MeshplayWrapper from "./meshplay.style";
import FeaturesSection from "./Features-section";
import Features from "./Meshplay-features";
import InlineQuotes from "../../components/Inline-quotes";
import Maximiliano from "../../collections/members/maximiliano-churichi/Maximiliano-Churichi.webp";
import Nic from "../../collections/members/nicholas-jackson/nic-jackson.webp";

const MeshplayPage = () => {
  return (
    <MeshplayWrapper>
      <Container>
        <div className="info">
          <Row className="description">
            <Col className="desc-text" lg={6} md={6} sm={10} xs={8}>
              <h1 className="heading-1"> Wrangle your infrastructure</h1>
              <h1 className="heading-2"> <span className="heading-2"> collaboratively</span></h1>
              <p className="desc-p">
                {/* Meshplay is the cloud native manager. <br /> */}
                Confidently design, deploy, and operate your infrastructure and workloads with Meshplay.
              </p>
              <Button primary className="banner-btn" title="How Meshplay Works"
                url="/cloud-native-management/meshplay/operating-cloud-native-infra">
                <GiClockwork size={21} className="button-icon" />
              </Button>
              <Button secondary className="banner-btn" title="Run Meshplay"
                url="/cloud-native-management/meshplay/getting-started">
                <FiDownloadCloud size={21} className="button-icon" />
              </Button>
            </Col>
            <Col lg={6} md={6} className="meshplay-hero-img desc-text">
              <video autoPlay muted loop controls className="meshplay-video" >
                <source src={meshplayDemo} type="video/mp4" />
              </video>
              {/* <img className="meshplay-sup-img" src={meshplayFullStack} alt="Meshplay the multi-mesh manager" /> */}
              <Button primary className="banner-btn align-btn"
                title="Star the Repository" url="https://github.com/meshplay/meshplay" external="true">
                <FaGithub size={21} className="button-icon" />
              </Button>
            </Col>
          </Row>
        </div>
        <FeaturesTable />
      </Container>
      <FeaturesSection />
      <Container>
        <InlineQuotes
          quote="Meshplay is the perfect tool for ensuring that your applications are optimally configured and performing well; it also gives you a fantastic visual insight into what can be a large amount of textual configuration"
          person="Nic Jackson"
          title="Principal Developer Advocate at HashiCorp"
          image={Nic} />
        <div className="callout">
          <h1> Manage your clusters with features you won't find anywhere else.</h1>
        </div>
      </Container>
      <Features />
      <Container>
        <DockerExtensionCTA />
        <InlineQuotes
          quote="The Meshplay Extension transforms Docker Desktop into a powerful load generation utility, conveniently enabling me to deploy and configure any cloud native infrastructure with a click of the button and invoke and control load-based performance tests from my desktop."
          person="Maximiliano Churichi"
          title="Software Engineer at HPE"
          image={Maximiliano} />
      </Container>
    </MeshplayWrapper>

  );
};

export default MeshplayPage;
