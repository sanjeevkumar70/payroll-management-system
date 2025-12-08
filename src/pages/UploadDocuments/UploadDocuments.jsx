// pages/UploadDocuments.js

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  Button
} from "reactstrap";
import { BsDownload } from "react-icons/bs";
import "./UploadDocuments.scss";

function UploadDocuments() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2023", "2024", "2025", "2026"];

  const rows = [
    { label: "PF" },
    { label: "ESI" },
    { label: "Bank Statement" },
    { label: "Professional Tax Statement" },
    { label: "Other" }
  ];

  return (
    <div className="upload-wrapper">
      <Card className="upload-card shadow">
        <CardBody>
          <h2 className="title mb-4">Upload Documents</h2>

          {/* MONTH + YEAR */}
          <Row className="mb-4">
            <Col md={2}>
              <Input type="select">
                {months.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </Input>
            </Col>

            <Col md={2}>
              <Input type="select">
                {years.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </Input>
            </Col>
          </Row>

          {/* UPLOAD ROWS */}
          {rows.map((row, index) => (
            <Row className="upload-row mb-4 align-items-center" key={index}>
              {/* LABEL */}
              <Col md={3}>
                <Label className="row-label">{row.label}</Label>
              </Col>

              {/* TEXT FIELD */}
              <Col md={2}>
                <Input type="text" />
              </Col>

              {/* FILE INPUT */}
              <Col md={3} className="file-col">
                <Label className="choose-label">Choose File</Label>
                <Input type="file" className="file-input" />
              </Col>

              {/* UPLOAD BTN */}
              <Col md={2}>
                <Button color="success" className="upload-btn">
                  Upload
                </Button>
              </Col>

              {/* DOWNLOAD ICON */}
              <Col md={1}>
                <BsDownload className="download-icon" />
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default UploadDocuments;
