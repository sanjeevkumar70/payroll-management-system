// pages/Configuration.js

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Label
} from "reactstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./configuration.scss";

function Configuration() {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
                defaultValue="C:\\PRINTWEBMIS\\Webmis"
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
            <Col md={4}>
              <Input type="text" placeholder="Server Name" />
            </Col>
          </Row>

          {/* DATABASE NAME */}
          <Row className="mb-4 align-items-center">
            <Col md={3}>
              <Label>Database</Label>
            </Col>
            <Col md={4}>
              <Input type="text" placeholder="Webmis" />
            </Col>
          </Row>

          {/* PASSWORD */}
          <Row className="mb-4 align-items-center">
            <Col md={3}>
              <Label>Password</Label>
            </Col>

            <Col md={4} className="password-wrapper">
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="********"
                className="password-input"
              />
              <span
                className="toggle-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <BsEyeSlash /> : <BsEye />}
              </span>
            </Col>
          </Row>

        </CardBody>
      </Card>
    </div>
  );
}

export default Configuration;
