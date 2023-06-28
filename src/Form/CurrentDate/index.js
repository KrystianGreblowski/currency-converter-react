import { useState, useEffect } from "react";
import { StyledCurrentDate } from "./styled";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate((currentDate) => (currentDate = new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const showCurrentDate = () =>
    currentDate.toLocaleDateString("pl", {
      month: "long",
      weekday: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

  return (
    <StyledCurrentDate>Dzisiaj jest {showCurrentDate()}</StyledCurrentDate>
  );
};

export default CurrentDate;
