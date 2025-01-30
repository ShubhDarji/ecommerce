import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { products } from "../../utils/products"; // Import products data
import { Link } from "react-router-dom";const Wrapper = () => {
  // Extract unique brands from the products data
  const brands = [...new Set(products.map((product) => product.companyName))];

  return (
    <section className="container wrapper background d-flex ">
      <Container>
        <h2>Shop by Brands</h2>
        <Row>
          {/* Loop through the unique brands */}
          {brands.map((brand, index) => {
            // Filter products for the current brand to get the logo
            const brandProduct = products.find((product) => product.companyName === brand);
            return (
              <Col className="feature" key={index}>
                <Link to={`/brand/${brand.toLowerCase()}`}>
                <div className="icon">
                  {/* Replace with correct logo path */}
                  <img 
                    src={`/images/${brand.toLowerCase()}.png`} 
                    alt={brand} 
                  />
                </div>
                <h3>{brand}</h3></Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
