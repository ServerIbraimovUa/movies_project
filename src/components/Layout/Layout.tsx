import React from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <Container>
          <NavLink to="/">Logo</NavLink>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
          </nav>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
