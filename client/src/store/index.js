import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "./slices/user";
import basket from "./slices/basket";
import products from "./slices/products";

const reducer = {
  user: user,
  basket: basket,
  products: products,
};

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
