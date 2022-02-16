import { useState } from "react";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleHamburger = () => setOpen(!open);

  return (
    <div
      className={`${styles.hamburger} ${open ? styles.open : ""}`}
      onClick={() => toggleHamburger()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
