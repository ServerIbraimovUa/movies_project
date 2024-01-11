import { FC } from "react";
import { Navigate } from "react-router-dom";
// import { UseUser } from "../../hooks/useUser";
import { auth } from "../../firebase-config";

interface PrivateRouteProps {
  children: JSX.Element;
  redirectTo?: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/",
}) => {
  // const { readUser } = UseUser();
  const uid = auth.currentUser?.uid;
  let user;
  if (uid) {
    // user = readUser(uid);
  }
  return user ? children : <Navigate to={redirectTo} replace />;
};
