import "./pfmaster.scss";
import React, { useState } from "react";
import {  Card,  CardBody,  Row,  Col,  Input,  Label,  Table,  Modal,  ModalHeader,  ModalBody,} from "reactstrap";

const allowanceList = ["Professional tax","HRA", "Food", "DA", "Incentive", "Attendance Bonus"];

function PFMaster() {
  const [type, setType] = useState("fixed");
  const [period, setPeriod] = useState("perDay");
  const [fixedValue, setFixedValue] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const [selectedAllowance, setSelectedAllowance] = useState("Professional tax");

  const [tableData, setTableData] = useState([
    { name: "HRA", period: "Month", type: "Percentage", value: "2.75%" },
    { name: "Food", period: "Per Day", type: "Fixed", value: "1200" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  // 👉 Add New Row
  const handleAdd = () => {
    let value = type === "fixed" ? fixedValue : `${percentageValue}%`;

    if (!value) {
      alert("Please enter a value before adding");
      return;
    }

    const newEntry = {
      name: selectedAllowance,
      period: period === "perDay" ? "Per Day" : "Month",
      type: type === "fixed" ? "Fixed" : "Percentage",
      value: value,
    };

    setTableData([...tableData, newEntry]);

    // Clear input fields
    setFixedValue("");
    setPercentageValue("");
  };

  return (
    <div className="allowance-wrapper">
      <Card className="allowance-card shadow">
        <CardBody>
          <h2 className="title text-center mb-4">PF Master</h2>

          {/* SELECT ALLOWANCE */}
          <Row className="mb-3">
            <Col md={3}>
              <Label>Select Allowance</Label>
            </Col>
            <Col md={4}>
              <Input
                type="select"
                className="select-input"
                value={selectedAllowance}
                onChange={(e) => setSelectedAllowance(e.target.value)}
              >
                {allowanceList.map((alw) => (
                  <option key={alw}>{alw}</option>
                ))}
              </Input>
            </Col>
          </Row>

          {/* PER DAY / MONTH */}
          <Row className="mb-3">
            <Col md={12} className="d-flex">
              <Label className="period-label">
                <Input
                  type="checkbox"
                  checked={period === "perDay"}
                  onChange={() => setPeriod("perDay")}
                />
                Per Day
              </Label>

              <Label className="period-label ms-4">
                <Input
                  type="checkbox"
                  checked={period === "month"}
                  onChange={() => setPeriod("month")}
                />
                Month
              </Label>
            </Col>
          </Row>

          {/* TYPE - FIXED / PERCENTAGE */}
          <Row className="mb-4">
            <Col md={8} className="d-flex align-items-center">
              {/* FIXED */}
              <Label className="radio-label me-3">
                <Input
                  type="radio"
                  name="type"
                  checked={type === "fixed"}
                  onChange={() => setType("fixed")}
                />
                Fixed
              </Label>

              {type === "fixed" && (
                <Input
                  type="text"
                  className="form-input"
                  placeholder="Enter amount"
                  value={fixedValue}
                  onChange={(e) => setFixedValue(e.target.value)}
                />
              )}

              {/* PERCENTAGE */}
              <Label className="radio-label ms-4 me-3">
                <Input
                  type="radio"
                  name="type"
                  checked={type === "percentage"}
                  onChange={() => setType("percentage")}
                />
                Percentage
              </Label>

              {type === "percentage" && (
                <>
                  <Input
                    type="text"
                    className="form-input"
                    placeholder="Enter %"
                    value={percentageValue}
                    onChange={(e) => setPercentageValue(e.target.value)}
                  />
                </>
              )}
            </Col>
             <Col md={4}>
              <button className="custom-btn" onClick={handleAdd}>
               + Add New
              </button>
             </Col>
          </Row>

          {/* VIEW LIST BUTTON */}
          <button
            className="custom-btn mb-3"
            onClick={() => setModalOpen(true)}
          >
            View List
          </button>

          {/* TABLE */}
          <Table bordered className="data-table">
            <thead>
              <tr>
                <th>Allowance</th>
                <th>Period</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.period}</td>
                  <td>{row.type}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      {/* MODAL FOR VIEW LIST */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)} size="lg">
        <ModalHeader toggle={() => setModalOpen(false)}>
          Allowance List
        </ModalHeader>

        <ModalBody style={{ maxHeight: "400px", overflowY: "auto" }}>
          <Table bordered>
            <thead>
              <tr>
                <th>Allowance</th>
                <th>Period</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.period}</td>
                  <td>{row.type}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PFMaster;
