import styles from "./header.module.css";
import logo from "@/img/logo.png";
import dynamic from "next/dynamic";
import Image from "next/image";

const Time = dynamic(() => import("../Today/Today"), { ssr: false });

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo-wrapper"]}>
        <Image src={logo} alt="logo" />
        <h1 className={styles["header__title"]}>inventory</h1>
      </div>
      <Time />
    </header>
  );
};

export default Header;
