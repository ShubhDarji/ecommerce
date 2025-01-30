import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import './slidercard.css' // Import CSS for styling

const SlideCard = ({ title, desc, cover, buttonText = "Learn More" }) => {
  return (
    <div className="slide-card">
      <div className="slide-card-content" style={{ backgroundImage: `url(${cover})` }}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className="text-center">
              <h1 className="slide-card-title">{title}</h1>
              <p className="slide-card-desc">{desc}</p>
              <button className="slide-card-button">{buttonText}</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SlideCard;
