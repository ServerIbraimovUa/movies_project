import { NavLink } from "react-router-dom";

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default AuthMenu;
