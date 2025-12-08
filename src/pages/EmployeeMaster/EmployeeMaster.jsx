// pages/EmployeeMaster.js

import React, { useState } from "react";
import Select from "react-select";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import "./employee-master.scss";

const allowanceOptions = [
  { value: "hra", label: "HRA" },
  { value: "food", label: "Food" },
  { value: "da", label: "DA" },
  { value: "incentive", label: "Incentive" },
  { value: "bonus", label: "Attendance Bonus" },
  { value: "night", label: "Night Shift" },
];

const deductionOptions = [
  { value: "esi", label: "ESI" },
  { value: "pf", label: "PF" },
  { value: "tax", label: "Professional Tax" },
];

function EmployeeMaster() {
  const [empcode, setEmpcode] = useState("0001");
  const [name, setName] = useState("Nikhil");
  const [basic, setBasic] = useState("16000");
  const [pfNo, setPfNo] = useState("");
  const [esiNo, setEsiNo] = useState("");
  const [allowances, setAllowances] = useState([]);
  const [deductions, setDeductions] = useState([]);

  return (
    <div className="emp-wrapper">
      <Card className="emp-card shadow">
        <CardBody>
          <h2 className="title text-center mb-4">Employee Master</h2>

          <Form>
            <Row className="mb-3">
              <Col md={3}>
                <Label>Empcode</Label>
                <Input
                  type="select"
                  value={empcode}
                  onChange={(e) => setEmpcode(e.target.value)}
                >
                  <option>0001</option>
                  <option>0002</option>
                  <option>0003</option>
                </Input>
              </Col>

              <Col md={5}>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={3}>
                <Label>Basic Salary</Label>
                <Input
                  type="number"
                  value={basic}
                  onChange={(e) => setBasic(e.target.value)}
                />
              </Col>

              <Col md={3}>
                <Label>PF NO</Label>
                <Input
                  type="text"
                  value={pfNo}
                  onChange={(e) => setPfNo(e.target.value)}
                />
              </Col>

              <Col md={3}>
                <Label>ESI NO</Label>
                <Input
                  type="text"
                  value={esiNo}
                  onChange={(e) => setEsiNo(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-4">
                <Label>Select Allowance</Label>
                <Select
                  options={allowanceOptions}
                  isMulti
                  value={allowances}
                  onChange={setAllowances}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Choose Allowances"
                />
              </Col>

              <Col md={6}>
                <Label>Select Deduction</Label>
                <Select
                  options={deductionOptions}
                  isMulti
                  value={deductions}
                  onChange={setDeductions}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Choose Deductions"
                />
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default EmployeeMaster;
