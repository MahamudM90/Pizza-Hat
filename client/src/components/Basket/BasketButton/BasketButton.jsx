import { Link } from "react-router-dom";
import { IoMdPizza } from "react-icons/io";
import styles from "./BasketButton.module.css";
import { useSelector } from "react-redux";
import { basketItems } from "store/slices/basket";
import { getQuantity } from "utils/basketUtils";

const BasketButton = () => {
  const basket = useSelector(basketItems);

  // const getQuantity = () => {
  //   let quantity = 0;
  //   basket.map((item) => {
  //     return (quantity += item.quantity);
  //   });
  //   return quantity;
  // };

  return (
    <Link to="/shopping-basket">
      <div className={styles.basket_button} id="basket_button">
        <IoMdPizza />
        <div className={styles.basket_item_count}>{getQuantity(basket)}</div>
      </div>
    </Link>
  );
};

export default BasketButton;
