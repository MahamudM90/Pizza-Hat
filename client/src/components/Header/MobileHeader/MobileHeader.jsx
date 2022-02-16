import Hamburger from "./Hamburger/Hamburger";
import Logo from "components/Logo/Logo";
import styles from "./MobileHeader.module.css";

const MobileHeader = () => {
  return (
    <header className={styles.mobile_header}>
      <Logo />
      <Hamburger />
    </header>
  );
};

export default MobileHeader;
