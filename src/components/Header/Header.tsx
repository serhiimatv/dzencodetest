import styles from "./header.module.css";
import logo from "@/img/logo.png";
import Image from "next/image";
import UserCount from "../UserCount/UserCount";
import Link from "next/link";
import Today from "../Today/Today";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo-wrapper"]}>
        <Image src={logo} alt="logo" />
        <Link href="/">
          <p className={styles["header__title"]}>inventory</p>
        </Link>
      </div>
      <div className={styles["header__time-wrapper"]}>
        <Today />
        <UserCount />
      </div>
    </header>
  );
};

export default Header;
