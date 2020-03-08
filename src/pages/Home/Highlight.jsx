import React, { Fragment } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Highlight = () => {
  return (
    <HighlightDiv>
      <Row className="highlight-row">
        <Col xs={12} md={3} md={3} className="highlight">
          <span>
            <FormattedMessage id="home.highlight" defaultMessage="Highlight" />
          </span>
        </Col>
        <Col>
          <div className="actual-highlight">
            <Highttext
              date="11th Nov, 2019"
              text="Contract allocation related intent notice"
            />
          </div>
        </Col>
      </Row>
    </HighlightDiv>
  );
};

const Highttext = ({ date, text }) => (
  <Fragment>
    <div
      style={{
        height: "100%",

        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      }}
    >
      <span className="date">{date}</span>
      <span className="text" className="highlight-hover">
        {text}
      </span>
    </div>
  </Fragment>
);

export default Highlight;

const HighlightDiv = styled.div`
  margin-top: 2px;
  .highlight-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
    border: 1px #94949436 solid;
  }
  .highlight {
    background: #080d37;
    color: white;
    height: 3em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;
  }
  .date {
    margin-left: 15px;
    color: red;
    font-weight: bold;
    margin-right: 10px;
  }
  .actual-highlight {
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
