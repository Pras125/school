// src/components/Students.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Students() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Students</h2>
          <p>Information about student life, including extracurricular activities, clubs, and societies.</p>
          <h3>Achievements and Accolades</h3>
          <p>Achievements and accolades of the students.</p>
          <h3>Student Council</h3>
          <p>Information about student council and leadership opportunities.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Students;
