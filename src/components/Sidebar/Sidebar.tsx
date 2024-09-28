import Image from "next/image";
import styles from "./sidebar.module.css";
import avatar from "@/img/avatar.png";
import settingCircle from "@/img/setting-circle.svg";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className={`${styles["sidebar"]} position-fixed`}>
      <div className={`${styles["sidebar__avatar"]}`}>
        <Image src={avatar} alt="user image" width={100} height={100}></Image>
        <span
          className={`${styles["sidebar__avatar-setting"]} position-absolute bottom-0 end-0`}
        >
          <Image
            src={settingCircle}
            width={30}
            height={30}
            alt="setting"
          ></Image>
        </span>
        <nav className={`${styles["sidebar__navigation"]} mt-5 gap-3`}>
          <Link
            href="/orders"
            className={`${styles["sidebar__navigation-link"]} text-decoration-none text-black`}
          >
            Приходы
          </Link>
          <Link
            href="/products"
            className={`${styles["sidebar__navigation-link"]} text-decoration-none text-black`}
          >
            Продукты
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
