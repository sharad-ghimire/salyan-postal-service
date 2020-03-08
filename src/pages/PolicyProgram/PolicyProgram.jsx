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

const PolicyProgram = () => {
  let query = gql`
    {
      singlepost(id: "/policy-and-programmes/", idType: SLUG) {
        content
        slug
        singlepost {
          nepali
        }
      }
    }
  `;

  return (
    <PolicyProgramDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="Policy Program" />
          <Query query={query}>
            {({ loading, error, data }) => {
              if (loading) {
                return <Spinner />;
              }
              console.log(error);

              if (!error) {
                let policyData = data.singlepost;
                return (
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: `${policyData.content}`
                    }}
                  ></Content>
                );
              } else {
                return <Spinner />;
              }
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
    </PolicyProgramDiv>
  );
};

export default PolicyProgram;

const PolicyProgramDiv = styled.div`
  padding: 10px;
`;
