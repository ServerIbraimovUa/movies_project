import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";

import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import MovieDetails from "../pages/MovieDetails";
import FavoritePage from "../pages/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}
export default App;
