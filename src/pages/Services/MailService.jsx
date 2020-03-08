import React, { useEffect } from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";
import { Row, Col } from "react-bootstrap";
import NewsListBox from "../../components/NewsListBox/NewsListBox";

const MailService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MailServiceDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="Mail Service" />
        </Col>

        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </MailServiceDiv>
  );
};

export default MailService;

const MailServiceDiv = styled.div`
  padding: 10px;
`;
