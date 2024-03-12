import { useEffect, useState } from "react";

export const useDate = () => {
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return {
    day,
    month,
    year,
    hour,
    minute,
    seconds,
  };
};
