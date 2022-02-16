import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      // No idea what to do with this..
      const item = state.items.find((pizza) => pizza.name === payload.name);

      if (item) {
        state.items = state.items.map((pizza) =>
          pizza.name === payload.name
            ? {
                ...pizza,
                quantity: pizza.quantity + payload.quantity,
              }
            : pizza
        );
      } else {
        state.items.push(payload);
      }
    },
    removeFromBasket: (state, { payload }) => {
      state.items = state.items.filter((item) => item.name !== payload);
    },
    increaseQuantity: (state, { payload }) => {
      state.items = state.items.filter((item) =>
        item.name === payload
          ? {
              ...item,
              quantity: item.quantity++,
            }
          : item
      );
    },
    decreaseQuantity: (state, { payload }) => {
      if (payload.quantity === 1) {
        state.items = state.items.filter((item) => item.name !== payload.name);
      }
      state.items = state.items.filter((item) =>
        item.name === payload.name
          ? {
              ...item,
              quantity: item.quantity--,
            }
          : item
      );
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
} = basket.actions;
export const basketItems = (state) => state.basket.items;

export default basket.reducer;
