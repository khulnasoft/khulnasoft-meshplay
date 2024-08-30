import istioLogo from "../../../assets/images/service-mesh-icons/istio-white.svg";
import linkerdLogo from "../../../assets/images/service-mesh-icons/linkerd-white.svg";
import consulLogo from "../../../assets/images/service-mesh-icons/consul-white.svg";
import kumaLogo from "../../../assets/images/service-mesh-icons/kuma-white.svg";
import nsmLogo from "../../../assets/images/service-mesh-icons/nsm-white.svg";
import traefikLogo from "../../../assets/images/service-mesh-icons/traefik-white.svg";
// import smpLogo from "../../assets/images/smp/horizontal/smp-light-text-side.svg";
import smpLogo from "./assets/smp-light-text.svg";
import smiLogo from "./assets/servicemeshinterface-stackedsmi-white.svg";
import osmLogo from "../../../assets/images/service-mesh-icons/open-service-mesh/icon/white/openservicemesh-icon-white.svg";

export const data = [
  {
    id: "1",
    title: "Getting Started",
    info: "Learn how to run Meshplay, install service meshes and deploy sample apps",
    courseLink: "khulnasoft/courses/meshplay-adapters",
    scenarios: [
      {
        subId: "1a",
        title: "Working with Meshplay and Istio",
        info: "Learn how to run Meshplay, install Istio and deploy a sample app",
        embed: "istio-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-istio",
        cover: istioLogo
      },
      {
        subId: "1b",
        title: "Working with Meshplay and Linkerd",
        info: "Learn how to run Meshplay, install Linkerd and deploy a sample app",
        embed: "linkerd-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-linkerd",
        cover: linkerdLogo
      },
      {
        subId: "1c",
        title: "Working with Meshplay and Consul",
        info: "Learn how to run Meshplay, install Consul and deploy a sample app",
        embed: "consul-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-consul",
        cover: consulLogo
      },
      {
        subId: "1d",
        title: "Working with Meshplay and Kuma",
        info: "Learn how to run Meshplay, install Kuma and deploy a sample app",
        embed: "kuma-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-kuma",
        cover: kumaLogo
      },
      {
        subId: "1e",
        title: "Working with Meshplay and NSM",
        info: "Learn how to run Meshplay, install NSM and deploy a sample app",
        embed: "nsm-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-nsm",
        cover: nsmLogo
      },
      {
        subId: "1f",
        title: "Working with Meshplay and Traefik",
        info: "Learn how to run Meshplay, install Traefik and deploy a sample app",
        embed: "traefik-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-traefik",
        cover: traefikLogo
      },
      {
        subId: "1g",
        title: "Working with Meshplay and Open Service Mesh",
        info: "Learn how to run Meshplay, install Open Service Mesh and deploy a sample app",
        embed: "osm-meshplay-adapter",
        link: "/learn/service-mesh-labs/working-with-meshplay-and-open-service-mesh",
        cover: osmLogo
      }
    ]
  },
  {
    id: "2",
    title: "Performance Management",
    info: "Learn how to do Performance Testing with Meshplay",
    courseLink: "khulnasoft/courses/performance-testing-with-meshplay",
    scenarios: [
      {
        subId: "2a",
        title: "Running Performance Tests",
        info: "Learn how to do performance testing with Meshplay",
        embed: "running-performance-tests",
        link: "/learn/service-mesh-labs/running-performance-tests",
        cover: smpLogo
      },
      {
        subId: "2b",
        title: "Traffic Splitting with Meshplay",
        info: "Traffic Management with Meshplay",
        embed: "traffic-splitting",
        link: "/learn/service-mesh-labs/traffic-splitting-with-meshplay",
        cover: smiLogo
      }
    ]
  },
];
