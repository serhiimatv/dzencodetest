import { useEffect, useState } from "react";

const DAYS = [
  "Воскресенье",
  "Подельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const MONTH = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

export const useDate = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000 * (60 - today.getSeconds() !== 0 ? 60 - today.getSeconds() : 60));
    return () => {
      clearInterval(timer);
    };
  }, [today]);

  const day = DAYS[today.getDay()];
  const date = today.getDate();
  const month = MONTH[today.getMonth()];
  const year = today.getFullYear();
  const time = {
    hours: today.getHours() < 10 ? `0${today.getHours()}` : today.getHours(),
    minutes:
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
    seconds:
      today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds(),
  };

  return { day, date, month, year, time };
};
