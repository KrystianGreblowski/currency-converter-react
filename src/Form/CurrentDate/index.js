import { StyledCurrentDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
  date.toLocaleDateString("pl", {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const CurrentDate = () => {
  const currentDate = useCurrentDate();

  return (
    <StyledCurrentDate>
      Dzisiaj jest {formatDate(currentDate)}
    </StyledCurrentDate>
  );
};

export default CurrentDate;
