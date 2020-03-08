import React from "react";
import styled from "styled-components";
import { Card, Col, Row, Table } from "react-bootstrap";
import Moment from "react-moment";

import EachPageHeading from "../../components/Common/EachPageHeading";

import { ReactComponent as Pdf } from "../../assets/images/pdf.svg";
import { ReactComponent as Download } from "../../assets/images/download.svg";
import NewsListBox from "../../components/NewsListBox/NewsListBox";
import FileAndDownloadTable from "../../components/Common/FileAndDownloadTable";

const ActRegulation = () => {
  let acts = [
    {
      id: "1",
      file: "",
      fileName: "Postal Act, 2019.pdf",
      description: "हुलाक ऐन, २०१९",
      date: "02/19/2019 10:33"
    },
    {
      id: "1",
      file: "",
      fileName: "Interior Post Goods Insurance Regulation, 2019.pdf",
      description: "आन्तरिक-हुलाक-वस्तु-बीमा गर्ने ऐन २०१९",
      date: "02/19/2019 10:33"
    }
  ];
  let regulations = [
    {
      id: "1",
      file: "",
      fileName: "Postal Act, 2019.pdf",
      description: "हुलाक ऐन, २०१९",
      date: "02/19/2019 10:33"
    },
    {
      id: "1",
      file: "",
      fileName: "Interior Post Goods Insurance Regulation, 2019.pdf",
      description: "आन्तरिक-हुलाक-वस्तु-बीमा गर्ने ऐन २०१९",
      date: "02/19/2019 10:33"
    }
  ];

  return (
    <ActRegulationDiv>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="ACT & REGULATIONS" />
          <p className="lead">Download the attachments.</p>
          <FileAndDownloadTable
            header="Different Acts Related to Nepal Post"
            data={acts}
          />
          <FileAndDownloadTable
            header="Different Regulations Related to Nepal Post"
            data={regulations}
          />
        </Col>
        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </ActRegulationDiv>
  );
};

export default ActRegulation;

const ActRegulationDiv = styled.div`
  padding: 10px;
`;
