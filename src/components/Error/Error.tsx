import React from "react";
import { useTranslation } from 'react-i18next';

const Error: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t('erorr.erorr')}</h1>;
};

export default Error;
