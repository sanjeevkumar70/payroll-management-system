// pages/Configuration.js

import "./configuration.scss";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Card, CardBody, Row, Col, Input, Label, Button } from "reactstrap";

function Configuration() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // 🟩 ONE OBJECT FOR ALL FIELDS
  const [formData, setFormData] = useState({
    dbPath: "C:\\PRINTWEBMIS\\Webmis",
    server: "",
    database: "Webmis",
    password: ""
  });

  // 🟦 UNIVERSAL HANDLER FOR ALL INPUTS
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // SAVE BUTTON
  const handleSave = () => {
    console.log("Configuration Saved:", formData);
    alert("Configuration Saved Successfully!");
  };

  return (
    <div className="config-wrapper">
      <Card className="config-card shadow">
        <CardBody>
          <h2 className="title text-center mb-4">Configuration</h2>

          {/* DATABASE PATH */}
          <Row className="mb-5 align-items-center">
            <Col md={3}>
              <Label>Database Path</Label>
            </Col>
            <Col md={7}>
              <Input
                type="text"
                className="form-input"
                value={formData.dbPath}
                onChange={(e) => handleChange("dbPath", e.target.value)}
              />
            </Col>
          </Row>

          {/* SECTION TITLE */}
          <h4 className="sub-title mb-4">SQL Server Database</h4>

          {/* SERVER NAME */}
          <Row className="mb-4 align-items-center">
            <Col md={3}>
              <Label>Server</Label>
            </Col>
            <Col md={7}>
              <Input
                type="text"
                value={formData.server}
                className="form-input"
                placeholder="Server Name"
                onChange={(e) => handleChange("server", e.target.value)}
              />
            </Col>
          </Row>

          {/* DATABASE NAME */}
          <Row className="mb-4 align-items-center">
            <Col md={3}>
              <Label>Database</Label>
            </Col>
            <Col md={7}>
              <Input
                type="text"
                className="form-input"
                value={formData.database}
                onChange={(e) => handleChange("database", e.target.value)}
              />
            </Col>
          </Row>

          {/* PASSWORD */}
          <Row className="mb-4 align-items-center">
            <Col md={3}>
              <Label>Password</Label>
            </Col>

            <Col md={7} className="password-wrapper">
              <Input
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                placeholder="********"
                className="password-input form-input"
                onChange={(e) => handleChange("password", e.target.value)}
              />

              <span
                className="toggle-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <BsEyeSlash /> : <BsEye />}
              </span>
            </Col>
          </Row>

          {/* SAVE BUTTON */}
          <Row>
            <Col md={12} className="mt-3">
              <button className="custom-btn" onClick={handleSave}>
                Save Configuration
              </button>
            </Col>
          </Row>

        </CardBody>
      </Card>
    </div>
  );
}

export default Configuration;
