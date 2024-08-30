import React from "react";
import { Container } from "../../../reusecore/Layout";
import Hero from "../../../components/Animated-steps-list/hero";
import AnimatedStepsList from "../../../components/Animated-steps-list";
import MeshplayWrapper from "../meshplay.style";
import { Link } from "gatsby";
import Homebrew from "../Meshplay-platforms/supported-icons/homebrew.svg";
import Kubernetes from "../Meshplay-platforms/supported-icons/kubernetes.svg";
import KinD from "../Meshplay-platforms/supported-icons/kind.svg";
import Minikube from "../Meshplay-platforms/supported-icons/minikube.svg";
import EKS from "../Meshplay-platforms/supported-icons/eks.svg";
import Helm from "../Meshplay-platforms/supported-icons/helm-icon-color.webp";
import WSL2 from "../Meshplay-platforms/supported-icons/wsl2.svg";
import GKE from "../Meshplay-platforms/supported-icons/gke.svg";
import Docker from "../Meshplay-platforms/supported-icons/docker.svg";
import OAM from "../../../assets/images/partners/oam.svg";
import ImageHub from "../../../assets/images/image-hub/khulnasoft-image-hub.svg";
import SMP from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
const MeshplayTerminal = () => {
  return (
    <MeshplayWrapper>
      <Container>
        <Hero
          title="Single Step Installation"
          initialdescription="No faster way to start managing any service mesh than with a single step to download, install, and run Meshplay:"
          // links={[
          //   {
          //     text: "Download, Install, and Run Meshplay",
          //     url: "/",
          //     external: false,
          //   },
          // ]}
          code="curl -L https://meshplay.khulnasoft.com/install | PLATFORM=kubernetes bash -"
          enddescription="Lightning fast time to cloud native management."
        />
        <AnimatedStepsList
          terminalHeroState={{
            frameLength: 100,
            loop: true,
            lines: [
              {
                frames: 5,
                code: ["curl -L https://meshplay.khulnasoft.com/install | PLATFORM=kubernetes bash -", "curl -L https://meshplay.khulnasoft.com/install | PLATFORM=kubernetes bash -|"],
              },
            ],
          }}
          steps={[
            {
              name: "Install",
              description: (
                <>
                  <p>
                    Meshplay provides you with a clean, robust, streamlined command-line interface to manage your service meshes:
                  </p>
                  <p>
                    With <code>meshplayctl</code>, not only you can manage your service meshes, but you can also manage their workloads, mesure their performance, verify conformance to service mesh standards. You can also apply patterns.
                  </p>
                  <p>
                    <code>meshplayctl</code> provides support for all of Meshplay's features and many platforms.
                  </p>
                </>
              ),
              logos: [
                {
                  url: Homebrew,
                  alt: "Homebrew",
                },
                {
                  url: Kubernetes,
                  alt: "Kubernetes",
                },
                {
                  url: KinD,
                  alt: "KinD",
                },
                {
                  url: Minikube,
                  alt: "Minikube",
                },
                {
                  url: EKS,
                  alt: "AWS Elastic Kubernetes Service",
                },
                {
                  url: Helm,
                  alt: "Meshplay Helm Chart",
                },
                {
                  url: WSL2,
                  alt: "WSL2",
                },
                {
                  url: GKE,
                  alt: "GKE",
                },
                {
                  url: Docker,
                  alt: "Docker",
                },
              ],
              terminal: {
                frameLength: 100,
                loop: false,
                lines: [
                  {
                    color: "white",
                    frames: 4,
                    code: [
                      "Extracting meshplayctl-latest",
                      "Extracting meshplayctl-latest .",
                      "Extracting meshplayctl-latest . .",
                      "Extracting meshplayctl-latest . . .",
                    ],
                  },
                  {
                    frames: 4,
                    code:
                      "Archive:  /Users/khulnasoft/meshplay.zip",
                    color: "gray",
                  },
                  {
                    frames: 4,
                    code: "inflating: LICENSE",
                    indent: 1,
                    short: true
                  },
                  {
                    frames: 2,
                    code: "inflating: README.md",
                    indent: 1,
                    short: true
                  },
                  {
                    frames: 2,
                    code: "inflating: meshplayctl",
                    indent: 1,
                    short: true
                  },
                  { code: " " },
                  {
                    frames: 2,
                    code: "Installing meshplayctl in /usr/local/bin",
                    color: "gray",
                  },
                  {
                    frames: 2,
                    code: "meshplayctl installed.",
                    color: "gray",
                  },
                  {
                    frames: 8,
                    code: [
                      "downloading manifest files from https://github.com/meshplay/meshplay/tree/v0.6.0/install/deployment_yamls/k8s",
                    ],
                    color: "navy",
                  },
                  {
                    frames: 8,
                    code: [
                      "Starting meshplay",
                      "Starting meshplay           .",
                      "Starting meshplay           ..",
                      "Starting meshplay           ...",
                      "Starting meshplay           ...",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 6,
                    color: "gray",
                    code: [
                      "⠋ Deploying Meshplay on Kubernetes",
                      "⠙ Deploying Meshplay on Kubernetes",
                      "⠹ Deploying Meshplay on Kubernetes",
                      "⠸ Deploying Meshplay on Kubernetes",
                      "⠼ Deploying Meshplay on Kubernetes",
                      "⠴ Deploying Meshplay on Kubernetes",
                      "⠦ Deploying Meshplay on Kubernetes",
                      "⠧ Deploying Meshplay on Kubernetes",
                      "⠇ Deploying Meshplay on Kubernetes",
                      "⠏ Deploying Meshplay on Kubernetes",
                      "⠋ Deploying Meshplay on Kubernetes",
                      "⠙ Deploying Meshplay on Kubernetes",
                      "⠹ Deploying Meshplay on Kubernetes",
                      "⠸ Deploying Meshplay on Kubernetes",
                      "⠼ Deploying Meshplay on Kubernetes",
                      "⠴ Deploying Meshplay on Kubernetes",
                      "⠦ Deploying Meshplay on Kubernetes",
                      "⠧ Deploying Meshplay on Kubernetes",
                      "⠇ Deploying Meshplay on Kubernetes",
                      "⠏ Deploying Meshplay on Kubernetes",
                      "✓ Meshplay deployed on Kubernetes",
                    ],
                  },
                  {
                    frames: 4,
                    code: [
                      "Some Meshplay pods have not come up yet.",
                      "Some Meshplay pods have not come up yet..",
                      "Some Meshplay pods have not come up yet...",
                      "Pods are online!",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 3,
                    code: [
                      "Opening Meshplay (https://localhost:9081) on your browser...",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 1,
                    code: "\nManagement plane ready at: https://meshplay.khulnasoft.com/manage",
                    color: "green",
                  },
                ],
              },
            },
            {
              name: "Patterns",
              description: (
                <>
                  <p>
                    Meshplay supports cloud native application patterns using a mesh-agnostic and application-holistic approach: patternfiles.
                  </p>
                  <p>
                    Patternfiles stems from multiple open needs, one of which is the desire to define a common practice of both configuring and operating service mesh functionality in a single, universal file.
                  </p>
                  <p>
                    With a patternfile, you can capture service mesh behavior in a single file. You can access service mesh-specific differentiation while keeping your patterns short and simple.
                  </p>
                </>
              ),
              logos: [
                {
                  url: OAM,
                  alt: "Open Application Model",
                },
                {
                  url: ImageHub,
                  alt: "Image Hub",
                }
              ],
              terminal: {
                frameLength: 100,
                loop: false,
                lines: [
                  {
                    color: "white",
                    frames: 4,
                    code: [
                      "» Deploying pattern",
                      "» Deploying pattern .",
                      "» Deploying pattern . .",
                      "» Deploying pattern . . .",
                    ],
                  },
                  {
                    frames: 5,
                    code:
                      "✓ Meshplay connected to Kubernetes at https://kubernetes.example.com:6443",
                  },
                  {
                    frames: 2,
                    color: "gray",
                    code: [
                      "⠋ Preparing pattern deployment",
                      "⠙ Preparing pattern deployment",
                      "⠹ Preparing pattern deployment",
                      "⠸ Preparing pattern deployment",
                      "⠼ Preparing pattern deployment",
                      "⠴ Preparing pattern deployment",
                      "⠦ Preparing pattern deployment",
                      "⠧ Preparing pattern deployment",
                      "⠇ Preparing pattern deployment",
                      "⠏ Preparing pattern deployment",
                      "⠋ Preparing pattern deployment",
                      "⠙ Preparing pattern deployment",
                      "⠹ Preparing pattern deployment",
                      "⠸ Preparing pattern deployment",
                      "⠼ Preparing pattern deployment",
                      "⠴ Preparing pattern deployment",
                      "⠦ Preparing pattern deployment",
                      "⠧ Preparing pattern deployment",
                      "⠇ Preparing pattern deployment",
                      "⠏ Preparing pattern deployment",
                      "✓ Pattern deployed",
                    ],
                  },
                  {
                    frames: 2,
                    color: "gray",
                    code: [
                      "⠋ Waiting on pattern to become available: 1/1/0",
                      "⠙ Waiting on pattern to become available: 1/1/0",
                      "⠹ Waiting on pattern to become available: 1/1/0",
                      "⠸ Waiting on pattern to become available: 1/1/0",
                      "⠼ Waiting on pattern to become available: 1/1/0",
                      "⠴ Waiting on pattern to become available: 1/1/0",
                      "⠦ Waiting on pattern to become available: 1/1/0",
                      "⠧ Waiting on pattern to become available: 1/1/0",
                      "⠇ Waiting on pattern to become available: 1/1/0",
                      "⠏ Waiting on pattern to become available: 1/1/0",
                      "⠋ Waiting on pattern to become available: 1/1/0",
                      "⠙ Waiting on pattern to become available: 1/1/0",
                      "⠹ Waiting on pattern to become available: 1/1/0",
                      "⠸ Waiting on pattern to become available: 1/1/0",
                      "⠼ Waiting on pattern to become available: 1/1/0",
                      "⠴ Waiting on pattern to become available: 1/1/0",
                      "⠦ Waiting on pattern to become available: 1/1/0",
                      "⠧ Waiting on pattern to become available: 1/1/0",
                      "⠇ Waiting on pattern to become available: 1/1/0",
                      "⠏ Waiting on pattern to become available: 1/1/0",
                      "✓ Pattern successfully rolled out!",
                    ],
                  },
                  { code: "" },
                  {
                    frames: 2,
                    code:
                      "\nYour cloud native application pattern deployment was successful!",
                    color: "gray",
                  },
                  { code: "" },
                  {
                    frames: 1,
                    code:
                      "\nDeployment URL: https://meshplay.local/patterns",
                    color: "green",
                  },
                ],
              },
            },
            {
              name: "Performance",
              description: (
                <>
                  <p>
                    Meshplay provides service mesh and application performance measurement and management.
                  </p>
                  <p>
                    Meshplay natively supports the <Link to="/projects/cloud-native-performance">Service Mesh Performance</Link> (SMP) specification.
                  </p>
                  <p>
                    Use performance test profiles to schedule and continuously verify your service mesh is performing in accordance with your SLOs.
                  </p>
                </>
              ),
              logos: [
                {
                  url: SMP,
                  alt: "Service Mesh Performance",
                }
              ],
              terminal: {
                frameLength: 100,
                loop: false,
                lines: [
                  {
                    frames: 1,
                    color: "white",
                    code: [
                      "» Analyzing",
                      "» Analyzing .",
                      "» Analyzing . .",
                      "» Analyzing . . .",
                    ],
                  },
                  {
                    frames: 2,
                    code:
                      "✓ Meshplay connected to Kubernetes at https://kubernetes.example.com:6443",
                  },
                  {
                    frames: 2,
                    color: "gray",
                    code: [
                      "⠋ Analyzing service mesh",
                      "⠙ Analyzing service mesh",
                      "⠹ Analyzing service mesh",
                      "⠸ Analyzing service mesh",
                      "⠼ Analyzing service mesh",
                      "⠴ Analyzing service mesh",
                      "⠦ Analyzing service mesh",
                      "⠧ Analyzing service mesh",
                      "⠇ Analyzing service mesh",
                      "⠏ Analyzing service mesh",
                      "⠋ Analyzing service mesh",
                      "⠙ Analyzing service mesh",
                      "⠹ Analyzing service mesh",
                      "⠸ Analyzing service mesh",
                      "⠼ Analyzing service mesh",
                      "⠴ Analyzing service mesh",
                      "⠦ Analyzing service mesh",
                      "⠧ Analyzing service mesh",
                      "⠇ Analyzing service mesh",
                      "⠏ Analyzing service mesh",
                      "✓ Analysis complete.",
                    ],
                  },
                  { code: "" },
                  {
                    frames: 2,
                    color: "white",
                    code: [
                      "» Preparing recommendations",
                      "» Preparing recommendations .",
                      "» Preparing recommendations . .",
                      "» Preparing recommendations . . .",
                    ],
                  },
                  {
                    frames: 2,
                    code: "  Patterns: 01EJCSFNDDD15P2BXBW2KCYVB2",
                    color: "navy",
                  },
                  { code: "" },
                  {
                    frames: 2,
                    code: "\nBest practice recommendations ready!",
                    color: "green",
                  },
                  { code: "" },
                  {
                    frames: 1,
                    code: "\nRecommendations URL: https://meshplay.khulnasoft.com/patterns",
                    color: "green",
                  },
                ],
              },
            },
          ]}
        />
      </Container>
    </MeshplayWrapper>
  );
};

export default MeshplayTerminal;
