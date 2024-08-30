import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { ReactComponent as TwitterIcon } from "../../../assets/images/socialIcons/twitter.svg";
import mail_icon from "../../../assets/images/socialIcons/mail_keppel.svg";
import youtube_icon from "../../../assets/images/socialIcons/youtube-light.svg";
import github_icon from "../../../assets/images/socialIcons/github-light.svg";
import linkedin_icon from "../../../assets/images/socialIcons/linkedin-light.svg";
import docker_icon from "../../../assets/images/socialIcons/docker-light.svg";
import slack_icon from "../../../assets/images/socialIcons/slack-light.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  {
    id: 0,
    link: "#Newsletter",
    text: "Newsletter",
  },
  { id: 1, link: "#Mailing Lists", text: "Mailing Lists" },
  { id: 2, link: "#Calendar", text: "Calendar" },
  { id: 3, link: "#Slack Community", text: "Slack Community" },
  { id: 4, link: "#Discussion Forum", text: "Discussion Forum" },
  { id: 5, link: "#Social Media", text: "Social Media" },
];

const Connect = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Connect with Us</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Newsletter">
              {" "}
              <h2>Subscribe to Newsletter</h2>{" "}
            </a>
            <p>
              Don’t miss out on anything, sign up to receive updates on our
              newest releases, latest blog posts and any relevant information.
            </p>
            <ul>
              <li>
                <a href="https://meshplay.khulnasoft.com/subscribe">Meshplay mailing list</a>
              </li>
              <li>
                <a href="https://khulnasoft.com/subscribe">
                  KhulnaSoft mailing list
                </a>
              </li>
              <li>
                <a href="https://smp-spec.io/subscribe">
                  Service Mesh Performance mailing list
                </a>
              </li>
            </ul>
            <a id="Mailing Lists">
              {" "}
              <h2>Mailing Lists</h2>{" "}
            </a>
            <ul>
              <li>
                <a href="mailto:maintainers@khulnasoft.com">KhulnaSoft Maintainers</a>
              </li>
              <li>
                <a href="mailto:discuss-moderators@khulnasoft.com">
                  Discussion Forum Moderators
                </a>
              </li>
              <li>
                <a href="mailto:dev-group@meshplay.khulnasoft.com">Meshplay Developers</a>
              </li>
              <li>
                <a href="mailto:user-group@meshplay.khulnasoft.com">Meshplay Users</a>
              </li>
              <li>
                <a href="http://meshplay-dev@meshplay.dev">
                  Meshplay Contributors
                </a>
              </li>
              <li>
                <a href="mailto:maintainers@meshplay.khulnasoft.com">Meshplay Maintainers</a>
              </li>
              <li>
                <a href="http://meshplay-security-vulns-reports@meshplay.dev">
                  Meshplay Security and Vulnerability Reports
                </a>
              </li>
              <li>
                <a href="mailto:community@meshplay.khulnasoft.com">Meshplay Community</a>
              </li>
              <li>
                <a href="https://groups.google.com/a/getnighthawk.dev/g/developers">
                  Nighthawk Developers
                </a>
              </li>
              <li>
                <a href="https://groups.google.com/u/2/a/getnighthawk.dev/g/maintainers">
                  Nighthawk Maintainers
                </a>
              </li>
              <li>
                <a href="https://groups.google.com/a/getnighthawk.dev/g/users">
                  Nighthawk Users
                </a>
              </li>
              <li>
                <a href="mailto:community@smp-spec.io">
                  Service Mesh Performance Community
                </a>
              </li>
              <li>
                <a href="mailto:maintainers@smp-spec.io">
                  Service Mesh Performance Maintainers
                </a>
              </li>
              <li>
                <a href="mailto:user-group@smp-spec.io">
                  Service Mesh Performance Users
                </a>
              </li>
              <li>
                <a href="mailto:community-managers@khulnasoft.com">
                  KhulnaSoft Community Managers
                </a>
              </li>
            </ul>
            <a id="Calendar">
              {" "}
              <h2>Calendar</h2>{" "}
            </a>
            <p>
              Don’t miss out on any of the activities in the community. Join any
              or all of the weekly meetings subscribing to the{" "}
              <a href="https://khulnasoft.com/community/calendar#meetings">
                community calendar .
              </a>
            </p>{" "}
            <a id="Slack Community">
              {" "}
              <h2>Slack Community</h2>{" "}
            </a>
            <p>
              We are a community of like-minded people with thousands of
              members.
            </p>
            <p>
              Join our <a href="https://slack.khulnasoft.com/">Slack Workspace</a>{" "}
              introduce yourself and interact with the community. There are
              different channels in the workspace to engage within.
            </p>
            <div className="channels-list">
              <p>
                <a href="https://khulnasoft.slack.com/archives/CDM0ACDM5">
                  #general
                </a>{" "}
                - For workspace-wide communication and announcements.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/CFGG6U10E">
                  #meshplay
                </a>{" "}
                - For discussion on topics in and around Meshplay.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C017NA80S66">
                  #meshplay-adapters
                </a>{" "}
                - Discuss topics related to meshplay-adapters.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C011VPREG2Z">
                  #meshplay-ci
                </a>{" "}
                - For discussion on topics related to Meshplay Build, Release, Workflows, DevOps.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C010LFFGFFA">
                  #meshplay-meshsync
                </a>{" "}
                - For discussions on issues related to MeshSync.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C0130BQ4L3T">
                  #meshplayctl
                </a>{" "}
                - For discussions on Meshplay’s CLI
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C019426UBNY">
                  #newcomers
                </a>{" "}
                - For welcoming first-time contributors and community newcomers.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/CVBGPTFJN">
                  #performance
                </a>{" "}
                - For discussions related to measuring and evaluating cloud native performance.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C012UMS2MCM">
                  #wasm
                </a>{" "}
                - For discussions on webassembly, rust, envoy filters.
              </p>
              <p>
                <a href="https://khulnasoft.slack.com/archives/C015QJKUMPU">
                  #websites
                </a>{" "}
                - For discussions related to the UI/UX of{" "}
                <a href="http://khulnasoft.com/">Layer 5</a> project sites.
              </p>
            </div>
            <a id="Discussion Forum">
              {" "}
              <h2>Discussion Forum</h2>{" "}
            </a>
            <p>
              Join us on our cloud native community's{" "}
              <a href="https://discuss.khulnasoft.com">Discussion Forum</a>
            </p>
            <div className="channels-list">
              <ul>
                <li><a href="https://discuss.khulnasoft.com/c/community/12">Community Topic</a></li>
              </ul>
            </div>
            <a id="Social Media">
              {" "}
              <h2>Social Media</h2>{" "}
            </a>
            <p>
              KhulnaSoft is dedicated to empowering engineers and supporting the
              open source community that create them. Learn more about KhulnaSoft
              and connect with the community by following and engaging with us
              on our social media accounts.
            </p>
            <div>
              <p className="channels-para">
                <TwitterIcon className="twitter" />
                &nbsp;&nbsp;
                <a href="https://twitter.com/khulnasoft">@khulnasoft</a>,&nbsp;
                <a href="https://twitter.com/meshplayio">@meshplayio</a>
                &nbsp;and&nbsp;
                <a href="https://twitter.com/smp_spec">@smp_spec</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={mail_icon} alt="mail" />
                &nbsp;&nbsp;
                <a href="mailto:community-managers@khulnasoft.com">
                  Connect with our community managers for any inquiries or
                  support!
                </a>
              </p>
              <p className="channels-para">
                <img
                  className="channels-img"
                  src={youtube_icon}
                  alt="youtube"
                />
                &nbsp;&nbsp;
                <a href="https://www.youtube.com/c/KhulnaSoft?sub_confirmation=1">
                  Subscribe on Youtube
                </a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={github_icon} alt="github" />
                &nbsp;&nbsp;
                <a href="https://github.com/khulnasoft">
                  Discover our projects on GitHub
                </a>
              </p>
              <p className="channels-para">
                <img
                  className="channels-img"
                  src={linkedin_icon}
                  alt="linkedin"
                />
                &nbsp;&nbsp;
                <a href="https://www.linkedin.com/company/khulnasoft">
                  Join our professional network on LinkedIn
                </a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={docker_icon} alt="docker" />
                &nbsp;&nbsp;
                <a href="https://hub.docker.com/u/khulnasoft/">
                  Take control with Docker deployment
                </a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={slack_icon} alt="slack" />
                &nbsp;&nbsp;
                <a href="https://slack.khulnasoft.com/">
                  Communicate and collaborate with us on Slack
                </a>
              </p>
            </div>
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Connect;
