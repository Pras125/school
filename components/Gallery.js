// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function Gallery() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/gallery')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching gallery:', error));
  }, []);

  const filteredEvents = events.filter(event => event.type.includes(filter));

  return (
    <Container>
      <Row>
        <Col>
          <h2>Gallery</h2>
          <div>
            <Button onClick={() => setFilter('')}>All</Button>
            <Button onClick={() => setFilter('Sports')}>Sports</Button>
            <Button onClick={() => setFilter('Cultural')}>Cultural</Button>
            <Button onClick={() => setFilter('Academic')}>Academic</Button>
          </div>
          <Row>
            {filteredEvents.map(event => (
              <Col md={4} key={event.id}>
                <Card>
                  <Card.Img variant="top" src={event.imageUrl} />
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>{event.date}</Card.Text>
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

export default Gallery;
