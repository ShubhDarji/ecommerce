import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={5} sm={9} className='box'>
              
          
              <p>Your one-stop destination for the latest and most reliable home appliances. Quality products at unbeatable prices!</p>
            </Col>
            <Col md={4} sm={3} className='box'>
              <h2>About Us</h2>
              <ul>
           
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
                <li>Sell With us</li>
                <li>Returns & Refunds</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Thi is you adddress ,where you can reach me</li>
                <li>Email: shubhdarji7743@gmail.com</li>
                <li>Phone: +91 76210 79669</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
