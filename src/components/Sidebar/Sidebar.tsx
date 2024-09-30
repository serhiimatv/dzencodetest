import Image from "next/image";
import styles from "./sidebar.module.css";
import avatar from "@/img/avatar.png";
import settingCircle from "@/img/setting-circle.svg";
import Navbar from "./Navbar/Navbar";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  return (
    <aside className={`${styles["sidebar"]} position-fixed`}>
      <div className={`${styles["sidebar__avatar"]}`}>
        <Image
          src={avatar}
          alt="user image"
          width={100}
          height={100}
          priority
        ></Image>
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
        <Navbar />
      </div>
    </aside>
  );
};

export default Sidebar;
