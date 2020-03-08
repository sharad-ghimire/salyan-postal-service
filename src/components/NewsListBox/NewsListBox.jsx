import React from "react";
import EachPageHeading from "../Common/EachPageHeading";
import { NewsListBoxDiv } from "./NewsListBox.styled";
import { Media, Badge, Row, Col } from "react-bootstrap";

const NewsListBox = ({ title, readmore, pill, image, pillText }) => {
  return (
    <NewsListBoxDiv>
      {title && <EachPageHeading title={title} />}
      <Media className="news-generic-media">
        {image && (
          <img
            width={64}
            height={64}
            className="mr-3"
            src={`${require("../../components/Header/assets/logo.png")}`}
            alt="Imaggge"
          />
        )}
        <Media.Body>
          <Row>
            <Col>
              <div className="date">22nd June, 2020</div>
            </Col>
            {pill && (
              <Col>
                <Badge pill variant="primary" className="news-generic-badge">
                  {pillText}
                </Badge>
              </Col>
            )}
          </Row>
          <span className="news-excerpt">
            Right to Information Kartik to Pouse Masant
          </span>

          {readmore && <div className="read-more">Read More</div>}
        </Media.Body>
      </Media>
    </NewsListBoxDiv>
  );
};

export default NewsListBox;
