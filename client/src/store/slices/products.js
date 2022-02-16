import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { storeProducts } = products.actions;
export const productList = (state) => state.products.products;

export default products.reducer;
