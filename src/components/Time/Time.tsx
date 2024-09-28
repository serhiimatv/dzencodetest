"use client";
import { useTime } from "@/hooks/useTime";
import Image from "next/image";
import clock from "@/img/clock.svg";

const Time = () => {
  const time = useTime();

  return (
    <span className="d-flex align-items-center gap-1 align-self-end">
      <Image src={clock} width={15} height={15} alt="clock" />
      {`${time.hours}:${time.minutes}`}
    </span>
  );
};

export const TimePlaceholder = () => {
  return (
    <span className="d-flex align-items-center gap-1 align-self-end">
      <Image src={clock} width={15} height={15} alt="clock" />
      00:00
    </span>
  );
};

export default Time;
