import React, { FC } from "react";
import { Accordion, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { DescriptionFaq, ListFaq, Title } from "./Info.styled";
import "./FAQ.css";

const FAQ: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className="main-container">
        <Title>FAQ</Title>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t("faq.on")}</Accordion.Header>
            <Accordion.Body>{t("faq.filmoteka")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t("faq.how")}</Accordion.Header>
            <Accordion.Body>{t("faq.at")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t("faq.problems")}</Accordion.Header>
            <Accordion.Body>
              <DescriptionFaq>{t("faq.speedtitle")}</DescriptionFaq>
              <DescriptionFaq>{t("faq.speedloadings")}</DescriptionFaq>
              <ListFaq>
                <li> {t("faq.speedone")}</li>

                <li>{t("faq.speedtwo")}</li>

                <li>{t("faq.speedthree")}</li>

                <li>{t("faq.speedfour")}</li>

                <li>{t("faq.speedfive")}</li>

                <li>{t("faq.speedsix")}</li>
              </ListFaq>

              <DescriptionFaq>{t("faq.speedend")}</DescriptionFaq>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default FAQ;
