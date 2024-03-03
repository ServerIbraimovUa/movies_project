import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const Info = styled.div`
  padding: 20px;
  margin-bottom: 24px;

  background-color: var(--light-violet-clr);
  border-radius: 24px;

  @media ${device.desktop} {
    padding: 36px;
  }
`;

export const CardImg = styled.img`
  float: left;
  width: 113px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 222px;
    margin-right: 20px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 231px;
    margin-right: 24px;
    margin-bottom: 40px;
  }
`;
export const ContentWrapper = styled.div`
  margin-bottom: 16px;

  @media ${device.tablet} {
    margin-bottom: 24px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 10px;

  font-size: 24px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 125%;
  }
`;
export const StarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
export const SubTitle = styled.p`
  margin-bottom: 15px;

  font-size: 20px;
  font-weight: var(--bold-font-weight);

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 100%;
  }
`;
export const Content = styled.span`
  font-size: 16px;
  line-height: 150%;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 120%;
  }
`;
export const GenresWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding: 0px;
  margin-bottom: 10px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
`;
export const WatchButton = styled(NavLink)`
  display: flex;
  justify-content: center;

  width: 298px;
  border-radius: 12px;
  border: 1px solid var(--dark-violet-clr);
  padding-top: 6.2px;
  padding-bottom: 6.2px;

  font-size: 20px;
  font-weight: var(--medium-font-weight);
  line-height: 150%;
  letter-spacing: 0.02em;
  color: var(--dark-violet-clr);
  text-decoration: none;

  @media ${device.tablet} {
    width: 137px;
  }
`;
export const Button = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid var(--dark-violet-clr);
  color: var(--dark-violet-clr);
  border-radius: 8px;
`;
export const IconBorder = styled(MdOutlineFavoriteBorder)`
  width: 24px;
  height: 24px;
`;
export const Icon = styled(MdOutlineFavorite)`
  width: 24px;
  height: 24px;
`;
