import Hero from "components/Hero/Hero";
import Basket from "components/Basket/Basket";

//images
import HeroImage from "images/pizzabg.jpg";

const ShoppingBasket = () => {
  return (
    <>
      <Hero
        src={HeroImage}
        alt="Best Pizza in the UK!"
        align="flex-end"
        justify="center"
        textAlign="left"
        overlay
      ></Hero>
      <Basket />
    </>
  );
};

export default ShoppingBasket;
