import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./feautures/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
