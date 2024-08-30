import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";
import khulnasofticon from "../../../assets/images/khulnasoft/5 icon/svg/light/5-light-bg.svg";
import MeshplayOperator from "../../../assets/images/meshplay-operator/meshplay-operator-dark.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import meshplay from "../../../assets/images/meshplay/icon-only/meshplay-logo-light.svg";
import servicemeshpattern from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import MeshMap from "../../../assets/images/meshmap/icon-only/meshmap-icon.svg";

import { Link } from "gatsby";

const contents = [
  {
    id: 0,
    link: "#top",
    text: "GitHub Organizations and Repositories",
  },
  { id: 1, link: "#Frontend Projects", text: "Frontend Projects" },
  { id: 2, link: "#Backend Projects", text: "Backend Projects" },
];

const Repository = () => {
  const data = React.useMemo(() => repo_data);
  let frontendProjects = data.filter((data) => data.category === "Frontend");
  let backendProjects = data.filter((data) => data.category !== "Frontend");


  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Repository Overview</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="top">
              <h2>GitHub Organizations and Repositories</h2>
            </a>
            <p>
              A brief introduction to all of the Github repositories of KhulnaSoft organization is offered below. This overview serves as a resource to newcomers seeking a perspective of the collective community efforts (from a code-centric perspective). See <a href="https://docs.google.com/document/u/0/d/1FzX-C_xy9hZ3Eu9dcCE0unhFV5LRUrb5YLn_MGYuG6Y/edit">KhulnaSoft GitHub Process</a> for more related information.
            </p>

            <p>
              Note that the KhulnaSoft community spans <strong>five</strong> GitHub
              organizations:
            </p>

            <ul className="project-org-list">
              <li>
                <a href="https://github.com/khulnasoft">
                  <img
                    src={khulnasofticon}
                    alt="khulnasoft icon"
                  />
                  &nbsp; KhulnaSoft
                </a>
                  - established projects like GetNighthawk, community with  MeshMates, a catch-all org.
              </li>

              <li>
                <a href="https://github.com/meshplay">
                  <img
                    src={meshplay}
                    alt="meshplay icon"
                  />
                  &nbsp; Meshplay
                </a>
                  -  Meshplay and its components
                <img
                  src={MeshplayOperator}
                  alt="Meshplay Operator logo"
                  style={{ marginLeft: ".25rem",height: "1.5rem" }}
                /> Meshplay Operator
                <img
                  src={MeshSync}
                  alt="mesh sync icon"
                  style={{ marginLeft: ".25rem",height: "1.5rem" }}
                /> and MeshSync.
              </li>

              <li>
                <a href="https://github.com/service-mesh-performance">
                  <img
                    src={servicemeshperformance}
                    alt="cloud native performance logo"
                  />
                  &nbsp; Cloud Native Performance
                </a>
                  - Cloud Native Performance specification and site.
              </li>
              <li>
                <a href="https://github.com/service-mesh-patterns">
                  <img
                    src={servicemeshpattern}
                    alt="cloud native patterns logo"
                  />
                  &nbsp; Cloud Native Patterns
                </a>
                  - a collection of curated patterns of cloud native use cases compatible with Meshplay.
              </li>
              <li>
                <a href="https://github.com/khulnasoft">
                  <img
                    src={khulnasofticon}
                    alt="KhulnaSoft logo"
                  />
                  &nbsp; KhulnaSoft Labs
                </a>
                  - emerging projects and Meshplay extensions, like
                <img
                  src={MeshMap}
                  alt="MeshMap logo"
                  style={{ height: "1.5rem" }}
                /> MeshMap.
              </li>
            </ul>

            <a id="Frontend Projects">
              <h2>Frontend Projects</h2>
            </a>

            {frontendProjects.map((frontendProject, index) => {
              const { category } = frontendProject;
              return (
                <div className="table-container" key={index}>
                  <table className="frontendTable" key={category}>
                    <thead>
                      <tr>
                        <th className="linkscol">Site</th>
                        <th>Project</th>
                        <th>Framework</th>
                        <th>Maintainers</th>
                        <th className="linkscol">Repo</th>
                      </tr>
                    </thead>
                    {frontendProject.subdata.map((subdata) => {
                      const {
                        project,
                        language,
                        repository,
                        maintainers_name,
                        site,
                        image,
                        link,
                        accessRequired,
                      } = subdata;
                      return (
                        <tbody key={project}>
                          <tr>
                            <td>
                              <a href={site} target="_blank" rel="noreferrer">
                                <img className="site-icon" src={image} alt="site-icon" />
                              </a>
                            </td>
                            <td>{project}</td>
                            <td>{language}</td>
                            <td>
                              {maintainers_name.map((mname, index) => {
                                return (
                                  <Link to={link[index]} key={index}>
                                    <span>{index > 0 ? ", " : ""}</span>{mname}
                                  </Link>
                                );
                              })}
                            </td>
                            <td>
                              <a
                                href={repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img className="github-icon" src={github} alt="github-icon" />
                              </a>
                              <div className="accessRequired"> { accessRequired != "" ? accessRequired : ""}</div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              );
            })}
            <a id="Backend Projects">
              <h2>Backend Projects</h2>
            </a>

            {backendProjects.map((backendProject, index) => {
              const { category } = backendProject;
              return (
                <div className="table-container" key={index}>
                  <table key={category}>
                    <thead>
                      <tr>
                        <th>{category}</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>Maintainers</th>
                        <th className="linkscol">Repo</th>
                      </tr>
                    </thead>
                    {backendProject.subdata.map((subdata) => {
                      const { project,image,language,description,repository,link,maintainers_name } = subdata;
                      const smpClass = project === "SMP Action";
                      const siteIconClasses = smpClass ? "site-icon inline smp-action" : "site-icon inline";
                      return (
                        <tbody key={project}>
                          <tr>
                            <td>
                              <img className={siteIconClasses} src={image} alt="project" />&nbsp;{project} </td>
                            <td>{language}</td>
                            <td>{description}</td>
                            <td>
                              {maintainers_name?.map((mname, index) => {
                                return (
                                  <Link to={link[index]} key={index}>
                                    <span>{index > 0 ? ", " : ""}</span>
                                    {mname}
                                  </Link>
                                );
                              })}
                            </td>
                            <td>
                              <a
                                href={repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img className="github-icon" src={github} alt="github-icon" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              );
            })}
            <TocPagination />
          </div>
        </Container>
        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Repository;
