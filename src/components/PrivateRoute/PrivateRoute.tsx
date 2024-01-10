import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
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
  const location = useLocation()

  const loc = location.pathname;
  console.log(loc);
  
  return isLoggedIn ? children : <Navigate to={redirectTo}  />;
};
