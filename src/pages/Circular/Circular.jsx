import React from "react";
import styled from "styled-components";
import EachPageHeading from "../../components/Common/EachPageHeading";
import VericleTimeline from "../../components/Common/VericleTimeline";

const Circular = () => {
  return (
    <CircularDiv>
      <EachPageHeading title="Circular" />
      <VericleTimeline />
    </CircularDiv>
  );
};

export default Circular;

const CircularDiv = styled.div`
  padding: 10px;
`;
