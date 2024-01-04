import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import SearchMovies from "../SearchMovies/SearchMovies";
import LanguageSelector from "../Language/LanguageSelector";
import Footer from "../Footer/Footer";
import { useUser } from "../../context/UserContext";

const Layout: FC = () => {
  const { isLoggedIn } = useUser() || {};
  return (
    <>
      <header>
        <Container>
          <nav style={{ display: "flex", gap: "24px" }}>
            <NavLink to="/">Логотип</NavLink>
            <SearchMovies />

            <div>
              <LanguageSelector />
            </div>

            <span>Light Dark</span>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </nav>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
