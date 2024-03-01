import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { device } from "../../css/deviceSize";

const StyledStar = styled(FaStar)`
  fill: ${({ filled }) => (filled === "true" ? "#9040F6" : "transparent")};
  stroke-width: 5%;
  stroke: #9040f6;
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const filled = i < Math.round(rating / 2) ? "true" : "false";
    stars.push(<StyledStar key={i} filled={filled} />);
  }
  return <StyledDiv>{stars}</StyledDiv>;
};

export default StarRating;
