import React from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import SearchMovies from "../SearchMovies/SearchMovies";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <Container>
          <nav style={{ display: "flex", gap: "24px" }}>
            <NavLink to="/">Logo</NavLink>
            {/* компонент поіску фільмів  */}
            <SearchMovies />

            {/* логіка перимикачей */}
            <span>EN UA</span>
            <span>Light Dark</span>

            {/* тут буде перевірка вошел пользователь чи ні */}
            <AuthMenu />
            <UserMenu />
          </nav>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* сюди вкладуєтся компонент футер */}</footer>
    </>
  );
};

export default Layout;
