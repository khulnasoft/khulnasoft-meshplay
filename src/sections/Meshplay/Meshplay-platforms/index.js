import React, { useState } from "react";
import MeshplayLogo from "../../../assets/images/meshplay/meshplay-logo-complete-white-side.svg";
import { MeshplayPlatformsWrapper } from "./MeshplayPlatforms.style";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Code from "../../../components/CodeBlock";
import dedent from "dedent";
import Apple from "./supported-icons/apple.svg";
import Docker from "./supported-icons/docker_white.svg";
import EKS from "./supported-icons/eks_white.svg";
import GKE from "./supported-icons/gke.svg";
import Helm from "./supported-icons/helm-icon-white.svg";
import HomeBrew from "./supported-icons/homebrew.svg";
import Kubernetes from "./supported-icons/kubernetes_white.svg";
import Linux from "./supported-icons/linux.svg";
import Minikube from "./supported-icons/minikube.svg";
import AKS from "./supported-icons/aks_white.svg";
import WSL2 from "./supported-icons/wsl2.svg";

const supported_platforms = [
  {
    icon: Apple,
    name: "Apple",
    steps: (
      <>
        <h2>MacOS User</h2>
        <h4>Install on Mac using Homebrew:</h4>
        <Code codeString={dedent`brew install meshplayctl
        meshplayctl system start`
        }
        />
      </>
    )
  },
  {
    icon: Docker,
    name: "Docker",
    steps: (
      <>
        <h2>Docker User</h2>
        <Code codeString={dedent`curl -L https://meshplay.khulnasoft.com/install | PLATFORM=docker bash -`
        }
        />
        <h2 style={{ marginTop: "20px" }}>Using meshplayctl</h2>
        <Code codeString={dedent`meshplayctl system context create docker --platform docker --set
        meshplayctl system start`
        }
        />
        <h2 style={{ marginTop: "20px" }}>Docker Extension</h2>
        <Code codeString={dedent`docker extension install meshplay/docker-extension-meshplay:stable-latest`
        }
        />
      </>
    )
  },
  {
    icon: EKS,
    name: "EKS",
    steps: (
      <>
        <h2>AWS Elastic Kubernetes Service User</h2>
        <Code codeString={dedent`meshplayctl system config eks
      meshplayctl system start`}
        />
      </>
    )
  },
  {
    icon: GKE,
    name: "GKE",
    steps: (
      <>
        <h2>Google Kubernetes Engine User</h2>
        <Code codeString={dedent`meshplayctl system config gke --token *PATH_TO_TOKEN*
        ./generate_kubeconfig_gke.sh cluster-admin-sa-gke default
        meshplayctl system start`}
        />
      </>
    )
  },
  {
    icon: Helm,
    name: "Helm",
    steps: (
      <>
        <h2>Helm Chart</h2>
        <p>Install on Kubernetes using Helm:</p>
        <Code codeString={dedent`helm repo add meshplay https://meshplay.khulnasoft.com/charts/
             helm install my-meshplay meshplay/meshplay --version 2.1.2`}
        />
        <h3  style={{ marginTop: "20px" }}>Using kubectl</h3>
        <Code codeString={dedent`kubectl create ns meshplay
        helm repo add meshplay https://meshplay.khulnasoft.com/charts
        helm install meshplay meshplay/meshplay -n meshplay`}
        />
      </>
    )
  },
  {
    icon: HomeBrew,
    name: "HomeBrew",
    steps: (
      <>
        <h2>Brew User</h2>
        <h4>Install on Mac or Linux using Homebrew:</h4>
        <Code codeString={dedent`brew install meshplayctl
        meshplayctl system start`}
        />
      </>
    )
  },
  // {
  //   icon: Kind,
  //   name: "Kind",
  //   steps: (
  //     <>
  //       <h2>Kind User</h2>
  //       <Code codeString={dedent`export KUBECONFIG=$HOME/.kube/config
  //       kubectl create namespace meshplay
  //       helm install meshplay --namespace meshplay install/kubernetes/helm/meshplay`}
  //       />
  //     </>
  //   )
  // },
  {
    icon: Kubernetes,
    name: "Kubernetes",
    steps: (
      <>
        <h2>Kubernetes User</h2>
        <Code codeString={dedent`curl -L https://meshplay.khulnasoft.com/install | PLATFORM=kubernetes bash -
        meshplayctl system start`
        }
        />
      </>
    )
  },
  {
    icon: Linux,
    name: "Linux",
    steps: (
      <>
        <h3>Install Using Kubernetes</h3>
        <Code codeString={dedent`curl -L https://meshplay.khulnasoft.com/install | PLATFORM=kubernetes bash -`}
        />
        <h3 style={{ marginTop: "20px" }}>Install Using Docker</h3>
        <Code codeString={dedent`curl -L https://meshplay.khulnasoft.com/install | PLATFORM=docker bash -` }
        />
      </>
    )
  },
  {
    icon: Minikube,
    name: "Minikube",
    steps: (
      <>
        <h2>Minikube User</h2>
        <Code codeString={dedent`meshplayctl system config minikube -t ~/Downloads/auth.json`
        }
        />
      </>
    )
  },
  {
    icon: AKS,
    name: "AKS",
    steps: (
      <>
        <h2>Azure Kubernetes Service User</h2>
        <p>Install meshplayctl and configure Meshplay to communicate with AKS.</p>
        <Code codeString={dedent`meshplayctl system config aks
        meshplayctl system start`
        }
        />
      </>
    )
  },
  {
    icon: WSL2,
    name: "WSL2",
    steps: (
      <>
        <h2>Windows User</h2>
        <p>
          Download and unzip meshplayctl from the <a href="https://github.com/khulnasoft/meshplay/releases/">Meshplay releases page</a>. Add meshplayctl to your PATH for ease of use. Then, execute:</p>
        <Code codeString={dedent`meshplayctl system start`}
        />
      </>
    )
  }
];

