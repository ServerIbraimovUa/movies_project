import { FC } from 'react';
import { auth } from '../../firebase-config';

const { Navigate } = require('react-router-dom');

interface RestrictedRouteProps {
  children: JSX.Element;
  redirectTo?: string;
}

const RestrictedRoute: FC<RestrictedRouteProps> = ({
  children,
  redirectTo = '/',
}) => (
  <>{!auth.currentUser ? <Navigate to={redirectTo} replace /> : children}</>
);

export default RestrictedRoute;
