import meshplay from "../../../assets/images/meshplay/icon-only/meshplay-logo-light.svg";
import five from "../../../assets/images/khulnasoft/5 icon/svg/light/5-light-bg.svg";
import gnh from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import smp from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import imagehub from "../../../assets/images/image-hub/khulnasoft-image-hub.svg";
import MeshplayOperator from "../../../assets/images/meshplay-operator/meshplay-operator.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import patterns from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import github from "../../../assets/images/socialIcons/github.svg";
import istioLogo from "../../../assets/images/service-mesh-icons/istio.svg";
import linkerdLogo from "../../../assets/images/service-mesh-icons/linkerd.svg";
import consulLogo from "../../../assets/images/service-mesh-icons/consul.svg";
import kumaLogo from "../../../assets/images/service-mesh-icons/kuma.svg";
import nsmLogo from "../../../assets/images/service-mesh-icons/nsm.svg";
import nginxLogo from "../../../assets/images/service-mesh-icons/nginx-service-mesh.svg";
import traefikLogo from "../../../assets/images/service-mesh-icons/traefik.svg";
import smiLogo from "../../../assets/images/service-mesh-icons/service-mesh-interface/icon/color/servicemeshinterface-icon-color.svg";
import appmeshLogo from "../../../assets/images/service-mesh-icons/aws-app-mesh.svg";
import ciliumLogo from "../../../assets/images/service-mesh-icons/cilium.svg";
import wasm from "../../../assets/images/webassembly/webssembly_icon.svg";
import recognitionLogo from "../../../assets/images/recognition-program/recognition-program.png";

