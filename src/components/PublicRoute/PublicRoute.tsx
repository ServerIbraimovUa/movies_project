import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

interface PublicRouteProps {
  children: JSX.Element;
  redirectTo?: string;
}

export const PublicRoute: FC<PublicRouteProps> = ({ children, redirectTo = "/" }) => {
  const { isLoggedIn } = useUser()!;

  return !isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
