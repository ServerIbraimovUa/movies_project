import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";

import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import MovieDetails from "../pages/MovieDetails";
import FavoritePage from "../pages/FavoritePage";
<<<<<<< Updated upstream
=======

import MovieDetailsPage from "../pages/MovieDetailsPage";
import Settings from "../pages/Settings";
>>>>>>> Stashed changes

import ActorPage from "../pages/ActorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
<<<<<<< Updated upstream
        <Route index element={<HomePage />} />

        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
=======

        <Route path={RouteNames.Home} element={<HomePage />} />
        <Route path={RouteNames.MovieDetails} element={<MovieDetailsPage />} />
        <Route path={RouteNames.Login} element={<LoginPage />} />
        <Route path={RouteNames.Register} element={<SignUpPage />} />
        <Route path={RouteNames.Favorites} element={<FavoritePage />} />
         <Route path={RouteNames.Settings} element={<RestrictedRoute><Settings /></RestrictedRoute>} />
        

>>>>>>> Stashed changes
      </Route>
    </Routes>
  );
}
export default App;
