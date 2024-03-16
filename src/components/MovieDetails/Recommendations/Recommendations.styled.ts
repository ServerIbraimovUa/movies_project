import styled from "styled-components";

export const RecommendationsStyled = styled.div`
color: ${(props) => props.theme.textTitle};
  padding: 0 12px;
  height: auto;

  .recommendations-title {
    font-size: 24px;
    font-weight: var(--bold-font-weight);

    margin-bottom: 16px;
  }
`;
