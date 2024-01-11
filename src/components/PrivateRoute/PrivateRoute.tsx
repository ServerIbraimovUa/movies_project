import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

interface PrivateRouteProps {
  children: JSX.Element;
  redirectTo?: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useUser()!;

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
