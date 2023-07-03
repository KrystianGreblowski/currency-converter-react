import { StyledCurrentDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const CurrentDate = () => {
  const date = useCurrentDate();

  return <StyledCurrentDate>Dzisiaj jest {date}</StyledCurrentDate>;
};

export default CurrentDate;
