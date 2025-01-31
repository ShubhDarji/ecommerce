import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";

const SliderHome = () => {
  const settings = {
    dots: true,  // Enables navigation dots
    arrows: true,  // Hides navigation arrows
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,  // Adjusted autoplay speed for smooth transitions
    fade: true,  // Adds a fade effect for a premium look
    pauseOnHover: false,
    
  };

  return (
    <section className="homeSlide">
      <Container>
        <Slider {...settings}>
          {SliderData.map((item, index) => (
            <SlideCard key={index} title={item.title} cover={item.cover} desc={item.desc} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;
