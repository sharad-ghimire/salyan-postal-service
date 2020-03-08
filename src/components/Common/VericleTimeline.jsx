import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import NewsListBox from "../NewsListBox/NewsListBox";
import styled from "styled-components";

const VericleTimeline = () => {
  return (
    <VTDiv>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateComponent={<div className="dataComponent-pill">Jan 2020</div>}
        >
          <NewsListBox image={true} pill={false} />
          <NewsListBox image={true} pill={true} />
        </TimelineItem>
        <TimelineItem
          key="002"
          dateComponent={<div className="dataComponent-pill">Dec 2019</div>}
        >
          <NewsListBox image={true} pill={false} />
          <NewsListBox image={true} pill={false} />
        </TimelineItem>
      </Timeline>
    </VTDiv>
  );
};

export default VericleTimeline;

const VTDiv = styled.div`
  .dataComponent-pill {
    /* Layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 47px;

    background: #0a75b9 !important;
    color: #fff;
    /* padding: 3px 15px; */
    border-radius: 11px;
    line-height: 1;
    text-transform: uppercase;
    /* font-size: 12px; */
    margin-bottom: 0;
    height: 2em;
    position: relative;
    right: 22px;
  }
`;
