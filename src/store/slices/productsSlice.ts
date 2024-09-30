import { IProductsState } from "@/types";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  products: [],
  filter: null,
  loading: false,
  errors: false,
} as IProductsState;

const productsSlice = createSliceWithThunks({
  name: "products",
  initialState,
  selectors: {
    productsSelector: (state: IProductsState) => state.products,
    productsFiltersSelector: (state: IProductsState) => state.filter,
    productsLoadingSelector: (state: IProductsState) => state.loading,
    productsErrorSelector: (state: IProductsState) => state.errors,
  },
  reducers: (create) => ({
    fetchProducts: create.asyncThunk(
      async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/products/api/`
        );
        const data = await response.json();
        return data;
      },
      {
        pending: (state: IProductsState): void => {
          state.loading = true;
          state.errors = false;
        },
        rejected: (state: IProductsState): void => {
          state.errors = true;
        },
        fulfilled: (
          state: IProductsState,
          actions: PayloadAction<IProductsState["products"]>
        ): void => {
          state.products = actions.payload;
        },
        settled: (state: IProductsState): void => {
          state.loading = false;
        },
      }
    ),
    toggleFilters: create.reducer(
      (
        state: IProductsState,
        action: PayloadAction<
          "monitors" | "laptops" | "smartphones" | "tablets" | null
        >
      ) => {
        state.filter = action.payload;
      }
    ),
  }),
});

export const { fetchProducts, toggleFilters } = productsSlice.actions;

export const {
  productsSelector,
  productsFiltersSelector,
  productsLoadingSelector,
  productsErrorSelector,
} = productsSlice.selectors;

export default productsSlice.reducer;
