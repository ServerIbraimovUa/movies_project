import { useLanguage } from "../Language/LanguageContext";
import React from "react";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
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
