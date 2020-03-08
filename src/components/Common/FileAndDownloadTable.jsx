import React from "react";
import { Table } from "react-bootstrap";
import Moment from "react-moment";
import { ReactComponent as Pdf } from "../../assets/images/pdf.svg";
import { ReactComponent as Download } from "../../assets/images/download.svg";
const FileAndDownloadTable = ({ header, data }) => {
  return (
    <div>
      {header && <h4 style={{ textAlign: "center" }}>{header}</h4>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>File</th>
            <th>Description</th>
            <th>Download</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <Pdf width={40} height={40} className="mr-1" />
                  <span style={{ fontSize: "12px" }}>{item.fileName}</span>
                </td>
                <td>{item.description}</td>
                <td>
                  <Download width={40} height={40} className="mr-1" />
                  <span style={{ fontSize: "12px" }}>{item.fileName}</span>
                </td>
                <td>
                  <Moment fromNow>{item.date}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FileAndDownloadTable;
