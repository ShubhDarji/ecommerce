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
    <Fragment>
    <Container fluid>
      <Row>
        {/* Sidebar Filters (Left) */}
        <Col md={3} className="filter-sidebar">
          <div className="filter-section">
            <h3>Filters</h3>
            <SearchBar setFilterList={setFilterList} products={products} />
            <FilterSelect setFilterList={setFilterList} products={products} />
          </div>
        </Col>

        {/* Product Listing (Right) */}
        <Col md={9} className="product-section">
          <h2>All Products</h2>
          <ShopList productItems={filterList} />
        </Col>
      </Row>
    </Container>
  </Fragment>
);
};

export default Shop;
