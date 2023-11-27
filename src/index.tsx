import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import Text from './components/Language/i18n';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from "./components/Language/LanguageContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <I18nextProvider i18n={Text}>
    <React.StrictMode>
      <BrowserRouter>
      <LanguageProvider>
        <App />
        </LanguageProvider>
      </BrowserRouter>
    </React.StrictMode>
    </I18nextProvider>
);
