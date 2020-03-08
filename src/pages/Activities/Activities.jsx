import React from "react";
import { ActivitiesDiv } from "./Activities.styled";
import EachPageHeading from "../../components/Common/EachPageHeading";
import { Row, Col } from "react-bootstrap";
import NewsListBox from "../../components/NewsListBox/NewsListBox";

const Activities = () => {
  return (
    <ActivitiesDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title={`Activities`} />
          <p>activity 12</p>
        </Col>
        <Col>
          <NewsListBox title="NOTICES & NEWS" />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </ActivitiesDiv>
  );
};

export default Activities;
