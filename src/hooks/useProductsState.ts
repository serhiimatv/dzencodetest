import {
  fetchProducts,
  productsErrorSelector,
  productsFiltersSelector,
  productsLoadingSelector,
  productsSelector,
} from "@/store/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "./reduxAppHooks";
import { useEffect, useMemo } from "react";

export const useProductsState = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(productsSelector);
  const productsLoading = useAppSelector(productsLoadingSelector);
  const productsError = useAppSelector(productsErrorSelector);
  const productsFilters = useAppSelector(productsFiltersSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const memoizedProducts = useMemo(() => {
    return { products, productsLoading, productsError, productsFilters };
  }, [products, productsLoading, productsError, productsFilters]);

  return memoizedProducts;
};
