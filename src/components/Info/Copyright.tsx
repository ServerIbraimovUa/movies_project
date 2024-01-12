import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Copyright: FC = () => {
  const { t } = useTranslation();
  return (
    <>      
        <Container>
          <h1>{t("copyright.copyright")}</h1>
          <p>
          {t("copyright.video")}
          </p>
          <p>
          {t("copyright.complaint")}
          </p>
        </Container>
     
    </>
  );
};

export default Copyright;
