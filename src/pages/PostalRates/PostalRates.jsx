import React from "react";
import { PostalRatesSection } from "./PostalRates.styled";
import EachPageHeading from "../../components/Common/EachPageHeading";
import { Card, Col, Row, Table } from "react-bootstrap";
import Moment from "react-moment";

import NewsListBox from "../../components/NewsListBox/NewsListBox";
import FileAndDownloadTable from "../../components/Common/FileAndDownloadTable";

const PostalRates = () => {
  let postalRates = [
    {
      id: "1",
      file: "",
      fileName: "Nepali.pdf",
      description: "Nepali Rate",
      date:
        "Fri Feb 14 2020 23:08:03 GMT+1100 (Australian Eastern Daylight Time)"
    },
    {
      id: "1",
      file: "",
      fileName: "English.pdf",
      description: "English Rate",
      date:
        "Fri Feb 14 2019 23:08:03 GMT+1100 (Australian Eastern Daylight Time)"
    }
  ];
  return (
    <PostalRatesSection>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <EachPageHeading title="Postal Rates" />
          <p className="lead">Download the attachments.</p>
          <FileAndDownloadTable data={postalRates} />
        </Col>
        <Col>
          <NewsListBox title={`Notices & News`} />
          <NewsListBox />
          <NewsListBox />
          <NewsListBox />
        </Col>
      </Row>
    </PostalRatesSection>
  );
};

export default PostalRates;
