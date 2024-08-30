import React from "react";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Button from "../../../../reusecore/Button";
import { Col, Row } from "../../../../reusecore/Layout";
import SocialBackgroundImg from "../../../../assets/images/social-backgrounds/khulnasoft-charcoal-background.png";

const SocialBackgrounds = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            <strong> KhulnaSoft Social Backgrounds </strong>
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/khulnasoft-social-backgrounds.zip">
            <Button primary title="Download Social Backgrounds">
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            The Social Background mark includes the KhulnaSoft branding backgrounds that can be used as cover images or background images on Zoom, Twitter, Youtube and Linkedin.
          </p>
        </Col>
      </Row>

      <Row>
        <Row Vcenter className="ImgDiv">
          <Col xs={12} className="social-backgrounds">
            <img src={SocialBackgroundImg} alt="KhulnaSoft Social backgrounds" />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default SocialBackgrounds;