const MeshplayPlatforms = () => {
  const [currentPlatform, setCurrentPlatform] = useState({});
  const [installationStepsHeight,setInstallationStepsHeight] = useState(currentPlatform.name ? "200px" : 0);

  const hasSelectedSamePlatform = (index) => currentPlatform.name === supported_platforms[index].name;

  const changeCurrentPlatformState = (index) => {
    if (currentPlatform.name && hasSelectedSamePlatform(index))
      setCurrentPlatform({});
    else
      setCurrentPlatform(supported_platforms[index]);

  };

  const changeCurrentPlatform = (index) => {
    if (currentPlatform.name && !hasSelectedSamePlatform(index)) {
      changeCurrentPlatformState(index);
      return;
    }
    setTimeout(() => changeCurrentPlatformState(index), 500);
    setInstallationStepsHeight(currentPlatform.name ? 0 : "200px");
  };


  return (
    <MeshplayPlatformsWrapper>
      <div className="content">
        <Row Hcenter className="step-1">
          <p>1 step install to managing service meshes</p>
          <h2><span>Step 1:</span> Choose your platform</h2>
        </Row>
        <Row className="supported-platforms">
          {supported_platforms.map((platform, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={platform.name}>
              <Button
                className={currentPlatform.name && currentPlatform.name === supported_platforms[index].name
                  ? "single-platform single-platform-selected " : "single-platform "}
                onClick={() => changeCurrentPlatform(index)}>
                <img src={platform.icon} alt={platform.name} />
              </Button>
            </Col>
          ))}
        </Row>
        <Container style={{ transition: "height 0.5s ease-in-out", height: (currentPlatform.name === "Docker" || currentPlatform.name === "Helm" || currentPlatform.name === "Linux" )  ? "30rem" : installationStepsHeight, overflow: "hidden" }}>
          <Row className="installation-steps" >
            {currentPlatform.name && currentPlatform.steps}
          </Row>
        </Container>
        <Row Hcenter className="step-2">
          <Col>
            <h2><span>Step 2:</span> Manage your mesh</h2>
            <img src={MeshplayLogo} alt="Meshplay" className="meshplay-logo" />
          </Col>
        </Row>
      </div>
    </MeshplayPlatformsWrapper>
  );

};

export default MeshplayPlatforms;
