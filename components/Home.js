// src/components/Home.js
import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Our School</h1>
          <p>A brief description of the school.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="path-to-image-1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="path-to-image-2"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Quick Links</h2>
          <Card>
            <Card.Body>
              <Card.Link as={Link} to="/about">About Us</Card.Link>
              <Card.Link as={Link} to="/academics">Academics</Card.Link>
              <Card.Link as={Link} to="/admissions">Admissions</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
