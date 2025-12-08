import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  Button,
  Table,
} from "reactstrap";
import "./pfmaster.scss";

const allowanceList = ["HRA", "Food", "DA", "Incentive", "Attendance Bonus"];

function PFMaster() {
  const [selectedAllowance, setSelectedAllowance] = useState("DA");
  const [period, setPeriod] = useState("perDay");
  const [type, setType] = useState("fixed");
  const [fixedValue, setFixedValue] = useState("");
  const [percentageValue, setPercentageValue] = useState("");

  const tableData = [
    { name: "HRA", type: "Percentage", value: "2.75%" },
    { name: "Food", type: "Fixed", value: "1200" },
  ];

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
            <Col md={12}>
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
            <Col md={12} className="d-flex align-items-center">
              {/* Fixed */}
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
                  type="number"
                  className="value-input"
                  placeholder="Enter amount"
                  value={fixedValue}
                  onChange={(e) => setFixedValue(e.target.value)}
                />
              )}

              {/* Percentage */}
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
                    type="number"
                    className="value-input"
                    placeholder="Enter %"
                    value={percentageValue}
                    onChange={(e) => setPercentageValue(e.target.value)}
                  />
                  <span className="percent-symbol">%</span>
                </>
              )}

              {/* ADD NEW BUTTON */}
              <Button color="primary" className="add-btn ms-4">
                + Add New
              </Button>
            </Col>
          </Row>

          {/* VIEW LIST BUTTON */}
          <Button color="secondary" className="view-btn mb-3">
            View List
          </Button>

          {/* TABLE */}
          <Table bordered className="data-table">
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default PFMaster;
