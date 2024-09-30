import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/store/slices/productsSlice";
import ordersReducer from "@/store/slices/ordersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      orders: ordersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
