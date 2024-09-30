import Orders from "@/components/Orders/Orders";
import styles from "./page.module.css";

export const revalidate = 0;

const fetchOrders = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/orders/api/`);
  const data = await response.json();
  return data;
};

const PageOrders = async () => {
  const data = await fetchOrders();

  return (
    <main className={`${styles["page"]}`}>
      <h1>Приходы</h1>
      <Orders />
    </main>
  );
};

export default PageOrders;
