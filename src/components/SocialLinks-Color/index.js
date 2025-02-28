import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import forum_icon from "../../assets/images/socialIcons/forum.svg";
import mail_icon from "../../assets/images/socialIcons/mail_keppel.svg";
import slack_icon from "../../assets/images/socialIcons/slack-light.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/socialIcons/twitter.svg";
import github_icon from "../../assets/images/socialIcons/github.svg";
import youtube_icon from "../../assets/images/socialIcons/youtube.svg";
import docker_icon from "../../assets/images/socialIcons/docker.svg";
import linkedin_icon from "../../assets/images/socialIcons/linkedin-light.svg";
import SocialLinksWrapper from "./sociallinkscolor.style";

const SocialLinksColor = () => {
  return (
    <SocialLinksWrapper>
      <Col xs={12}>
        <Row className="social_icons">
          <a href="https://discuss.khulnasoft.com" target="_blank" rel="noreferrer">
            <img height="30px" src={forum_icon} alt="forum" />
          </a>
          <a
            className="mail_icon"
            href="mailto:community@khulnasoft.com"
            target="_blank"
            rel="noreferrer"
          >
            <img height="30px" src={mail_icon} alt="mail" />
          </a>
          <a href="https://slack.khulnasoft.com/" target="_blank" rel="noreferrer">
            <img className="slack" height="30px" src={slack_icon} alt="slack" />
          </a>
          <a
            href="https://twitter.com/khulnasoft"
            target="_blank"
            rel="noreferrer"
            className="footer_twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/khulnasoft"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <img height="30px" src={github_icon} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/company/khulnasoft"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              height="30px"
              src={linkedin_icon}
              alt="linkedin"
            />
          </a>
          <a
            className="youtube_icon"
            href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="youtube"
              height="30px"
              src={youtube_icon}
              alt="youtube"
            />
          </a>
          <a
            className="docker_icon"
            href="https://hub.docker.com/u/khulnasoft/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="docker"
              height="30px"
              src={docker_icon}
              alt="docker"
            />
          </a>
        </Row>
      </Col>
    </SocialLinksWrapper>
  );
};

export default SocialLinksColor;
