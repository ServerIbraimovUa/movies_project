import { FC } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase-config";

interface PrivateRouteProps {
  children: JSX.Element;
  redirectTo?: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/",
}) => {
  return auth.currentUser ? children : <Navigate to={redirectTo} replace />;
};
