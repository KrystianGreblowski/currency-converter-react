import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate((currentDate) => (currentDate = new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentDate;
};
