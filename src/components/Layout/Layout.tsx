import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import SearchMovies from "../SearchMovies/SearchMovies";
import LanguageSelector from "../Language/LanguageSelector";
import Footer from "../Footer/Footer";
import { UseUser } from "../../hooks/useUser";
import { auth } from "../../firebase-config";

const Layout: FC = () => {
  const { readUser } = UseUser();

  const uid = auth.currentUser?.uid;
  let user;
  if (uid) {
    user = readUser(uid);
  }
  console.log(user)

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
