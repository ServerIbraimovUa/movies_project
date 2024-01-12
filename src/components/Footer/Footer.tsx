import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>LOGO</p>
        <ul style={{ display: "flex", gap: "40px" }}>
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
        </ul>
      </div>
      <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "40px" }}>
          <a href="https://www.apple.com/store">App Store</a>
          <a href="https://play.google.com/store/games?device=phone">
            Google play
          </a>
        </div>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <a href="https://github.com/">Github</a>
          </li>
          <li>
            <a href="https://web.telegram.org/">Telegram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=ru">X</a>
          </li>
        </ul>
      </div>
      <p
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {t("footer.filmoteka")}{" "}
        <button type="button">{t("footer.team")}</button>
      </p>
    </div>
  );
};

export default Footer;
