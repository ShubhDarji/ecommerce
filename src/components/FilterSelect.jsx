import Select from "react-select";
import { useState, useEffect } from "react";
import { products } from "../utils/products";

const FilterSelect = ({ setFilterList }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  useEffect(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))].map((cat) => ({
      value: cat,
      label: cat
    }));

    const uniqueBrands = [...new Set(products.map((p) => p.companyName))].map((brand) => ({
      value: brand,
      label: brand
    }));

    const prices = products.map((p) => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    setCategories(uniqueCategories);
    setBrands(uniqueBrands);
    setPriceRange([minPrice, maxPrice]);
  }, []);

  const handleFilterChange = (filterType, selectedOptions) => {
    let filtered = products;

    if (filterType === "category" && selectedOptions.length) {
      filtered = filtered.filter((p) => selectedOptions.some((opt) => opt.value === p.category));
    }

    if (filterType === "brand" && selectedOptions.length) {
      filtered = filtered.filter((p) => selectedOptions.some((opt) => opt.value === p.companyName));
    }

    if (filterType === "price") {
      filtered = filtered.filter((p) => p.price >= selectedOptions[0] && p.price <= selectedOptions[1]);
    }

    setFilterList(filtered);
  };

  return (
    <div>
      <h4>Category</h4>
      <Select
        options={categories}
        placeholder="Select Category"
        onChange={(selectedOptions) => handleFilterChange("category", selectedOptions)}
        isMulti
        isClearable
      />

      <h4>Brand</h4>
      <Select
        options={brands}
        placeholder="Select Brand"
        onChange={(selectedOptions) => handleFilterChange("brand", selectedOptions)}
        isMulti
        isClearable
      />

      <h4>Price Range</h4>
      <input
        type="range"
        min={priceRange[0]}
        max={priceRange[1]}
        onChange={(e) => handleFilterChange("price", [priceRange[0], parseInt(e.target.value, 10)])}
      />
      <span>₹{priceRange[0]} - ₹{priceRange[1]}</span>
    </div>
  );
};

export default FilterSelect;
