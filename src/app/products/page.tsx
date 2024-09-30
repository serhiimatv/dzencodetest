import Products from "@/components/Products/Products";
import styles from "./page.module.css";

const ProductsPage = async () => {
  return (
    <main className={styles["products-page"]}>
      <h1 className={styles["products-page__title"]}>Продукты</h1>
      <Products />
    </main>
  );
};

export default ProductsPage;
