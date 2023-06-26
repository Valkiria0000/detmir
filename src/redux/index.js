import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";
import productsReducer from "./products/reducer";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    product: productReducer,
  },
});
