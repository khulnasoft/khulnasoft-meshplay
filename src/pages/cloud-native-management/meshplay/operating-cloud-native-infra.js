import React from "react";

import SEO from "../../../components/seo";
import HowMeshplayWorksHero from "../../../sections/Meshplay/How-meshplay-works/hero";

import MeshplayLogo from "../../../assets/images/meshplay/icon-only/meshplay-logo-light.svg";
import VisualTopology from "../../../sections/Meshplay/How-meshplay-works/images/visual-topology.svg";
import MeshplayOperatorLogo from "../../../sections/Meshplay/How-meshplay-works/images/meshplay-operator-dark.svg";
import Smi from "../../../assets/images/app/projects/smi.svg";
import WebA from "../../../sections/Meshplay/How-meshplay-works/images/webassembly_logo.svg";
import SMP from "../../../sections/Meshplay/How-meshplay-works/images/smp-dark-text.webp";
import { ReactComponent as GithubLogo } from "../../../assets/images/socialIcons/github_colorMode.svg";
import loadable from "@loadable/component";
const HowMeshplayWorks = loadable(() =>
  import("../../../sections/Meshplay/How-meshplay-works")
);
const HowMeshplayWorksSpecs = loadable(() =>
  import("../../../sections/Meshplay/How-meshplay-works/specs")
);

const OperatingServiceMeshes = () => {
  return (
    <>
      <HowMeshplayWorksHero />
      <HowMeshplayWorks
        title="How Meshplay Manages Cloud Native Infra"
        description="As the cloud native manager, Meshplay offers support for more adapters than any other project or product in the world. Adapters in Meshplay are used to extend its management capabilities."
        features={[
          {
            title: "GitOps: Configuration as Visual Design",
            icon: <GithubLogo alt="title" />,
            description: (
              <p>
                GitOps is a way to define workflows for declarative
                configuration using Git. Meshplay greatly simplifies configuring
                and managing cloud native infrastructure at-scale across
                multiple clusters with a git-integrated experience.
              </p>
            ),
          },
          {
            title: "Adapter is extend rich control over infra",
            icon: MeshplayLogo,
            description: (
              <div>
                <p>
                  Adapters allow Meshplay to interface with the different
                  Kuberentes-based infrastructure, exposing the tools'
                  differentiated value to users. Care is taken in each Meshplay
                  Adapter to expose the unique value of each component.{" "}
                </p>
                <p>
                  Consequently, each Meshplay Adapter is not equally capable just
                  as each Kubernetes infrastucture tool is not equally capable
                  as another.
                </p>
              </div>
            ),
          },
          {
            title: "MeshMap",
            icon: VisualTopology,
            description: (
              <div>
                <p>
                  MeshMap enables all cloud native management operations from
                  `meshplayctl` to Meshplay's web-based user interface in visually
                  interactive topology.
                </p>
                <p>
                  Designing and configuring your cloud native infrastructure is
                  as easy as dragging and dropping.
                </p>
                <p>
                  Learn more about{" "}
                  <a href="https://khulnasoft.com/cloud-native-management/meshmap">
                    MeshMap
                  </a>
                </p>
              </div>
            ),
          },
          {
            title: "Extension Points",
            icon: MeshplayLogo,
            description: (
              <div>
                <p>
                  Meshplay is not just an application. It is a set of
                  microservices where the central component is itself called
                  Meshplay. Integrators may extend Meshplay by taking advantage of
                  designated Extension Points. Extension points come in various
                  forms and are available through Meshplays architecture.
                </p>
                <p>
                  Learn more about{" "}
                  <a href="https://docs.meshplay.khulnasoft.com/extensibility">
                    Extension Points
                  </a>
                </p>
              </div>
            ),
          },
          {
            title: "Meshplay Operator with MeshSync",
            icon: MeshplayOperatorLogo,
            description: (
              <p>
                MeshSync's ease of use is simple, but tiered, discovery
                pipelines are powerful and independently scale across multiple
                Kubernetes clusters.
              </p>
            ),
          },
          {
            title: "Using Multiple Adapters",
            icon: MeshplayLogo,
            description: (
              <div>
                <p>
                  Adapters are optional components that enhance and extend
                  Meshplay’s core functionality. Multiple adapters of the same
                  type may be deployed concurrently. The default configuration
                  of a Meshplay deployment includes one instance of each of the
                  Meshplay adapters.
                </p>
                <p>
                  See the{" "}
                  <a
                    href="https://docs.meshplay.khulnasoft.com/guides/multiple-adapters"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Using Multiple Adapters
                  </a>{" "}
                  guide for more information.
                </p>
              </div>
            ),
          },
          {
            title: "Interactive Terminal",
            icon: Smi,
            description: (
              <p>
                Establish web-based console sessions with one or more pods at a
                time.
              </p>
            ),
          },
          {
            title: "Envoy WebAssembly Filters",
            icon: WebA,
            description: (
              <p>
                Meshplay dynamically loads and reloads WebAssembly (WASM)
                modules, enabling Envoy-based data planes to be more intelligent
                and responsive in real-time.
              </p>
            ),
          },
          {
            title: "Cloud Native Performance",
            icon: SMP,
            description: <p>Track your MeshMark and compare with others.</p>,
          },
          {
            title: "Broad Platform Support",
            icon: MeshplayLogo,
            description: (
              <p>Deploy Meshplay to one of ten different supported platforms.</p>
            ),
          },
        ]}
      />
      <HowMeshplayWorksSpecs />
    </>
  );
};
export default OperatingServiceMeshes;

export const Head = () => {
  return (
    <SEO
      title="Manage Meshplay"
      description="How the cloud native management plane, Meshplay works"
      image="/images/meshplay-logo-dark-text.webp"
    />
  );
};
