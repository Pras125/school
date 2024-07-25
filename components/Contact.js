// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Contact Us</h2>
          <p>School's address, contact numbers, email, and a contact form.</p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Our Location</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902251535565!2d90.39086541540691!3d23.750920484592906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8940b93f2e5%3A0xf0e02e1f7f4f4c10!2sDhaka%20University!5e0!3m2!1sen!2sbd!4v1614874409717!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
