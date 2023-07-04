import { StyledCurrentDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const CurrentDate = () => {
  const currentDate = useCurrentDate();

  const date = currentDate.toLocaleDateString("pl", {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return <StyledCurrentDate>Dzisiaj jest {date}</StyledCurrentDate>;
};

export default CurrentDate;
