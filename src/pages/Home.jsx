import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts, newdata, salebest } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import './Home.css'
const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "oven" || item.category === "ac"
  );

const bestSale = products.filter((item) => item.category === "tv");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" 
      bgColor="#f6f9fc"
       productItems={bestSale} />
    </Fragment>
  );
};

export default Home;
