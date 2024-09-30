import { IOrderState } from "@/types";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  orders: [],
  loading: false,
  errors: false,
} as IOrderState;

const ordersSlice = createSliceWithThunks({
  name: "orders",
  initialState,
  selectors: {
    ordersSelector: (state: IOrderState) => state.orders,
    ordersLoadingSelector: (state: IOrderState) => state.loading,
    ordersErrorSelector: (state: IOrderState) => state.errors,
  },
  reducers: (create) => ({
    fetchOrders: create.asyncThunk(
      async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/orders/api/`
        );
        const data = await response.json();
        return data;
      },
      {
        pending: (state: IOrderState): void => {
          state.loading = true;
          state.errors = false;
        },
        rejected: (state: IOrderState): void => {
          state.errors = true;
        },
        fulfilled: (
          state: IOrderState,
          actions: PayloadAction<IOrderState["orders"]>
        ): void => {
          state.orders = actions.payload;
        },
        settled: (state: IOrderState): void => {
          state.loading = false;
        },
      }
    ),
  }),
});

export const { fetchOrders } = ordersSlice.actions;

export const { ordersSelector, ordersLoadingSelector, ordersErrorSelector } =
  ordersSlice.selectors;

export default ordersSlice.reducer;
