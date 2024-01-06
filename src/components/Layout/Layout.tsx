import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import SearchMovies from "../SearchMovies/SearchMovies";
import LanguageSelector from "../Language/LanguageSelector";
import Switcher from "../SwitcherTheme/SwitcherTheme";
import { useTheme } from "../SwitcherTheme/ThemeContext";

const Layout: FC = () => {
  const { theme } = useTheme();
  return (
    <>
      <header className={`header ${theme}`}>
        <Container>
          <nav style={{ display: "flex", gap: "24px" }}>
            <NavLink to="/">Логотип</NavLink>
            <SearchMovies />

            <div>
              <LanguageSelector />
            </div>

            <span>Light Dark</span>
<Switcher/>

            <AuthMenu />
            <UserMenu/>
          </nav>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* сюди вкладається компонент футер */}</footer>
    </>
  );
};

export default Layout;