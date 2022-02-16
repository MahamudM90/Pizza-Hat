import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import { basketItems } from "store/slices/basket";
import BasketItem from "./BasketItem/BasketItem";
import BasketItemMobile from "./BasketItem/BasketItemMobile";
import { Link } from "react-router-dom";

const Basket = () => {
  const basket = useSelector(basketItems);

  if (!basket) {
    console.error(
      "basket selector is not returning any valid item in the Basket component"
    );
    return false;
  }

  const getBasketQuantity = () => {
    if (!basket || basket.length === 0) return "0 items";
    let qty = 0;
    basket.forEach((item) => (qty += item.quantity));
    if (qty === 1) {
      return `${qty} item`;
    } else {
      return `${qty} items`;
    }
  };

  const getBasketTotal = () => {
    if (basket.length === 0) return false;
    let total = 0;
    basket.forEach((item) => {
      if (!item.price || !item.quantity) {
        console.error(
          "No items returned in getBasketTotal function of Basket component"
        );
        return false;
      }
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
    });

    return `£${total.toFixed(2)}`;
  };

  const renderItems = () => {
    if (!basket) return `Error rendering cart items`;
    if (basket.length === 0)
      return (
        <div className={styles.cart_empty}>
          <h2>Your basket is empty, please add an item to check out</h2>
          <Link className={styles.cart_empty__btn} to="/">
            Back to the pizza party
          </Link>
        </div>
      );
    return basket.map((item) => {
      return (
        <div key={item.name}>
          <BasketItem item={item} />
          <BasketItemMobile item={item} />
        </div>
      );
    });
  };

  const checkout = basket.length !== 0 && (
    <div className={styles.basket_items__checkout}>
      <Link to="/checkout">Continue to Checkout</Link>
    </div>
  );

  const total = basket.length !== 0 && (
    <div className={styles.basket_items__total_price}>
      <span>Total:</span>
      <p>{getBasketTotal()}</p>
    </div>
  );

  return (
    <section className={styles.basket_items}>
      <div className={styles.basket_items__title_container}>
        <h1 className={styles.basket_items__title}>
          Your Basket <small>({getBasketQuantity()})</small>
        </h1>
        {total}
      </div>
      <div
        className={basket.length !== 0 ? styles.basket_items__container : ""}
      >
        {renderItems()}
      </div>
      {checkout}
    </section>
  );
};

export default Basket;
