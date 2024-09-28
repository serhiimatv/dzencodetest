import { useEffect, useState } from "react";

export const useTime = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000 * (60 - today.getSeconds() !== 0 ? 60 - today.getSeconds() : 60));
    return () => {
      clearInterval(timer);
    };
  }, [today]);

  const time = {
    hours: today.getHours() < 10 ? `0${today.getHours()}` : today.getHours(),
    minutes:
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
    seconds:
      today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds(),
  };

  return time;
};
