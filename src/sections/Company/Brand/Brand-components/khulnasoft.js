import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import KhulnaSoftWhiteBg from "../../../../assets/images/khulnasoft/khulnasoft-only/png/khulnasoft-white-bg.webp";
import Bookmarks from "../../../../assets/images/khulnasoft/bookmarks.webp";
import BookmarksPDF from "../../../../assets/brand/bookmarks.pdf";
import KhulnaSoftIcon from "../../../../assets/images/khulnasoft/5 icon/svg/light/5-light-no-trim.svg";

const KhulnaSoftWrapper = styled.section`
    @media (max-width:575px){
        .brandHeader{
            padding: 3rem 0;
        }
    }
`;

const KhulnaSoftBrand = () => {
  return (
    <KhulnaSoftWrapper>
      <div className="post-content">
        <Row className="brand-section">
          <Col xs={12} sm={6}>
            <h1 className="layerH3">
              KhulnaSoft
            </h1>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/khulnasoft-brand-kit.zip">
              <Button primary title="Download Logo Assets" external={false}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
              The KhulnaSoft mark includes the KhulnaSoft name & logo, and any word,
              phrase, image, or other designation that identifies the source or
              origin of any KhulnaSoft projects. Please don’t modify the marks or
              use them in a confusing way, including suggesting sponsorship or
              endorsement by KhulnaSoft, or in a way that confuses KhulnaSoft with
              another brand (including your own).
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">
              Logos
            </h2>
          </Col>
          <SRLWrapper>
            <Row Vcenter className="KhulnaSoftLogos">
              <Col xs={12} sm={6}>
                <img src={KhulnaSoftWhiteBg} alt="KhulnaSoft Logo" />
                  Primary Logo: broadly, and majorly applicable
              </Col>
              <Col xs={12} sm={6}>
                <img src={KhulnaSoftIcon} alt="KhulnaSoft Logo" className="KhulnaSoftIcon" />
                  KhulnaSoft Icon: suited for square-shaped display
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">
              Colors
            </h2>
          </Col>
          <Col xs={12}>
            <p>
              Our community color palette consists of gray and green colors
              representing each of our projects. The KhulnaSoft logo should be white
              when using project colors as the background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Saffron" R="235" G="192" B="23" colorCode="#EBC017" />
            <div className="blond-color-box">
              <ColorBox name="Blond" R="255" G="243" B="197" dark colorCode="#FFF3C5" />
            </div>
            <ColorBox name="Light Slate Gray" R="122" G="132" B="142" colorCode="#7A848E" />
            <ColorBox name="Dark Jungle Green" R="30" G="33" B="23" colorCode="#1E2117" />
            <ColorBox name="Teal Blue" R="71" G="126" B="150" colorCode="#477E96" />
            <ColorBox name="Casper" R="177" G="182" B="184" colorCode="#B1B6B8" />
            <div className="white-color-box">
              <ColorBox name="White" R="255" G="255" B="255" dark colorCode="#FFFFFF" />
            </div>
          </Row>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">
              Bookmarks
            </h2>
          </Col>
          <Col xs={12}>
            <p className="layerH3">
              Media available for print.
            </p>
            <Row className="bookmarks">
              <Link to={BookmarksPDF}>
                <img className="bookmarks" src={Bookmarks} alt="KhulnaSoft and Meshplay Bookmarks" />
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    </KhulnaSoftWrapper>
  );
};

export default KhulnaSoftBrand;
