import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero";
import { ButtonToElement } from "../components/Button/Button";
import HeroVideo from "../images/PizzaParty.mp4";
import PizzaList from "components/PizzaList/PizzaList";

//images

import HeroImage from "../images/videobg1.jpg";
import MobileImage from "../images/pizzabg.jpg";

const Home = ({ pizzas }) => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Helmet>
        <title>Pizza Party - Cardiff Pizza Company</title>
      </Helmet>
      <Hero
        src={HeroImage}
        mobileImg={MobileImage}
        alt="Best Pizza in the UK!"
        videoSrc={HeroVideo}
        title="Pizza Party"
        // subtitle="Finest Pizza Party in the UK"
        align="center"
        justify="center"
        textAlign="center"
        fullHeight
        overlay
      >
        <ButtonToElement scrollToEl="pizzas">Order Now</ButtonToElement>
      </Hero>
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default Home;
