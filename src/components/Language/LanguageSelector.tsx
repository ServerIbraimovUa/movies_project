import React from "react";
import { useLanguage } from "./LanguageContext";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  return (
    <form action="">
      <select name="language" value={language} onChange={handleLanguageChange}>
        <option value="en">En</option>
        <option value="uk">Uk</option>
      </select>
    </form>
  );
};

export default LanguageSelector;
