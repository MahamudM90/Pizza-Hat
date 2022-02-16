import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromBasket } from "store/slices/basket";
import styles from "./RemoveItem.module.css";

const RemoveItem = ({ item, isMobile }) => {
  const dispatch = useDispatch();

  return (
    <span className={styles.basket_item__delete}>
      <button
        className={styles.basket_item__delete_btn}
        onClick={() => dispatch(removeFromBasket(item.name))}
      >
        <AiOutlineDelete /> {!isMobile && "Remove item"}
      </button>
    </span>
  );
};

export default RemoveItem;
