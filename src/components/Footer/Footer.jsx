import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="electricity"></ion-icon>
                  <h1>PowerMart</h1>
              </div>
              <p>Your one-stop destination for the latest and most reliable home appliances. Quality products at unbeatable prices!</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>FAQ</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Installation & Support</li>
                <li>Returns & Refunds</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>123 Electric Avenue, New York, NY 10012, USA</li>
                <li>Email: support@powermart.com</li>
                <li>Phone: +1 800 123 4567</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
