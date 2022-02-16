import { Link } from "react-router-dom";
import styles from "./Toast.module.css";

const Toast = ({ name, image, price, count }) => {
  //   const { name, image, price } = pizza;
  return (
    <div className={styles.toast}>
      <img src={image} alt={name} width="50" height="50" />
      <div className={styles.toast_details}>
        <Link to="/shopping-basket">
          <strong>
            {count} x {name} £{(count * price).toFixed(2)}
          </strong>
        </Link>
        <i>Successfuly added to basket</i>
      </div>
    </div>
  );
};

export default Toast;
