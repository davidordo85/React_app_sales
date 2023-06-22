import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// TODO: queda decidir que se verá aqui

function Footer() {
  return (
    <footer className="text-light py-4" style={{ backgroundColor: '#00ADB5' }}>
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2023 My Company. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p className="mb-0">Address, City, Country</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
