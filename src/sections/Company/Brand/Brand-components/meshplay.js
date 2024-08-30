import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MeshLogoLightText from "../../../../assets/images/meshplay/full-logo/meshplay-logo-light-text.webp";
import MeshLogoLightTextSide from "../../../../assets/images/meshplay/full-logo/meshplay-logo-light-text-side.webp";
import MeshDarkText from "../../../../assets/images/meshplay/text-only/meshplay-light-text.svg";
import MeshLogoOnly from "../../../../assets/images/meshplay/icon-only/meshplay-logo-dark.webp";


const MeshplayBrand = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            Meshplay
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/meshplay-brand-kit.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            The Meshplay mark includes the Meshplay name & logo, and any word,
            phrase, image, or other designation that identifies the source or
            origin of any KhulnaSoft projects. Please don’t modify the marks or
            use them in a confusing way, including suggesting sponsorship or
            endorsement by KhulnaSoft, or in a way that confuses KhulnaSoft with
            another brand (including your own).
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="layerH3 in">
            Logos
          </h2>
        </Col>
        <SRLWrapper>
          <Row Vcenter className="ImgDiv">
            <Col xs={12} sm={4}>
              <img src={MeshDarkText} alt="MeshplayDark Logo"/>
            </Col>
            <Col xs={12} sm={4}>
              <img src={MeshLogoLightTextSide} alt="MeshplayLightTextSide Logo"/>
            </Col>
          </Row>
          <Row Vcenter className="ImgDiv">
            <Col xs={12} sm={4}>
              <img src={MeshLogoLightText} alt="MeshplayLightText Logo"/>
            </Col>
            <Col xs={12} sm={4}>
              <img src={MeshLogoOnly} alt="Meshplay Logo" />
            </Col>
          </Row>
        </SRLWrapper>
      </Row>
      <Row>
        <Col>
          <h2 className="layerH3 in">
            Colors
          </h2>
        </Col>
        <Col>
          <p>
            The Meshplay color palette consists of the primary Meshplay color
            and additional shades. The Meshplay logo should be white or
            monochrome tonal when using a color background.
          </p>
        </Col>
        <Row className="color-code-wrapper">
          <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
          <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
          <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
        </Row>
      </Row>
    </div>
  );
};

export default MeshplayBrand;
