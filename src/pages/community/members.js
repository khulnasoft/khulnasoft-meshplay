import React, { useState } from "react";
// Libraries
// Components
import SEO from "../../components/seo";


import MultipleMembers from "../../sections/Community/Members-grid/MemberList";
import Dropdown from "../../sections/Community/Members-grid/Dropdown";
import { DropdownWrapper } from "../../components/dropdownLayouts/labels.style";
// Assets + Icons
import lighttheme from "../../theme/app/themeStyles";
import writerIcon from "../../assets/images/writer-program/writer-program-badge.svg";
import communityIcon from "../../assets/images/community/community-green.svg";
import hubIcon from "../../assets/images/image-hub/khulnasoft-image-hub.svg";
import icon5 from "../../assets/images/khulnasoft/5 icon/svg/light/5-light-no-trim.svg";
import meshmateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import hawkIcon from "../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import landscapeIcon from "../../assets/images/landscape/khulnasoft_landscape_green.svg";
import meshplayIcon from "../../assets/images/meshplay/icon-only/meshplay-logo-light.svg";
import meshplayOpIcon from "../../assets/images/meshplay-operator/meshplay-operator-dark.svg";
import smpIcon from "../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import inactiveIcon from "../../assets/images/status/inactive.webp";
import activeIcon from "../../assets/images/status/active.webp";
import patternsIcon from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import uiuxrIcon from "../../assets/images/uiuxr/uiuxr.svg";
import docsIcon from "../../assets/images/docs/docs.svg";
import dockerExtensionIcon from "../../assets/images/docker-extension/docker-extension-meshplay-logo.svg";
import meshplayCatalogIcon from "../../assets/images/meshplay/meshplay-catalog.svg";
import meshMapIcon from "../../assets/images/meshmap/icon-only/meshmap-icon.svg";
/**
 * Array containing a list of categories to be shown in the dropdown.
 * The map function in the end wraps the label property with a component.
 */
const options = [
  {
    label: "BADGES",
    value: "",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "Community",
    value: "community",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: communityIcon,
    className: "allOptions",
  },
  {
    label: "Writer",
    value: "writer",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: writerIcon,
    className: "allOptions",
  },
  {
    label: "Landscape",
    value: "landscape",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: landscapeIcon,
    className: "allOptions",
  },
  {
    label: "Docker Extension",
    value: "docker-extension",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: dockerExtensionIcon,
    className: "allOptions",
  },
  {
    label: "Image Hub",
    value: "image-hub",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: hubIcon,
    className: "allOptions",
  },
  {
    label: "Docs",
    value: "docs",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: docsIcon,
    className: "allOptions",
  },
  {
    label: "Meshplay",
    value: "meshplay",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: meshplayIcon,
    className: "allOptions",
  },
  {
    label: "Meshplay Catalog",
    value: "meshplay-catalog",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: meshplayCatalogIcon,
    className: "allOptions",
  },
  {
    label: "Meshplay Operator",
    value: "meshplay-operator",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: meshplayOpIcon,
    className: "allOptions",
  },
  {
    label: "MeshMap",
    value: "meshmap",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: meshMapIcon,
    className: "allOptions",
  },
  {
    label: "Cloud Native Performance",
    value: "smp",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: smpIcon,
    className: "allOptions",
  },
  {
    label: "Nighthawk",
    value: "nighthawk",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: hawkIcon,
    className: "allOptions",
  },
  {
    label: "Cloud Native Patterns",
    value: "patterns",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: patternsIcon,
    className: "allOptions",
  },
  {
    label: "UI/UX'er",
    value: "ui-ux",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: uiuxrIcon,
    className: "allOptions",
  },
  {
    label: "STATUS",
    value: "",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "All Members",
    value: "all",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "allOptions",
  },
  {
    label: "Active",
    value: "active",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: activeIcon,
    className: "allOptions",
  },
  {
    label: "Inactive",
    value: "inactive",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: inactiveIcon,
    className: "allOptions",
  },
  {
    label: "ROLE",
    value: "",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "Maintainers",
    value: "maintainers",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: icon5,
    className: "allOptions",
  },
  {
    label: "Meshmates",
    value: "meshmates",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: meshmateIcon,
    className: "allOptions",
  },
  {
    label: "Community Managers",
    value: "community_managers",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: communityIcon,
    className: "allOptions",
  },
].map((obj) => ({
  ...obj,
  label: (
    <DropdownWrapper>
      <div className={obj.className}>{obj.label}</div>
    </DropdownWrapper>
  ),
  color: `${obj.color}`,
  icon: obj.icon && `url(${obj.icon})`,
}));
const activeMember = {
  label: (
    <DropdownWrapper>
      <div className="allOptions">Active</div>
    </DropdownWrapper>
  ),
  value: "active",
  color: lighttheme.linkColor,
  isFixed: true,
  icon: activeIcon && `url(${activeIcon})`,
  className: "allOptions",
};
const MembersPage = () => {
  /**
   * state storing the currently selected categories.
   */
  const [members, setMembers] = useState([activeMember]);
  const handleChange = (value) => setMembers(value);
  return (
    <>
      <Dropdown options={options} defaultOption={activeMember} handleChange={handleChange} />
      <MultipleMembers members={members} />

    </>
  );
};
export default MembersPage;
export const Head = () => {
  return <SEO
    title="Members"
    description="An awarding-winning, open source community with a warm and welcoming collection of contributors."
  />;
};