import { useState } from "react";
import { products } from "../../utils/products";

const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    const keyword = e.target.value;
    setSearchWord(keyword);
    const filtered = products.filter((item) =>
      item.productName.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilterList(filtered);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." value={searchWord} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
