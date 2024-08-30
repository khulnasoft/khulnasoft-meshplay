import React from "react";
import styled from "styled-components";
import Button from "../../../../reusecore/Button";
import BrandGuideImg from "../../../../assets/images/Brand-Guide/brand-guide.png";
import BrandGuidePDF from "../../../../assets/brand/brand-guide.pdf";

import { Row, Col } from "../../../../reusecore/Layout";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { Link } from "gatsby";

const KhulnaSoftWrapper = styled.section`
    @media (max-width:575px){
        .brandHeader{
            padding: 3rem 0;
        }
    }
`;

const BrandGuide = () => {
  return (
    <>
      <KhulnaSoftWrapper>
        <div className="post-content">
          <Row className="brand-section">
            <Col xs={12} sm={6}>
              <h1 className="layerH3">
                Brand Guide
              </h1>
            </Col>
            <Col xs={12} sm={6} className="download-button">
              <a href="/brand/brand-guide.pdf">
                <Button primary title="Download Brand Guide" external={false}>
                  <FiDownloadCloud size={21} className="icon-left" />
                </Button>
              </a>
            </Col>
            <Col>
              <p>
                A KhulnaSoft brand guide is a comprehensive document that outlines the guidelines and standards for presenting and representing the KhulnaSoft brand consistently. It serves as a vital resource for employees, partners, and external agencies to ensure that the KhulnaSoft brand is presented consistently, accurately, and in line with the brand's values and messaging.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row className="bookmarks">
                <Link to={BrandGuidePDF}>
                  <img className="bookmarks" src={BrandGuideImg} alt="KhulnaSoft Brand Guide" />
                </Link>
              </Row>
            </Col>
          </Row>
        </div>
      </KhulnaSoftWrapper>
    </>
  );
};

export default BrandGuide;