export const repo_data = [
  {
    category: "Frontend",
    subdata: [
      {
        project: "KhulnaSoft.io",
        image: five,
        site: "https://khulnasoft.com/",
        language: "Gatsby",
        maintainers_name: ["Vacant"],
        link: ["#"],
        repository: "https://github.com/khulnasoft/khulnasoft",
      },
      {
        project: "Meshplay.io",
        image: meshplay,
        site: "https://meshplay.khulnasoft.com",
        language: "Jekyll",
        maintainers_name: ["Vivek Vishal"],
        link: ["https://khulnasoft.com/community/members/vivek-vishal"],
        repository: "https://github.com/meshplay/meshplay.khulnasoft.com",
      },
      {
        project: "Meshplay Documentation",
        image: meshplay,
        site: "http://docs.meshplay.khulnasoft.com",
        language: "Jekyll",
        maintainers_name: ["Vivek Vishal"],
        link: ["https://khulnasoft.com/community/members/vivek-vishal"],
        repository: "https://github.com/meshplay/meshplay/tree/master/docs",
      },
      {
        project: "Meshplay UI",
        image: meshplay,
        site: "https://github.com/meshplay/meshplay/tree/master/ui",
        language: "NextJS, React.js, MaterialUI and Billboard.js",
        maintainers_name: ["Antonette Caldwell", "Aabid Sofi"],
        link: [
          "https://khulnasoft.com/community/members/antonette-caldwell",
          "https://khulnasoft.com/community/members/aabid-sofi",
        ],
        repository: "https://github.com/meshplay/meshplay/tree/master/ui",
      },
      {
        project: "Service Mesh Performance",
        image: smp,
        site: "https://smp-spec.io",
        language: "Jekyll",
        maintainers_name: ["Aaditya Subedy"],
        link: ["https://khulnasoft.com/community/members/aaditya-narayan-subedy"],
        repository:
          "https://github.com/service-mesh-performance/service-mesh-performance",
      },
      {
        project: "Nighthawk",
        image: gnh,
        site: "https://getnighthawk.dev",
        language: "Jekyll",
        maintainers_name: ["Uzair Shaikh"],
        link: ["https://khulnasoft.com/community/members/uzair-shaikh"],
        repository: "https://github.com/khulnasoft/getnighthawk",
      },
      {
        project: "MeshMap",
        image: meshplay,
        site: "/cloud-native-management/meshmap",
        language: "React.js, Cytoscape.js",
        maintainers_name: ["Aabid Sofi"],
        link: ["https://khulnasoft.com/community/members/aabid-sofi"],
        description:
          "A collaborative, visual topology to design and operate cloud native infrastructure.",
        repository: "https://github.com/khulnasoft/meshplay-extensions",
        accessRequired: "*program participation required",
      },
      {
        project: "Discussion Forum",
        image: five,
        site: "https://discuss.khulnasoft.com",
        language: "Discourse",
        maintainers_name: ["Vivek Vishal"],
        link: ["https://khulnasoft.com/community/members/vivek-vishal"],
        repository: " https://discuss.khulnasoft.com",
      },
      {
        project: "Cloud Native Patterns",
        image: patterns,
        site: "https://service-mesh-patterns.github.io/service-mesh-patterns/",
        language: "Gatsby",
        maintainers_name: ["Nic Jackson"],
        link: ["https://khulnasoft.com/community/members/nic-jackson"],
        repository:
          "https://github.com/service-mesh-patterns/service-mesh-patterns",
      },
      {
        project: "Cloud Native Playground",
        image: meshplay,
        site: "https://play.meshplay.khulnasoft.com",
        language: "React.js",
        maintainers_name: ["vacant"],
        link: ["#"],
        repository: "https://github.com/meshplay/play",
      },
      {
        project: "KhulnaSoft Cloud",
        image: meshplay,
        site: "https://meshplay.khulnasoft.com/",
        language: "React.js",
        maintainers_name: ["Yash Sharma"],
        link: ["https://khulnasoft.com/community/members/yash-sharma"],
        repository: "https://github.com/khulnasoft/meshplay-cloud",
        accessRequired: "*program participation required",
      },
      {
        project: "Recognition Program",
        image: recognitionLogo,
        site: "https://badges.khulnasoft.com/",
        language: "Gatsby",
        maintainers_name: ["Vacant"],
        link: [""],
        repository:
          "https://github.com/khulnasoft/meshplay-extensions-packages/",
      },
      {
        project: "Sistent Design System",
        image: five,
        site: "https://github.com/khulnasoft/sistent",
        language: "React.js",
        maintainers_name: [
          "Antonette Caldwell",
          "Rex Joshua Ibegbu",
          "Aabid Sofi",
        ],
        link: [
          "https://khulnasoft.com/community/members/antonette-caldwell",
          "https://khulnasoft.com/community/members/rex-joshua-ibegbu",
          "https://khulnasoft.com/community/members/aabid-sofi",
        ],
        repository: "https://github.com/khulnasoft/sistent",
      },
      {
        project: "KhulnaSoft Documentation",
        image: five,
        site: "https://docs.khulnasoft.com/",
        language: "Hugo",
        maintainers_name: ["Vacant"],
        link: [""],
        repository: "https://github.com/khulnasoft/docs",
      },

    ],
  },

  {
    category: "Cloud Native Learning Paths",
    subdata: [
      {
        project: "Cloud Native Labs",
        image: five,
        language: "yaml",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A variety of interactive labs spanning different cloud native infrastructure. See https://khulnasoft.com/learn/service-mesh-labs.",
        repository: "https://github.com/khulnasoft/service-mesh-labs",
      },
      {
        project: "Istio Service Mesh Workshop",
        image: istioLogo,
        language: "Meshplay",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A workshop that teaches about service meshes through the lens of Istio.",
        repository: "https://github.com/khulnasoft/istio-service-mesh-workshop",
      },
      {
        project: "Advanced Istio Service Mesh Workshop",
        image: istioLogo,
        language: "Meshplay",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "An advanced workshop that teaches about service meshes through the lens of Istio.",
        repository:
          "https://github.com/khulnasoft/advanced-istio-service-mesh-workshop",
      },
      {
        project: "Linkerd Service Mesh Workshop",
        image: linkerdLogo,
        language: "Meshplay",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A workshop that teaches about service meshes through the lens of Linkerd.",
        repository: "https://github.com/khulnasoft/linkerd-service-mesh-workshop",
      },
      {
        project: "Containers 101 Workshop",
        image: five,
        language: "Docker",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A workshop that introduces Linux containers through concepts in slides and hands-on labs.",
        repository: "https://github.com/khulnasoft/containers-101-workshop",
      },
      {
        project: "Cloud Native Playground",
        image: meshplay,
        language: "Meshplay",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description: "Cloud Native Playground for Kubernetes and CNCF projects",
        repository: "https://github.com/meshplay/play",
      },
    ],
  },

  {
    category: "Cloud Native Management Repos",
    subdata: [
      {
        project: "Meshplay",
        image: meshplay,
        language: "Golang, gRPC",
        maintainers_name: ["Uzair Shaikh", "Antonette Caldwell"],
        link: [
          "https://khulnasoft.com/community/members/uzair-shaikh",
          "https://khulnasoft.com/community/members/antonette-caldwell",
        ],
        description:
          "the cloud native management plane to provide governance and backend system integration. Golang, gRPC, NATS, CloudEvents",
        repository: "https://github.com/meshplay/meshplay",
      },
      {
        project: "SMI Conformance",
        image: smiLogo,
        language: "GitHub Action",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A utility for validating the conformance of service mesh implementations and their adherence to the Service Mesh Interface specifications.",
        repository:
          "https://github.com/khulnasoft/meshplay-smi-conformance-action",
      },
      {
        project: "Meshplay Operator",
        image: MeshplayOperator,
        language: "Golang, Kubernetes Operator",
        maintainers_name: ["Aisuko Li"],
        link: ["https://khulnasoft.com/community/members/aisuko-li"],
        description:
          "Meshplay Operator is the multi-cloud native operator and implementation of MeshSync.",
        repository: "https://github.com/meshplay/meshplay-operator",
      },
      {
        project: "MeshSync",
        image: MeshSync,
        language: "Golang and NATS",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "MeshSync is a multi-mesh resource discovery application which is also a custom kubernetes controller.",
        repository: "https://github.com/meshplay/meshsync",
      },
      {
        project: "Learn-KhulnaSoft",
        image: five,
        language: "Golang, Kuttl",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A utility for validating the conformance of cloud native implementations and their adherence to the Cloud Native Interface specifications.",
        repository:
          "https://github.com/khulnasoft/meshplay-smi-conformance-action",
      },
      {
        project: "KhulnaSoft Cloud",
        image: meshplay,
        language: "Golang",
        maintainers_name: ["Yash Sharma"],
        link: ["https://khulnasoft.com/community/members/yash-sharma"],
        description: "A Meshplay Remote Provider.",
        repository: "https://github.com/khulnasoft/meshplay-cloud",
      },
      // {
      //   project: "MeshMonkey",
      //   language: "Golang",
      //   repository: "https://github.com/khulnasoft/meshmonkey",
      // },
    ],
  },

  {
    category: "WebAssembly Repos",
    subdata: [
      {
        project: "Image Hub",
        image: imagehub,
        language: "Vuejs",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A sample application written to run on Istio or Consul for exploring WebAssembly modules used as Envoy filters.",
        repository: "https://github.com/khulnasoft/image-hub",
      },
      {
        project: "WASM Filters",
        image: wasm,
        language: "C, C++, Rust",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A collection of WebAssemby filters for Envoy proxy written in C, C++, and Rust for exercising different features provided by envoy-wasm.",
        repository: "https://github.com/khulnasoft/wasm-filters",
      },
    ],
  },

  {
    category: "Cloud Native Performance Repos ",
    subdata: [
      {
        project: "Cloud Native Performance",
        image: smp,
        language: "Protobuf",
        maintainers_name: [
          "Lee Calcote",
          "Nic Jackson",
          "Otto Van Der Schaaf",
          "Xin Huang",
          "Aaditya Narayan Subedy",
        ],
        link: [
          "https://khulnasoft.com/community/members/lee-calcote",
          "https://khulnasoft.com/community/members/nic-jackson",
          "https://khulnasoft.com/community/members/otto-van-der-schaaf",
          "https://khulnasoft.com/community/members/xin-huang",
          "https://khulnasoft.com/community/members/aaditya-narayan-subedy",
        ],
        description:
          "a common format for capturing and describing cloud native infrastucture performance and services.",
        repository:
          "https://github.com/khulnasoft/service-mesh-performance-specification",
      },
      {
        project: "Wrk2",
        image: meshplay,
        language: "C",
        maintainers_name: ["Otto Van Der Schaaf"],
        link: ["https://khulnasoft.com/community/members/otto-van-der-schaaf"],
        description:
          "a C-based load generator. A fork of wrk2, which includes the concept of coordinated omission.",
        repository: "https://github.com/giltene/wrk2",
      },
      {
        project: "Gowrk2",
        image: meshplay,
        language: "Golang",
        maintainers_name: ["Uzair Shaikh"],
        link: ["https://khulnasoft.com/community/members/uzair-shaikh"],
        description:
          "Augmentation of wrk2 to produce output compatible with Meshplay’s visualization of performance test results.",
        repository: "https://github.com/khulnasoft/gowrk2",
      },
      {
        project: "Nighthawk",
        image: gnh,
        language: "Golang, gRPC",
        maintainers_name: ["Uzair Shaikh"],
        link: ["https://khulnasoft.com/community/members/uzair-shaikh"],
        description:
          "Augmentation of Envoy Nighthawk to produce output compatible with Meshplay’s visualization of performance test results",
        repository: "https://github.com/khulnasoft/nighthawk-go",
      },
      {
        project: "SMP Action",
        image: github,
        language: "shell",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "GitHub Action to run SMP Performance Benchmarks on CI/CD pipelines.",
        repository: "https://github.com/khulnasoft/meshplay-smp-action",
      },
      {
        project: "Meshplay Nighthawk",
        image: meshplay,
        language: "Golang",
        maintainers_name: ["Xin Huang"],
        link: ["https://khulnasoft.com/community/members/xin-huang"],
        description:
          "meshplay-perf is a Meshplay component used to run performance tests",
        repository: "https://github.com/meshplay/meshplay-perf",
      },
    ],
  },

  {
    category: "Cloud Native Pattern Repos",
    subdata: [
      {
        project: "Cloud Native Patterns",
        image: patterns,
        language: "Yaml",
        maintainers_name: ["Lee Calcote", "Nic Jackson"],
        link: [
          "https://khulnasoft.com/community/members/lee-calcote",
          "https://khulnasoft.com/community/members/nic-jackson",
        ],
        description:
          "A collection of functional examples to be used as patterns for operationalizing cloud native infrastruture and application deployments and applying best practices.",
        repository:
          "https://github.com/service-mesh-patterns/service-mesh-patterns",
      },
      {
        project: "Cloud Native Patterns Action",
        image: patterns,
        language: "shell",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "GitHub Action to deploy Cloud Native Patterns on CI/CD pipelines.",
        repository:
          "https://github.com/khulnasoft/meshplay-cloud-native-patterns-action",
      },
    ],
  },
  {
    category: "Meshplay Adapter Repos",
    subdata: [
      {
        project: "Meshplay Adapter for Istio",
        image: istioLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Aisuko Li"],
        link: ["https://khulnasoft.com/community/members/aisuko-li"],
        description: "Meshplay adapter for management of Istio.",
        repository: "https://github.com/khulnasoft/meshplay-istio",
      },
      {
        project: "Meshplay Adapter for Linkerd",
        image: linkerdLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Hussaina Begum"],
        link: ["https://khulnasoft.com/community/members/hussaina-begum"],
        description: "Meshplay adapter for management of Linkerd.",
        repository: "https://github.com/khulnasoft/meshplay-linkerd",
      },
      {
        project: "Meshplay Adapter for NSM",
        image: nsmLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Michael Gfeller"],
        link: ["https://khulnasoft.com/community/members/michael-gfeller"],
        description: "Meshplay adapter for management of Network Service Mesh.",
        repository: "https://github.com/khulnasoft/meshplay-nsm",
      },
      // {
      //   project: "Meshplay Adapter for Octarine",
      //   image: meshplay,
      //   language: "Golang, gRPC",
      //   maintainers_name: ["Lee Calcote"],
      //   link: ["https://khulnasoft.com/community/members/lee-calcote"],
      //   description: "Meshplay adapter for management of Octarine.",
      //   repository: "https://github.com/khulnasoft/meshplay-octarine",
      // },
      {
        project: "Meshplay Adapter for Traefik Mesh",
        image: traefikLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Antonette Caldwell"],
        link: ["https://khulnasoft.com/community/members/antonette-caldwell"],
        description: "Meshplay adapter for management of Traefik Mesh.",
        repository: "https://github.com/khulnasoft/meshplay-traefik-mesh",
      },
      {
        project: "Meshplay Adapter for Kuma",
        image: kumaLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Michael Gfeller"],
        link: ["https://khulnasoft.com/community/members/michael-gfeller"],
        description: "Meshplay adapter for management of Kuma.",
        repository: "https://github.com/khulnasoft/meshplay-kuma",
      },
      {
        project: "Meshplay Adapter for Consul",
        image: consulLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Hussaina Begum"],
        link: ["https://khulnasoft.com/community/members/hussaina-begum"],
        description: "Meshplay adapter for management of Consul",
        repository: "https://github.com/khulnasoft/meshplay-consul",
      },
      {
        project: "Meshplay Adapter for CPX",
        image: meshplay,
        language: "Golang, gRPC",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description: "Meshplay adapter for management of Citrix CPX",
        repository: "https://github.com/khulnasoft/meshplay-cpx",
      },
      {
        project: "Meshplay Adapter for App Mesh",
        image: appmeshLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Antonette Caldwell"],
        link: ["https://khulnasoft.com/community/members/antonette-caldwell"],
        description: "Meshplay adapter for management of AWS App Mesh",
        repository: "https://github.com/khulnasoft/meshplay-app-mesh",
      },
      {
        project: "Meshplay Adapter for Tanzu Service Mesh",
        image: meshplay,
        language: "Golang, gRPC",
        maintainers_name: ["Hussaina Begum"],
        link: ["https://khulnasoft.com/community/members/hussaina-begum"],
        description:
          "Meshplay adapter for management of VMware Tanzu Service Mesh",
        repository: "https://github.com/khulnasoft/meshplay-tanzu-sm",
      },
      {
        project: "Meshplay Adapter for NGINX Service Mesh",
        image: nginxLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Hussaina Begum"],
        link: ["https://khulnasoft.com/community/members/hussaina-begum"],
        description: "Meshplay adapter for management of NGINX Service Mesh",
        repository: "https://github.com/khulnasoft/meshplay-nginx-sm",
      },
      {
        project: "Meshplay Adapter for Cilium Service Mesh",
        image: ciliumLogo,
        language: "Golang, gRPC",
        maintainers_name: ["Uzair Shaikh"],
        link: ["https://khulnasoft.com/community/members/uzair-shaikh"],
        description: "Meshplay adapter for management of Cilium Service Mesh.",
        repository: "https://github.com/meshplay/meshplay-cilium",
      },
      {
        project: "MeshKit",
        image: meshplay,
        language: "Golang,Cuelang",
        maintainers_name: ["Aisuko Li"],
        link: ["https://khulnasoft.com/community/members/aisuko-li"],
        description: "Toolkit for KhulnaSoft's microservices.",
        repository: "https://github.com/khulnasoft/meshkit",
      },
      {
        project: "Meshplay Adapter Library",
        image: meshplay,
        language: "Golang, gRPC",
        maintainers_name: ["Michael Gfeller"],
        link: ["https://khulnasoft.com/community/members/michael-gfeller"],
        description:
          "A common and consistent set of functionality for Meshplay Adapters.",
        repository: "https://github.com/khulnasoft/meshplay-adapter-library",
      },
      {
        project: "Meshplay Adapter Template",
        image: meshplay,
        language: "Golang, gRPC",
        maintainers_name: ["Vacant"],
        link: ["#"],
        description:
          "A GitHub repo used as a template for new Meshplay Adapters.",
        repository: "https://github.com/khulnasoft/meshplay-adapter-template",
      },
    ],
  },
];


