import DropdownMenu from "./DropdownMenu/DropdownMenu";
import styles from "./products.module.css";
import ProductsList from "./ProductsList/ProductsList";
const Products = () => {
  return (
    <div className={`${styles["products"]} pt-5 pb-5`}>
      <div
        className={`${styles["products__filters"]} d-flex align-items-center gap-2`}
      >
        Фильтр: <DropdownMenu />
      </div>
      <ProductsList />
    </div>
  );
};

export default Products;
