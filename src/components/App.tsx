import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import { RouteNames } from "../types/routerTypes";

import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import FavoritePage from "../pages/FavoritePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import Settings from "../pages/Settings";

function App() {
  return (
    <Routes>
      {/* Роути змінюємо в файлі routerTypes */}
      <Route path="/" element={<Layout />}>
        <Route path={RouteNames.Home} element={<HomePage />} />
        <Route path={RouteNames.MovieDetails} element={<MovieDetailsPage />} />
        <Route path={RouteNames.Login} element={<LoginPage />} />
        <Route path={RouteNames.Register} element={<SignUpPage />} />
        <Route path={RouteNames.Favorites} element={<FavoritePage />} />
         <Route path={RouteNames.Settings} element={<Settings/>} />
      </Route>
    </Routes>
  );
}
export default App;
