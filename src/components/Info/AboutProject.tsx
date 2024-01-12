import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutProject: FC = () => {
  const { t } = useTranslation();
  return (
    <>      
        <Container>
          <h1>{t("about.about")}</h1>
          <p>Here should be the best text about our project, written by Viktoria</p>
        </Container>
     
    </>
  );
};

export default AboutProject;
