import React from "react";
import SetupPreReqWrapper from "./setup-pre-req.style";
import { BsTerminalFill } from "@react-icons/all-files/bs/BsTerminalFill";
import { StaticImage } from "gatsby-plugin-image";

const meshplay = "../../../assets/images/meshplay/icon-only/meshplay-logo-light.svg";
const meshplayOperator = "../../../assets/images/meshplay-operator/meshplay-operator-dark.svg";


const SetupPreReq = () => (
  <SetupPreReqWrapper>
    <div className="get-started-desc" id="pre-requisites">
      <h2>Prerequisites</h2>
      <p>In this learning path, we will be using Meshplay as the management plane to manage the service meshes. Meshplay, collaborative Kubernetes manager</p>
    </div>
    <div className="container-card" id="Set up">
      <a href="/cloud-native-management/meshplay"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Install Meshplay</h2>
            <BsTerminalFill />
          </div>
          <p>Meshplay provides you with a clean, robust, streamlined command-line interface to manage your service meshes: 'meshplayctl'.</p>
        </div>
      </a>
      <a href="/cloud-native-management/meshplay/getting-started" id="Run Meshplay"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Run Meshplay</h2>
            <StaticImage src={meshplay} alt="Meshplay" className="setup-imgs" />
          </div>
          <p>With 'meshplayctl', not only you can manage your service meshes, but also manage their workloads, measure their performance, verify conformance to service mesh standards.</p>
        </div>
      </a>
      <a href="/cloud-native-management/meshplay/operating-cloud-native-infra" id="Manage Meshplay"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Manage Meshplay</h2>
            <StaticImage src={meshplayOperator} alt="Meshplay Operator" className="setup-imgs" />
          </div>
          <p>Wrangle your mesh with Meshplay Operator and MeshSync.</p>
        </div>
      </a>
    </div>
  </SetupPreReqWrapper>
);

export default SetupPreReq;
