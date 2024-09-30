"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className={`${styles["navigation"]} mt-5 gap-3`}>
      <Link
        href="/orders"
        className={`${
          styles["navigation-link"]
        } text-decoration-none text-black ${
          path === "/orders" ? styles["navigation-link-active"] : ""
        }`}
      >
        Приходы
      </Link>
      <Link
        href="/products"
        className={`${
          styles["navigation-link"]
        } text-decoration-none text-black ${
          path === "/products" ? styles["navigation-link-active"] : ""
        }`}
      >
        Продукты
      </Link>
    </nav>
  );
};

export default Navbar;
