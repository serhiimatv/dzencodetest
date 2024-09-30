import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles["page"]}`}>
      Здесь могут быть графики приходов и товаров, динамика продаж или ремонтов.
      Может что-то по бизнес-процессам{" "}
    </main>
  );
}
