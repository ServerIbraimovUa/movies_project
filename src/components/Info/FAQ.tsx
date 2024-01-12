import React, { FC } from "react";
import { Accordion, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FAQ: FC = () => {
    const { t } = useTranslation();
  return (
    <>      
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>{t("faq.on")}</Accordion.Header>
                <Accordion.Body>
                {t("faq.filmoteka")}
                 </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>{t("faq.how")}</Accordion.Header>
                <Accordion.Body>
                {t("faq.at")}
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>{t("faq.problems")}</Accordion.Header>
                <Accordion.Body>
                {t("faq.speedtitle")}

                {t("faq.speedloading")}<br/>

                {t("faq.speedone")}<br/>
                {t("faq.speedtwo")}<br/>
                {t("faq.speedthree")}<br/>
                {t("faq.speedfour")}<br/>
                {t("faq.speedfive")}<br/>
                {t("faq.speedsix")}<br/>

                {t("faq.speedend")}
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
     
    </>
  );
};

export default FAQ;
