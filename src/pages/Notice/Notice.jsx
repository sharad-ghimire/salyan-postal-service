import React from "react";
import EachPageHeading from "../../components/Common/EachPageHeading";

import { NoticeDiv } from "./Notice.styled";
import VericleTimeline from "../../components/Common/VericleTimeline";

const Notice = () => {
  return (
    <NoticeDiv>
      <EachPageHeading title="Notice" />

      <VericleTimeline />
    </NoticeDiv>
  );
};

export default Notice;
