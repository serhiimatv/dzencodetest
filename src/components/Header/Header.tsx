import styles from "./header.module.css";
import logo from "@/img/logo.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import UserCount from "../UserCount/UserCount";
import { SocketProvider } from "@/providers/socket-provider";

const Time = dynamic(() => import("../Today/Today"), { ssr: false });

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo-wrapper"]}>
        <Image src={logo} alt="logo" />
        <h1 className={styles["header__title"]}>inventory</h1>
      </div>
      <div className={styles["header__time-wrapper"]}>
        <Time />
        <SocketProvider>
          <UserCount />
        </SocketProvider>
      </div>
    </header>
  );
};

export default Header;
