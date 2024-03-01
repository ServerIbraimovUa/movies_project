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
  h2 {
    margin-bottom: 12px;
    font-family: "Zen Maru Gothic", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;

    color: var(--text-clr-black);
  }
  p {
    margin-bottom: 12px;
    color: L var(--dark-violet-clr);
  }

  .wrapper-watch {
    display: flex;
    gap: 8px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 44px;
    padding: 12px 40px;

    color: var(--dark-violet-clr);
    border: 1px solid var(--dark-violet-clr);
    border-radius: 12px;
  }
  button {
    border: 1px solid var(--dark-violet-clr);
    border-radius: 8px;
    padding: 10px;
    width: 44px;
    height: 44px;
  }
`;
