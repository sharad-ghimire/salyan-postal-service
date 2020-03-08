import React, { useEffect } from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";
import { Row, Col } from "react-bootstrap";
import NewsListBox from "../../components/NewsListBox/NewsListBox";

const ParcelService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ParcelServiceDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="Parcel Service" />
        </Col>

        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </ParcelServiceDiv>
  );
};

export default ParcelService;

const ParcelServiceDiv = styled.div`
  padding: 10px;
`;
