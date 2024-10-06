import { createSelector } from "@reduxjs/toolkit";
import {
  productsFiltersSelector,
  productsSelector,
} from "./slices/productsSlice";
import { IProduct } from "@/models/product";

export const productsInOrderSelector = (id: number) => {
  return createSelector(productsSelector, (products: IProduct[]) => {
    return products.filter((product) => product.order === id);
  });
};

export const productsFilteredByTypeSelector = createSelector(
  productsSelector,
  productsFiltersSelector,
  (products: IProduct[], filter: string | null) => {
    return filter
      ? products.filter(
          (product) =>
            product.type.toLocaleLowerCase() === filter.toLocaleLowerCase()
        )
      : products;
  }
);
