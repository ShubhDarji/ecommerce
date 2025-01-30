import Select from "react-select";
import { products } from "../utils/products";

const options = [
  { value: "Fridge", label: "Fridge" },
  { value: "ac", label: "Air Conditioner" },
  { value: "washing-machine", label: "Washing Machine" },
  { value: "cooler", label: "Cooler" },
  { value: "Oven", label: "Microwave Oven" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectedOption) => {
    if (selectedOption) {
      const filteredProducts = products.filter(
        (item) => item.category === selectedOption.value
      );
      setFilterList(filteredProducts);
    } else {
      setFilterList(products); // Reset to all products if no filter is selected
    }
  };

  return (
    <Select
      options={options}
      placeholder="Filter By Category"
      styles={customStyles}
      onChange={handleChange}
      isClearable // Allows clearing the selection
    />
  );
};

export default FilterSelect;
