"use client";
import style from "./today.module.css";
import { useDate } from "@/hooks/useDate";

const Today = () => {
  const { day, date, month, year, time } = useDate();

  return (
    <div className={style["today"]}>
      <div className={style["today__date"]}>
        <span>{day}</span>
        <span>{`${date} ${month}, ${year}`}</span>
      </div>
      <span className={style["today__time"]}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={15}
          height={15}
          fill="#00dc7f"
        >
          <g data-name="99-Time">
            <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
            <path d="M17 6h-2v10a1 1 0 0 0 .29.71l7 7 1.41-1.41-6.7-6.71z" />
          </g>
        </svg>
        {`${time.hours}:${time.minutes}`}
      </span>
    </div>
  );
};

export default Today;
