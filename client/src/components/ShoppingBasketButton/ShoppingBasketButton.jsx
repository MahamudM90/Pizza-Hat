import { useLocation } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import { getQuantity } from "utils/basketUtils";
import { useSelector } from "react-redux";
import { basketItems } from "store/slices/basket";
import { Link } from "react-router-dom";
import styles from "./ShoppingBasketButton.module.css";

const ShoppingBasketButton = () => {
  const basket = useSelector(basketItems);
  const location = useLocation();

  if (location.pathname === "/shopping-basket") return false;

  return (
    <div className={styles.site_header__basket}>
      <Link to="/shopping-basket" className={styles.site_header__basket_link}>
        <IoBag />
        <span className={styles.site_header__basket_quantity}>
          {getQuantity(basket)}
        </span>
      </Link>
    </div>
  );
};

export default ShoppingBasketButton;
