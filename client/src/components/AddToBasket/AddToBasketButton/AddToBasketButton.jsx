import { IoBag } from "react-icons/io5";

import styles from "./AddToBasketButton.module.css";

const AddToBasketButton = ({ addItem }) => {
  return (
    <button className={styles.add_to_basket__button} onClick={() => addItem()}>
      <span>Add to cart</span>
      <IoBag />
    </button>
  );
};

export default AddToBasketButton;
