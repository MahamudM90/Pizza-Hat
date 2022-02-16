export const getQuantity = (basket) => {
  let quantity = 0;
  basket.map((item) => {
    return (quantity += item.quantity);
  });
  return quantity;
};
