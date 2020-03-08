import React, { useEffect } from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";
import NewsListBox from "../../components/NewsListBox/NewsListBox";
import { Row, Col } from "react-bootstrap";

const Savings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SavingsDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="Savings" />
        </Col>

        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </SavingsDiv>
  );
};

export default Savings;

const SavingsDiv = styled.div`
  padding: 10px;
`;
