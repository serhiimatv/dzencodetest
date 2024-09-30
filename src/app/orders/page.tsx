import Orders from "@/components/Orders/Orders";
import styles from "./page.module.css";

const PageOrders = () => {
  return (
    <main className={`${styles["page"]}`}>
      <h1>Приходы</h1>
      <Orders />
    </main>
  );
};

export default PageOrders;
