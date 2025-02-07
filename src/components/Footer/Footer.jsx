import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="footer-section">
            <h4>About Us</h4>
            <p>Your one-stop destination for the latest and most reliable home appliances. Quality products at unbeatable prices!</p>
          </Col>
          <Col md={3} className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Careers</li>
              <li>Partners</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: shubhdarji7743@gmail.com</p>
            <p>Phone: +91 76210 79669</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
