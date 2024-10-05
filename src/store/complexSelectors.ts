import { createSelector } from "@reduxjs/toolkit";
import { productsSelector } from "./slices/productsSlice";
import { IProduct } from "@/models/product";

export const productsInOrderSelector = (id: number) => {
  return createSelector(productsSelector, (products: IProduct[]) => {
    return products.filter((product) => product.order === id);
  });
};
