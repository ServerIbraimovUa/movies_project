import styled from "styled-components";

export const LanguageContainer = styled.form`
  display: flex;
  font-size: 16px;
  height: 30px;
  width: 44px;

  @media screen and (min-width: 1024px) {
    height: 44px;
    font-size: 18px;
  }

  .select-lang {
    border-radius: 10px;
    outline: none;
    border-color: var(--grey-normal);
    color: var(--dark-violet-clr);
    font-size: 16px;
  }
`;
