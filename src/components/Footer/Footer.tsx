import { useTranslation } from "react-i18next";
import {
  ButtonWrapper,
  ContainerFooter,
  FooterLink,
  FooterList,
  IconWrapper,
  InfoWrapper,
  LinkTeam,
  LogoWrapper,
  SpanInfo,
} from "./Footer.styled";
import Icon from "../Icon/Icon";

import { darkTheme } from "../SwitcherTheme/theme";
import { useTheme } from "../SwitcherTheme/ThemeContext";


const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <ContainerFooter>
      <LogoWrapper>
      {theme === darkTheme ? (
            <>
<Icon className="logo-icon" id="logo" />
            </>
          ) : (
            <>
             <Icon className="logo-icon" id="Logo" />
            </>
          )}
        
      </LogoWrapper>
      <IconWrapper>
        <li>
          <FooterLink to="https://github.com/">
            <Icon className="github-icon" id="githubf" />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="https://web.telegram.org/">
            <Icon className="telegram-icon" id="telegramf" />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="https://www.facebook.com/">
            <Icon className="facebook-icon" id="facebookf" />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="https://www.instagram.com/">
            <Icon className="circles-icon" id="circlesf" />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="https://twitter.com/?lang=ru">
            <Icon className="cross-icon" id="crossf" />
          </FooterLink>
        </li>
      </IconWrapper>

      <FooterList>
        <li>
          <FooterLink to="info/about">{t("footer.about")}</FooterLink>
        </li>
        <li>
          <FooterLink to="info/support">{t("footer.support")}</FooterLink>
        </li>
        <li>
          <FooterLink to="info/faq">{t("footer.faq")}</FooterLink>
        </li>
        <li>
          <FooterLink to="info/terms">{t("footer.terms")}</FooterLink>
        </li>
        <li>
          <FooterLink to="info/copyright">{t("footer.copyright")}</FooterLink>
        </li>
      </FooterList>
      <hr className="separator" />

      <ButtonWrapper>
        <FooterLink to="https://www.apple.com/store">
          {" "}
          <Icon className="apple-icon" id="apple" />
        </FooterLink>

        <FooterLink to="https://play.google.com/store/games?device=phone">
          <Icon className="google-icon" id="googlef" />
        </FooterLink>
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
