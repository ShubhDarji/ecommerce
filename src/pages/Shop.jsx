import { useState, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {products} from "../utils/products"; // Assuming this is the products array
import ShopList from "../components/ShopList"; // Component to list products
import Banner from "../components/Banner/Banner"; // Banner component
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"; // Custom hook
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import "./shop.css"

const Shop = () => {
  const [filterList, setFilterList] = useState(products); // Initial product list
  const [activeCategory, setActiveCategory] = useState("All"); // Active category state

  // Get unique categories for filter buttons
const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];
  useWindowScrollToTop(); // Ensure the page scrolls to the top on load

  const prices = products.map((p) => p.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
  // Function to filter products by category/* 
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilterList(products); // Show all products
    } else {
      setFilterList(products.filter((item) => item.category === category)); // Filter products by category
    }
  }; 

  return (
    <Fragment><div className="main_cont">
      <FilterSelect setFilterList={setFilterList} products={products} />
<SearchBar setFilterList={setFilterList} products={products }  />


      
      <section className="filter-bar py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} className="text-center mb-4">
              {/* Category Filter Buttons */}
             {/*  <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-button ${activeCategory === category ? "active" : ""}`}
                    onClick={() => filterByCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div> */}
            </Col>
          </Row>
          <Row>
            {/* Product List */}
            <Col>
              <ShopList productItems={filterList} />
            </Col>
          </Row>
        </Container>
        
      </section></div>
    </Fragment>
  );
};

export default Shop;
