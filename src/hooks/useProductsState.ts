import {
  fetchProducts,
  productsErrorSelector,
  productsFiltersSelector,
  productsLoadingSelector,
  productsSelector,
} from "@/store/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "./reduxAppHooks";
import { useEffect, useMemo } from "react";
import { productsFilteredByTypeSelector } from "@/store/complexSelectors";

export const useProductsState = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(productsSelector);
  const productsLoading = useAppSelector(productsLoadingSelector);
  const productsError = useAppSelector(productsErrorSelector);
  const productsFilters = useAppSelector(productsFiltersSelector);
  const filteredProducts = useAppSelector(productsFilteredByTypeSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const memoizedProducts = useMemo(() => {
    return {
      products,
      productsLoading,
      productsError,
      productsFilters,
      filteredProducts,
    };
  }, [
    products,
    productsLoading,
    productsError,
    productsFilters,
    filteredProducts,
  ]);

  return memoizedProducts;
};
