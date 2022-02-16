import styles from "./QuantityButtons.module.css";

const QuantityButtons = ({ increment, decrement, count }) => {
  const showCount = <span className={styles.quantity}>{count}</span>;

  return (
    <div className={styles.quantity_buttons}>
      <button className={styles.quantity_button} onClick={() => decrement()}>
        -
      </button>
      {count && showCount}
      <button className={styles.quantity_button} onClick={() => increment()}>
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
