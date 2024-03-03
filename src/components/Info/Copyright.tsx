import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Description, Title } from "./Info.styled";

const Copyright: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className="info-container">
        <Title>{t("copyright.copyright")}</Title>
        <Description>{t("copyright.video")}</Description>
        <Description>{t("copyright.complaint")}</Description>
      </Container>
    </>
  );
};

export default Copyright;
