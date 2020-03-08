import React from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";

const Tender = () => {
  return (
    <TenderDiv>
      <EachPageHeading title="Tender Notice" />
      <VericleTimeline />
    </TenderDiv>
  );
};

export default Tender;

const TenderDiv = styled.div`
  padding: 10px;
`;
