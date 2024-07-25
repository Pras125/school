// src/components/Faculty.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function Faculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    axios.get('/api/faculty')
      .then(response => setFaculty(response.data))
      .catch(error => console.error('Error fetching faculty:', error));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Faculty</h2>
          <Row>
            {faculty.map(member => (
              <Col md={4} key={member.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>
                      {member.qualification}
                      <br />
                      {member.experience} years of experience
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Faculty;
