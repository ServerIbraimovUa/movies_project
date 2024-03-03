import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  Description,
  ListFaq,
  ListFaqItem,
  SubTitle,
  Title,
  WellcomeDescr,
} from "./Info.styled";

const TermsOfUse: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className="main-container">
        <Title>{t("terms.termstitle")}</Title>
        <WellcomeDescr>{t("terms.termswelcome")}</WellcomeDescr>
        <Description>{t("terms.termsdear")}</Description>
        <Description>{t("terms.termspleace")}</Description>
        <SubTitle>{t("terms.termsand")}</SubTitle>

        <ListFaq>
          <ListFaqItem>{t("terms.termsone")}</ListFaqItem>

          <ListFaqItem>{t("terms.termstwo")}</ListFaqItem>

          <ListFaqItem>{t("terms.termsthre")}</ListFaqItem>

          <ListFaqItem>{t("terms.termsfour")}</ListFaqItem>

          <ListFaqItem>{t("terms.termsfive")}</ListFaqItem>

          <ListFaqItem>{t("terms.termssix")}</ListFaqItem>

          <ListFaqItem>{t("terms.termsseven")}</ListFaqItem>

          <ListFaqItem>{t("terms.termseight")}</ListFaqItem>
        </ListFaq>

        <SubTitle>{t("terms.copyrighttitle")}</SubTitle>
        <ListFaq>
          <ListFaqItem>{t("terms.copyrightone")}</ListFaqItem>

          <ListFaqItem>{t("terms.copyrighttwo")}</ListFaqItem>

          <ListFaqItem>{t("terms.copyrighttwo")}</ListFaqItem>

          <ListFaqItem>{t("terms.copyrightfour")}</ListFaqItem>

          <ListFaqItem>{t("terms.copyrightfive")}</ListFaqItem>

          <ListFaqItem>{t("terms.copyrightsix")}</ListFaqItem>

          <ListFaqItem>{t("terms.copyrightseven")}</ListFaqItem>
        </ListFaq>
        <SubTitle>{t("terms.contentstitle")}</SubTitle>
        <ListFaq>
          <ListFaqItem>{t("terms.contentsone")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentstwo")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentsthre")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentsfour")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentsfive")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentssix")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentsseven")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentseight")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentsnine")}</ListFaqItem>

          <ListFaqItem>{t("terms.contentsnote")}</ListFaqItem>
        </ListFaq>
        <SubTitle>{t("terms.usetitle")}</SubTitle>
        <ListFaq>
          <ListFaqItem>{t("terms.useone")}</ListFaqItem>

          <ListFaqItem>{t("terms.usetwo")}</ListFaqItem>

          <ListFaqItem>{t("terms.usethre")}</ListFaqItem>

          <ListFaqItem>{t("terms.usefour")}</ListFaqItem>

          <ListFaqItem>{t("terms.usefive")}</ListFaqItem>

          <ListFaqItem>{t("terms.usesix")}</ListFaqItem>

          <ListFaqItem>{t("terms.useseven")}</ListFaqItem>

          <ListFaqItem>{t("terms.useeight")}</ListFaqItem>

          <ListFaqItem>{t("terms.usenine")}</ListFaqItem>

          <ListFaqItem>{t("terms.useten")}</ListFaqItem>

          <ListFaqItem>{t("terms.useeleven")}</ListFaqItem>

          <ListFaqItem>{t("terms.usetwelve")}</ListFaqItem>

          <ListFaqItem>{t("terms.usethirteen")}</ListFaqItem>

          <ListFaqItem>{t("terms.usefourteen")}</ListFaqItem>

          <ListFaqItem>{t("terms.usefiveteen")}</ListFaqItem>

          <ListFaqItem>{t("terms.usesixteen")}</ListFaqItem>

          <ListFaqItem>{t("terms.useseventeen")}</ListFaqItem>
        </ListFaq>
      </Container>
    </>
  );
};

export default TermsOfUse;
