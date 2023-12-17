import React, { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import SearchMovies from "../SearchMovies/SearchMovies";
import LanguageSelector from "../Language/LanguageSelector";
import Footer from "../Footer/Footer";
import { auth } from "../../firebase-config";
import { User } from "firebase/auth";

const Layout: FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

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
            {user ? <UserMenu /> : <AuthMenu />}
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
