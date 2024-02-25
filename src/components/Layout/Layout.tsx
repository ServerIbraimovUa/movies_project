import { FC, useState } from "react";
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

import styled, { ThemeProvider } from "styled-components";
import icons from "../../assets/images/sprite.svg";
import { SettingMobModalIcon, SettingMobileModalBtn } from "./Layout.styled";
import SettingsMobModal from "../SettingsMobModal/SettingsMobModal";

const ContainerHeader = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
`;

const Layout: FC = () => {
  const { theme } = useTheme();
  const { isLoggedIn } = useUser()!;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <ThemeProvider theme={theme}>
      <header>
        <ContainerHeader>
          <Container>
            <nav style={{ display: 'flex', gap: '24px' }}>
              <SettingMobileModalBtn onClick={handleShow}>
                <SettingMobModalIcon>
                  <use href={`${icons}#icon-settings-mob-modal`}></use>
                </SettingMobModalIcon>
              </SettingMobileModalBtn>
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
        </ContainerHeader>
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
      <SettingsMobModal close={handleClose} show={show} />
    </ThemeProvider>
  );
};

export default Layout;
