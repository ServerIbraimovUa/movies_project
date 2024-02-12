import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 189px;

  text-align: center;
  border-radius: 24px;
  background-color: var(--violet-clr);

  img {
    width: 157px;
    height: 205px;
  }
  .img-wrapper {
    margin-bottom: 16px;
    border-radius: 16px;
    overflow: hidden;
  }
`;