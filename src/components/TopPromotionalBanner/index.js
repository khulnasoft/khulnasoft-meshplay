import React from "react";
import { TopBannercontainer } from "./style";
import Rocket from "../../assets/images/top-promotional-banner/rocket.svg";

const TopPromotionalBanner = () => {
  return (
    <>
      <TopBannercontainer>
        <a href="https://meshplay.khulnasoft.com/blog/meshplay-v07-release-announcement" rel="noreferrer" target="_blank"><p className="content"><img src={Rocket} alt="Five on rocket" /><span>Soar to New Heights with Meshplay v0.7.0 &rarr;</span>{/* <span>Try it now &rarr;</span> */}
        </p></a>
      </TopBannercontainer>
    </>
  );
};
export default TopPromotionalBanner;