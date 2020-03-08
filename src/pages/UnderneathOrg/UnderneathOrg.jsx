import React from "react";
import styled from "styled-components";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";

import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";
import { Row, Col } from "react-bootstrap";
import NewsListBox from "../../components/NewsListBox/NewsListBox";
import { Content } from "../../components/Common/Content";
import Spinner from "../../components/Common/Spinner";

const UnderneathOrg = ({ engLang }) => {
  let query = gql`
    {
      singlepost(id: "/underneath-organization/", idType: SLUG) {
        content
        singlepost {
          nepali
        }
      }
    }
  `;

  return (
    <UnderneathOrgDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="UNDERNEATH ORGANIZATIONS" />
          <Query query={query}>
            {({ loading, error, data }) => {
              if (loading) {
                return <Spinner />;
              }
              let underneathOrg = data.singlepost;
              return (
                <Content
                  dangerouslySetInnerHTML={{
                    __html: `${
                      engLang
                        ? underneathOrg.content
                        : underneathOrg.singlepost.nepali
                    }`
                  }}
                ></Content>
              );
            }}
          </Query>
        </Col>

        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </UnderneathOrgDiv>
  );
};

export default UnderneathOrg;

const UnderneathOrgDiv = styled.div`
  padding: 10px;
`;
