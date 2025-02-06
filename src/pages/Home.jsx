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
   <>
   <Fragment>
      <SliderHome />
      <Wrapper />
      <hr></hr>
      <Section
        title="Big Discount"
      
        productItems={discoutProducts}
      /> <hr></hr>
      <Section
        title="New Arrivals"
        
        productItems={newArrivalData}
      />
       <hr></hr>
      <Section title="Best Sales" 
      bgColor=""
       productItems={salebest} />
    </Fragment></>
  );
};

export default Home;
