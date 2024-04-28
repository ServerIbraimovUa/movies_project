import React from "react";
import { useLanguage } from "./LanguageContext";
import { useTranslation } from "react-i18next";
import { LanguageContainer } from "./Language.styled";

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


    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <LanguageContainer action="">
      <select
        className="select-lang"
        name="language"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">EN</option>
        <option value="uk">UK</option>
      </select>
    </LanguageContainer>
  );
};

export default LanguageSelector;