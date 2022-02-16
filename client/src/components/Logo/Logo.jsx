import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">PIZZA PARTY</Link>
    </div>
  );
};

export default Logo;
