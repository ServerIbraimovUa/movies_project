import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import { RouteNames } from "../types/routerTypes";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";

import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import FavoritePage from "../pages/FavoritePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import Settings from "../pages/Settings";

import ActorPage from "../pages/ActorPage";
import EditProfile from "../pages/EditProfile";
import AccountSettings from "../pages/AccountSettings";
import DeleteAccount from "../pages/DeleteAccount";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* Роути змінюємо в файлі routerTypes */}
      <Route path="/" element={<Layout />}>
        <Route path={RouteNames.Home} element={<HomePage />} />
        <Route path={RouteNames.MovieDetails} element={<MovieDetailsPage />} />
        <Route path={RouteNames.Actor} element={<ActorPage />} />
        <Route path={RouteNames.Login} element={<LoginPage />} />
        <Route path={RouteNames.Register} element={<SignUpPage />} />
        <Route
          path={RouteNames.Favorites}
          element={
            // <PrivateRoute redirectTo={RouteNames.Login}>
            <FavoritePage />
            /* </PrivateRoute> */
          }
        />
        <Route
          path={RouteNames.Settings}
          element={
            <RestrictedRoute>
              <Settings />
            </RestrictedRoute>
          }
        >
          <Route path={"editProfile"} element={<EditProfile />} />
          <Route path={"accountSettings"} element={<AccountSettings />} />
          <Route path={"deleteAccount"} element={<DeleteAccount />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
