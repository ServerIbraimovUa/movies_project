import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

<<<<<<< Updated upstream
=======
import Text from './components/Language/i18n';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from "./components/Language/LanguageContext";
import { ToastContainer  } from 'react-toastify';



>>>>>>> Stashed changes
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
