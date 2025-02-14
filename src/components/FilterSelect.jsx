import Select from "react-select";
import { useState, useEffect } from "react";
import { products } from "../utils/products";
import "./filter.css";

const FilterSelect = ({ setFilterList }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([0, 100000]);

  useEffect(() => {
    // Get Unique Categories & Brands
    setCategories(
      [...new Set(products.map((p) => p.category))].map((cat) => ({
        value: cat,
        label: cat,
      }))
    );

    setBrands(
      [...new Set(products.map((p) => p.companyName))].map((brand) => ({
        value: brand,
        label: brand,
      }))
    );

    // Get Price Range
    const prices = products.map((p) => p.price);
    setPriceRange([Math.min(...prices), Math.max(...prices)]);
    setSelectedPrice([Math.min(...prices), Math.max(...prices)]);
  }, []);

  // Function to apply all filters
  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length) {
      filtered = filtered.filter((p) =>
        selectedCategories.some((opt) => opt.value === p.category)
      );
    }

    if (selectedBrands.length) {
      filtered = filtered.filter((p) =>
        selectedBrands.some((opt) => opt.value === p.companyName)
      );
    }

    filtered = filtered.filter(
      (p) => p.price >= selectedPrice[0] && p.price <= selectedPrice[1]
    );

    setFilterList(filtered);
  }, [selectedCategories, selectedBrands, selectedPrice, setFilterList]);

  return (
    <div className="filter-container">
      <h4>Category</h4>
      <Select
        options={categories}
        placeholder="Select Category"
        value={selectedCategories}
        onChange={setSelectedCategories}
        isMulti
        isClearable
      />

      <h4>Brand</h4>
      <Select
        options={brands}
        placeholder="Select Brand"
        value={selectedBrands}
        onChange={setSelectedBrands}
        isMulti
        isClearable
      />

      <h4>Price Range</h4>
      <input
        type="range"
        min={priceRange[0]}
        max={priceRange[1]}
        value={selectedPrice[1]}
        onChange={(e) =>
          setSelectedPrice([priceRange[0], parseInt(e.target.value, 10)])
        }
      />
      <span>₹{selectedPrice[0]} - ₹{selectedPrice[1]}</span>
    </div>
  );
};

export default FilterSelect;
