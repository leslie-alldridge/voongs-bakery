import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
export default class About extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col xs={4} md={4}>
          <Image id="aboutImg" src="/about.png" responsive circle />
        </Col>
        <Col xs={4} md={4}>
          Food &amp; Drink
        </Col>
        <Col xs={4} md={4}>
          Pricing
        </Col>
      </Row>
    );
  }
}
