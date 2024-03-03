import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Description, Title } from "./Info.styled";

const AboutProject: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className="info-container">
        <Title>{t("about.about")}</Title>
        <Description>
          Here should be the best text about our project, written by Viktoria
        </Description>
      </Container>
    </>
  );
};

export default AboutProject;
