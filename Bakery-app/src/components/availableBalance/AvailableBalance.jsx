import React from "react";
import UiLayout from "../../features/uiComponents/UiLayout";
import { Col, Row } from "react-bootstrap";

function AvailableBalance() {
  return (
    <div className="c-body">
      <UiLayout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Row style={{ width: "100%" }}>
            <Col lg="6">
              <div className="text-center mb-4 xxxl fw-xl">2300</div>
              <div className="text-center lg fw-md">Available Balance</div>
            </Col>

            <Col lg="6">
              <div className="text-center mb-4 xxxl fw-xl">456</div>
              <div className="text-center lg fw-md">Total Amount Spent</div>
            </Col>
          </Row>
        </div>
      </UiLayout>
    </div>
  );
}

export default AvailableBalance;
