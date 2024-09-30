import Products from "@/components/Products/Products";
import styles from "./page.module.css";

export const revalidate = 0;

const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/products/api/`);
  const data = await response.json();
  return data;
};

const ProductsPage = async () => {
  const data = await fetchProducts();

  return (
    <main className={styles["products-page"]}>
      <h1 className={styles["products-page__title"]}>Продукты</h1>
      <Products />
    </main>
  );
};

export default ProductsPage;
