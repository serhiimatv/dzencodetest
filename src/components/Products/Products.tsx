import DropdownMenu from "./DropdownMenu/DropdownMenu";
import styles from "./products.module.css";
import ProductsList from "./ProductsList/ProductsList";
import data from "../../../mocparoducts.json";
import { IProducts } from "@/models/products";

const Products = () => {
  const mocparoducts: IProducts[] = data;
  return (
    <div className={`${styles["products"]} pt-5 pb-5`}>
      <div
        className={`${styles["products__filters"]} d-flex align-items-center gap-2`}
      >
        Фильтр: <DropdownMenu />
      </div>
      <ProductsList products={mocparoducts} />
    </div>
  );
};

export default Products;
