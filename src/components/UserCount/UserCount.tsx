"use client";

import { useSocket } from "@/providers/socket-provider";
import styles from "./usercount.module.css";

const UserCount = () => {
  const { userCount } = useSocket();

  return (
    <div className={styles["user-count"]}>
      <span className={styles["user-count__text"]}>{userCount}</span>
      <span>Вкладок отрыто</span>
    </div>
  );
};

export default UserCount;
