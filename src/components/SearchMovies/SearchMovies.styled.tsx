import styled from "styled-components";

export const SearchForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 305px;
  height: 30px;

  .search-icon {
    width: 24px;
    height: 24px;
    stroke: var(--dark-violet-clr);
  }
  @media screen and (min-width: 1024px) {
    height: 44px;
  }
`;
export const SearchInput = styled.input`
  border-radius: 8px;
  width: 305px;
  height: 30px;
  outline: none;
  border: 1px solid var(--grey-normal);
  @media screen and (min-width: 1024px) {
    height: 44px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 1px;
  left: 270px;
  @media screen and (min-width: 1024px) {
    top: 6px;
  }
`;
