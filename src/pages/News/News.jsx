import React from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";

const News = () => {
  return (
    <NewsDiv>
      <EachPageHeading title="News" />
      <VericleTimeline />
    </NewsDiv>
  );
};

export default News;

const NewsDiv = styled.div`
  padding: 10px;
`;
