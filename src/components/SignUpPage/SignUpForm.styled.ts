import styled from "styled-components";
import { device } from "../../css/deviceSize";
import { NavLink } from "react-router-dom";

export const InputWrapper = styled.span`
  position: relative;
  width: 100%;
  display: inline-block;
`;

export const SvgSpan = styled.span`
  position: absolute;
  top: 22px;
  transform: translateY(-50%);
  right: 12px;
`;

export const Input = styled.input`
  font-size: 20px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--text-clr-grey);
  height: 44px;
  padding: 10px 12px;
  margin-bottom: 12px;
  background-color: transparent;
`;

export const SignButton = styled.button`
  font-family: var(--main-font-medium);
  font-weight: var(--medium-font-weight);
  letter-spacing: 0.4px;
  font-size: 20px;
  padding: 12px 40px;
  border-radius: 12px;
  color: var(--text-clr-white);
  margin: 8px 0 20px;

  @media ${device.tablet} {
    padding: 15px 40px;
  }
`;

export const AuthText = styled.p`
  font-size: 12px;
`;

export const EyeIcon = styled.svg`
  width: 24px;
  color: var(--dark-violet-clr);
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: var(--dark-violet-clr);
  border-bottom: 1px solid var(--dark-violet-clr);
`;
