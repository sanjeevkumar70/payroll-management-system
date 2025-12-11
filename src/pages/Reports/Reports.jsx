// import "./process.scss";

import React, { useState } from "react";
import { Card, CardBody, Row, Col, Input, Label, Button } from "reactstrap";

function Report() {
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
          <h2 className="title text-center mb-4">Reports</h2>


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
                className="form-input"
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
                className="form-input"
                onChange={(e) => setEmpTo(e.target.value)}
              />
            </Col>

            <Col md={2} className="d-flex align-items-center">
              <Input
                type="checkbox"
                checked={allEmployees}
                className="form-input"
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
                className="form-input"
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
                className="form-input"
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

export default Report;
