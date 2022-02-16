import styles from "./Button.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Button = ({ children, to }) => {
  return (
    <Link className={styles.button} to={to}>
      {children}
    </Link>
  );
};

export default Button;

export const ButtonToElement = ({ children, scrollToEl }) => {
  return (
    <HashLink
      className={styles.button}
      to={`/#${scrollToEl}`}
      data-uk-scroll
      id="js-scroll-trigger"
    >
      {children}
    </HashLink>
  );
};
