import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import Text from "./Language/utils/i18n";

import { I18nextProvider } from "react-i18next";
import { LanguageProvider } from "./components/Language/LanguageContext";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <I18nextProvider i18n={Text}>
          <App />
        </I18nextProvider>
        <ToastContainer />
      </LanguageProvider>
      <UserProvider>
        <LanguageProvider>
          <I18nextProvider i18n={Text}>
            <App />
          </I18nextProvider>
          <ToastContainer />
        </LanguageProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
