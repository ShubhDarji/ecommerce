import { useState, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { products } from "../utils/products"; // Assuming this is the products array
import ShopList from "../components/ShopList"; // Component to list products
import Banner from "../components/Banner/Banner"; // Banner component
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"; // Custom hook
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import "../index.css"

const Shop = () => {
  const [filterList, setFilterList] = useState(products); // Initial product list
  const [activeCategory, setActiveCategory] = useState("All"); // Active category state

  // Get unique categories for filter buttons
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  useWindowScrollToTop(); // Ensure the page scrolls to the top on load

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
      <div className="search_container">
<SearchBar setFilterList={setFilterList} products={products }  />
<FilterSelect setFilterList={setFilterList} products={products} />
</div>
      
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
        
      </section>
    </Fragment>
  );
};

export default Shop;
