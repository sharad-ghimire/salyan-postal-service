import React, { Fragment } from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Spinner from "../../components/Common/Spinner";
import { Row, Col } from "react-bootstrap";
import NewsListBox from "../../components/NewsListBox/NewsListBox";

const CitizenCharter = () => {
  let imgQuery = gql`
    {
      mediaItem(id: "/citizencharter/", idType: SLUG) {
        title
        sourceUrl
      }
    }
  `;
  let pdfQuery = gql`
    {
      mediaItem(id: "/citizen-charter/", idType: SLUG) {
        title
        mediaItemUrl
      }
    }
  `;
  return (
    <CitizenCharterDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="Citizen Charter" />
          <div className="lead-header ">
            <div>Government of Nepal</div>
            <div>Ministry of Communication and Information Technology </div>
            <div>Department of Postal Service </div>
            <div>Citizen Charter</div>
          </div>
          {/**
 * 
 *           <Query query={imgQuery}>
            {({ loading, error, data }) => {
              console.log(data);

              if (loading) {
                return <Spinner />;
              }
              let citizencharter = data.mediaItem;
              return (
                <img
                  style={{ maxWidth: "100%" }}
                  src={citizencharter.sourceUrl}
                  alt={citizencharter.title}
                />
              );
            }}
          </Query>
          <Query query={pdfQuery}>
            {({ loading, error, data }) => {
              console.log(data);

              if (loading) {
                return <div />;
              }
              let citizencharter = data.mediaItem;
              return (
                <p style={{ textAlign: "center" }}>
                  <a
                    download
                    href={citizencharter.mediaItemUrl}
                    target="_blank"
                  >
                    Download the Citizen Charter of Department of Postal Service
                  </a>
                </p>
              );
            }}
          </Query>
 * 
 */}
        </Col>
        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </CitizenCharterDiv>
  );
};

export default CitizenCharter;

const CitizenCharterDiv = styled.div`
  padding: 10px;
  .lead-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
  }
`;
