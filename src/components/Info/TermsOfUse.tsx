import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TermsOfUse: FC = () => {
  const { t } = useTranslation();
  return (
    <>      
        <Container>
        <h1>{t("terms.termstitle")}</h1>
          <h2>{t("terms.termswelcome")}</h2>
            <p>
            {t("terms.termsdear")}

            {t("terms.termspleace")}
            </p>
            <h2>{t("terms.termsand")}</h2>
            <p>
            {t("terms.termsone")}

            {t("terms.termstwo")}

            {t("terms.termsthre")}

            {t("terms.termsfour")}

            {t("terms.termsfive")}

            {t("terms.termssix")}

            {t("terms.termsseven")}

            {t("terms.termseight")}
            </p>
          <h2>{t("terms.copyrighttitle")}</h2>
          <p>
          {t("terms.copyrightone")}

          {t("terms.copyrighttwo")}

          {t("terms.copyrighttwo")}

          {t("terms.copyrightfour")}

          {t("terms.copyrightfive")}

          {t("terms.copyrightsix")}

          {t("terms.copyrightseven")}
          </p>
          <h2>{t("terms.contentstitle")}</h2>
          <p>
          {t("terms.contentsone")}

          {t("terms.contentstwo")}

          {t("terms.contentsthre")}

          {t("terms.contentsfour")}
            
          {t("terms.contentsfive")}

          {t("terms.contentssix")}

          {t("terms.contentsseven")}

          {t("terms.contentseight")}

          {t("terms.contentsnine")}

          {t("terms.contentsnote")}
          </p>
          <h2>{t("terms.usetitle")}</h2>
          <p>
          
          {t("terms.useone")}

          {t("terms.usetwo")}

          {t("terms.usethre")}

          {t("terms.usefour")}

          {t("terms.usefive")}


          {t("terms.usesix")}

          {t("terms.useseven")}

          {t("terms.useeight")}

          {t("terms.usenine")}

          {t("terms.useten")}

          {t("terms.useeleven")}
          
          {t("terms.usetwelve")}

         {t("terms.usethirteen")}

          {t("terms.usefourteen")}

           {t("terms.usefiveteen")}

            {t("terms.usesixteen")}

          {t("terms.useseventeen")}
          </p>
        </Container>
        
     
    </>
  );
};

export default TermsOfUse;
