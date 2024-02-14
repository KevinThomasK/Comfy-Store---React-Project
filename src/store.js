import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./feautures/cart/cartSlice";
import userReducer from "./feautures/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
