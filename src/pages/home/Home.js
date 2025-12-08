// pages/Home.js

import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  BsPeopleFill,
  BsGearFill,
  BsBank2,
  BsFiles,
  BsClipboardCheck,
  BsCashStack
} from "react-icons/bs";
import "./home.scss";

function Home() {
  const items = [
    { title: "Employee Master", icon: <BsPeopleFill />, path: "/employee-master" },
    { title: "Allowance Master", icon: <BsCashStack />, path: "/allowance-master" },
    { title: "Deduction Master", icon: <BsClipboardCheck />, path: "/deduction-master" },
    { title: "Process", icon: <BsGearFill />, path: "/process" },
    { title: "Upload Documents", icon: <BsFiles />, path: "/upload-documents" },
    { title: "Configuration", icon: <BsBank2 />, path: "/configuration" },
  ];

  return (
    <div className="home-wrapper">
      <Card className="home-card shadow">
        <CardBody>
          <h2 className="title text-center mb-4">Payroll Management System</h2>
          <p className="sub-text text-center mb-5">
            Manage payroll operations seamlessly — Choose a module to begin.
          </p>

          {/* QUICK ACCESS CARDS */}
          <Row>
            {items.map((item, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                <div
                  className="module-card shadow-sm"
                  onClick={() => (window.location.href = item.path)}
                >
                  <div className="icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
