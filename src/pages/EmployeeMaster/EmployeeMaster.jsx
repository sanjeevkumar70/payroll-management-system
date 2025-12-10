// pages/EmployeeMaster.js

import "./employee-master.scss";
import Select from "react-select";
import React, { useState } from "react";
import { Card, CardBody, Form, Label, Input, Row, Col, } from "reactstrap";

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
  const [formData, setFormData] = useState({
    empcode: "0001",
    name: "Nikhil",
    basic: "16000",
    pfNo: "",
    esiNo: "",
    allowances: [],
    deductions: [],
  });

  // UNIVERSAL HANDLER FOR ALL FIELDS
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSave = () => {
    console.log("Configuration Saved:", formData);
    alert("Configuration Saved Successfully!");
  };
  return (
    <div className="emp-wrapper">
      <Card className="emp-card shadow">
        <CardBody>
          <h2 className="title text-center mb-4">Employee Master</h2>

          <Form>
            <Row className="mb-3">
              <Col md={4}>
                <Label>Empcode</Label>
                <Input
                  type="select"
                  className="select-input"
                  value={formData.empcode}
                  onChange={(e) => handleChange("empcode", e.target.value)}
                >
                  <option>0001</option>
                  <option>0002</option>
                  <option>0003</option>
                </Input>
              </Col>

              <Col md={4}>
                <Label>Name</Label>
                <Input
                  type="text"
                  className="select-input"
                  value={formData.name}
                  placeholder="Enter name"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={4}>
                <Label>Basic Salary</Label>
                <Input
                  type="number"
                  className="form-input"
                  value={formData.basic}
                  onChange={(e) => handleChange("basic", e.target.value)}
                />
              </Col>

              <Col md={4}>
                <Label>PF No</Label>
                <Input
                  type="text"
                  className="form-input"
                  value={formData.pfNo}
                  onChange={(e) => handleChange("pfNo", e.target.value)}
                />
              </Col>

              <Col md={4}>
                <Label>ESI No</Label>
                <Input
                  type="text"
                  className="form-input"
                  value={formData.esiNo}
                  onChange={(e) => handleChange("esiNo", e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-4">
                <Label>Select Allowance</Label>
                <Select
                  isMulti
                  options={allowanceOptions}
                  value={formData.allowances}
                  className="select-input"
                  classNamePrefix="react-select"
                  placeholder="Choose Allowances"
                  onChange={(selected) => handleChange("allowances", selected)}
                />
              </Col>

              <Col md={6}>
                <Label>Select Deduction</Label>
                <Select
                  isMulti
                  options={deductionOptions}
                  value={formData.deductions}
                  className="select-input"
                  classNamePrefix="react-select"
                  placeholder="Choose Deductions"
                  onChange={(selected) => handleChange("deductions", selected)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mt-3">
                <button className="custom-btn" onClick={handleSave}>
                  Save employee data
                </button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default EmployeeMaster;
