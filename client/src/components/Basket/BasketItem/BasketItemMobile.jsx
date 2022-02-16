import BasketItemTotal from "components/Basket/BasketItemTotal/BasketItemTotal";
import RemoveItem from "./RemoveItem/RemoveItem";
import styles from "./BasketItemMobile.module.css";

const BasketItemMobile = ({ item }) => {
  if (!item) {
    console.error("Error in BasketItemMobile component");
    console.error('Prop "item" does not exist in BasketItemMobile component');
    return false;
  }

  return (
    <article className={styles.basket_item__mobile}>
      <img
        src={item.image}
        alt={item.name}
        className={styles.basket_item__image}
      />
      <div className={styles.basket_item__details}>
        <h2 className={styles.basket_item__title}>{item.name}</h2>
        <p className={styles.basket_item__price}>
          {item.quantity} x £{item.price}
        </p>
      </div>

      <BasketItemTotal
        item={item}
        quantity={item.quantity}
        style={{ marginLeft: "auto" }}
      />
      <div className={styles.basket_item__delete}>
        <RemoveItem item={item} isMobile />
      </div>
    </article>
  );
};

export default BasketItemMobile;
