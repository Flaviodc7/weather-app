import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./Forecast.css";

const Forecast = () => {
  return (
    <Container className="box">
      <Row>
        <Col xs={12} md={4}>
          <div className="card"></div>
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex flex-column justify-content-between"
        ></Col>
      </Row>
    </Container>
  );
};

export default Forecast;
