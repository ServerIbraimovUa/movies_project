import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import SearchMovies from "../SearchMovies/SearchMovies";
import LanguageSelector from "../Language/LanguageSelector";
import Footer from "../Footer/Footer";
import { useUser } from "../../context/UserContext";

import "./Layout.css";
import SwitcherTheme from "../SwitcherTheme/SwitcherTheme";
import { useTheme } from "../SwitcherTheme/ThemeContext";

const Layout: FC = () => {
  const { theme } = useTheme();

  const { isLoggedIn } = useUser()!;
  console.log(isLoggedIn);
  return (
    <>
      <header className={`header ${theme === 'dark' ? 'dark' : 'light'}`}>
        <Container>
          <nav style={{ display: "flex", gap: "24px" }}>
            <NavLink to="/">Логотип</NavLink>
            <SearchMovies />

            <div>
              <LanguageSelector />
            </div>

            <div>
              <SwitcherTheme />
            </div>
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
