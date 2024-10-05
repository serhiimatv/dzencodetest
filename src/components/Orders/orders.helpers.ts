import { IProduct } from "@/models/product";

export const getTotalAmountFillPriceElements = (
  products: IProduct[],
  id: number
): {
  totalAmountDollars: number;
  totalAmountHrivnas: number;
} => {
  const filteredProducts = products.filter((product) => product.order === id);

  let totalAmountDollars = 0;
  let totalAmountHrivnas = 0;

  filteredProducts.forEach((product) => {
    product.price.forEach((price) => {
      if (price.symbol === "USD") {
        totalAmountDollars = price.value + totalAmountDollars;
      }
      if (price.symbol === "UAH") {
        totalAmountHrivnas = price.value + totalAmountHrivnas;
      }
    });
  });

  return { totalAmountDollars, totalAmountHrivnas };
};
