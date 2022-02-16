import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DesktopHeader.module.css";
import ContainerFlex from "components/ContainerFlex/ContainerFlex";
import ShoppingBasketButton from "components/ShoppingBasketButton/ShoppingBasketButton";
import Logo from "components/Logo/Logo";

const DesktopHeader = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current && ref.current.getBoundingClientRect().top <= 88) {
      setSticky(null);
    }
    if (ref.current && ref.current.getBoundingClientRect().bottom >= 88)
      return false;
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().bottom <= 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? styles.sticky : ""} ${styles.site_header}`}
      ref={ref}
      id="video_banner"
    >
      <ContainerFlex>
        <Logo />
        <div className={styles.site_header__nav_container}>
          <div className={styles.site_header__nav}>
            <Link to="/">Home</Link>
            <Link to="/pizzas">Pizzas</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <ShoppingBasketButton />
        </div>
      </ContainerFlex>
    </header>
  );
};

export default DesktopHeader;
