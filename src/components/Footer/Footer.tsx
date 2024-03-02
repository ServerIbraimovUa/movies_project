import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ButtonWrapper,
  ContainerFooter,
  FooterList,
  IconWrapper,
  InfoWrapper,
  LinkTeam,
  LogoWrapper,
  SpanInfo,
} from "./Footer.styled";
import Icon from "../Icon/Icon";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <ContainerFooter>
      <LogoWrapper>
        <Icon className="logo-icon" id="Logo" />
      </LogoWrapper>
      <IconWrapper>
        <li>
          <a href="https://github.com/">
            <Icon className="github-icon" id="githubf" />
          </a>
        </li>
        <li>
          <a href="https://web.telegram.org/">
            <Icon className="telegram-icon" id="telegramf" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <Icon className="facebook-icon" id="facebookf" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <Icon className="circles-icon" id="circlesf" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=ru">
            <Icon className="cross-icon" id="crossf" />
          </a>
        </li>
      </IconWrapper>

      <FooterList>
        <li>
          <Link to="info/about">{t("footer.support")}</Link>
        </li>
        <li>
          <Link to="info/about">{t("footer.support")}</Link>
        </li>
        <li>
          <Link to="info/faq">{t("footer.faq")}</Link>
        </li>
        <li>
          <Link to="info/terms">{t("footer.terms")}</Link>
        </li>
        <li>
          <Link to="info/copyright">{t("footer.copyright")}</Link>
        </li>
      </FooterList>
      <hr className="separator" />

      <ButtonWrapper>
        <a href="https://www.apple.com/store">
          {" "}
          <Icon className="apple-icon" id="apple" />
        </a>

        <a href="https://play.google.com/store/games?device=phone">
          <Icon className="google-icon" id="googlef" />
        </a>
      </ButtonWrapper>
      <InfoWrapper>
        <SpanInfo>{t("footer.filmoteka")}</SpanInfo>
        <SpanInfo>
          {t("footer.team")}
          <LinkTeam href="/">TeamForce</LinkTeam>
        </SpanInfo>
      </InfoWrapper>
    </ContainerFooter>
  );
};

export default Footer;
