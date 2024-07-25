// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>About Us</h2>
          <p>Information about the school's history, vision, mission, and values.</p>
          <h3>Message from the Principal</h3>
          <p>A message from the principal.</p>
          <h3>Infrastructure and Facilities</h3>
          <p>Information about the school's infrastructure and facilities.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
