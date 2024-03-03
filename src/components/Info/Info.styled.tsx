import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 24px;
`;

export const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  margin-bottom: 20px;
`;
export const WellcomeDescr = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 10px;
`;
export const Header = styled(Accordion.Header)`
  color: var(--dark-violet-clr);
`;

export const DescriptionFaq = styled.p`
  margin-bottom: 20px;
`;

export const ListFaq = styled.ul`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
`;
export const ListFaqItem = styled.li`
  margin-bottom: 20px;
`;
