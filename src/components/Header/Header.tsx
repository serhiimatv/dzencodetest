import styles from "./header.module.css";
import logo from "@/img/logo.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import UserCount from "../UserCount/UserCount";
import Link from "next/link";

const Time = dynamic(() => import("../Today/Today"), { ssr: false });

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
        <Time />
        <UserCount />
      </div>
    </header>
  );
};

export default Header;
