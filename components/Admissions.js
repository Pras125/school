// src/components/Admissions.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Admissions() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Admissions</h2>
          <p>Information about the admission process and criteria.</p>
          <Button href="path-to-admission-form" download>Download Admission Form</Button>
          <h3>Important Dates and Deadlines</h3>
          <p>Information about important dates and deadlines for admission.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Admissions;
