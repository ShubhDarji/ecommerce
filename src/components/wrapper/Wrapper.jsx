import React from "react";
import "./style.css"; // External CSS
import { products } from "../../utils/products"; // Import products data
import { Link } from "react-router-dom";

const Wrapper = () => {
  // Extract unique brands from the products data
  const brands = [...new Set(products.map((product) => product.companyName))];

  return (
    <section className="wrapper">
      <div className="wrapper-container">
        <h2>Shop by Brands</h2>
        <div className="brand-grid">
          {brands.map((brand, index) => {
            const brandProduct = products.find((product) => product.companyName === brand);
            return (
              <div className="brand-item" key={index}>
                <Link to={`/brand/${brand.toLowerCase()}`} className="brand-link">
                  <div className="brand-icon">
                    <img src={`/images/${brand.toLowerCase()}.png`} alt={brand} />
                  </div>
                  <h3>{brand}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
