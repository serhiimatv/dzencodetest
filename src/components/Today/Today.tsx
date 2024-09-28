import { DAYS, MONTH } from "@/constants";
import style from "./today.module.css";
import dynamic from "next/dynamic";
import { TimePlaceholder } from "../Time/Time";

const Time = dynamic(() => import("../Time/Time"), {
  ssr: false,
  loading: () => <TimePlaceholder />,
});

const Today = () => {
  const today = new Date();

  const day = DAYS[today.getDay()];
  const date = today.getDate();
  const month = MONTH[today.getMonth()];
  const year = today.getFullYear();

  return (
    <div className={style["today"]}>
      <div className={style["today__date"]}>
        <span>{day}</span>
        <span>{`${date} ${month}, ${year}`}</span>
      </div>
      <Time />
    </div>
  );
};

export default Today;
