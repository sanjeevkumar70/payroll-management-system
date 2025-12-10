// pages/Process.js

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
import "./process.scss";

function Process() {
  const [fromDate, setFromDate] = useState("2025-12-10");
  const [toDate, setToDate] = useState("2025-12-10");

  const [empFrom, setEmpFrom] = useState("EM123");
  const [empTo, setEmpTo] = useState("EM223");
  const [allEmployees, setAllEmployees] = useState(false);

  const [contractorCode, setContractorCode] = useState("C323");
  const [allContractor, setAllContractor] = useState(false);

  return (
    <div className="process-wrapper">
      <Card className="process-card shadow">
        <CardBody>
          <h2 className="title text-center mb-4">Process</h2>

          {/* DATE RANGE */}
          <Row className="mb-4">
            <Col md={2}>
              <Label>From Date</Label>
            </Col>
            <Col md={3}>
              <Input
               placeholder="Select Date"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </Col>

            <Col md={2}>
              <Label>To Date</Label>
            </Col>
            <Col md={3}>
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </Col>

            <Col md={2} className="d-flex align-items-end">
              <button  className="custom-btn">
                Process
              </button>
            </Col>
          </Row>

          {/* EMPLOYEE SELECTION */}
          <h5 className="section-title mt-4">Employee Selection</h5>
          <Row className="mb-4 mt-3">
            <Col md={2}>
              <Label>EMP From Code</Label>
            </Col>
            <Col md={3}>
              <Input
                type="text"
                value={empFrom}
                onChange={(e) => setEmpFrom(e.target.value)}
              />
            </Col>

            <Col md={2}>
              <Label>EMP To Code</Label>
            </Col>
            <Col md={3}>
              <Input
                type="text"
                value={empTo}
                onChange={(e) => setEmpTo(e.target.value)}
              />
            </Col>

            <Col md={2} className="d-flex align-items-center">
              <Input
                type="checkbox"
                checked={allEmployees}
                onChange={(e) => setAllEmployees(e.target.checked)}
              />
              <Label className="ms-2">All Employees</Label>
            </Col>
          </Row>

          {/* CONTRACTOR SELECTION */}
          <h5 className="section-title">Contractor Selection</h5>

          <Row className="mt-3 mb-2">
            <Col md={2}>
              <Label>Contractor Code</Label>
            </Col>

            <Col md={3}>
              <Input
                type="select"
                value={contractorCode}
                onChange={(e) => setContractorCode(e.target.value)}
              >
                <option>C323</option>
                <option>C123</option>
                <option>C999</option>
              </Input>
            </Col>

            <Col md={3} className="d-flex align-items-center">
              <Input
                type="checkbox"
                checked={allContractor}
                onChange={(e) => setAllContractor(e.target.checked)}
              />
              <Label className="ms-2">All Contractor</Label>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default Process;
