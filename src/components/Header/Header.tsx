import { FC, useState } from 'react';
import icons from '../../assets/images/sprite.svg';

import LanguageSelector from '../Language/LanguageSelector';
import SwitcherTheme from '../SwitcherTheme/SwitcherTheme';
import UserMenu from '../UserMenu/UserMenu';
import {
  ContainerHeader,
  NavBar,
  SettingMobModalIcon,
  SettingMobileModalBtn,
  SwitcherContainerDesk,
  SwitcherContainerMob,
} from './Header.styled';
import SettingsMobModal from '../SettingsMobModal/SettingsMobModal';
import { useUser } from '../../context/UserContext';
import Icon from '../Icon/Icon';
import { NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import SearchMovies from '../SearchMovies/SearchMovies';
import { Navbar } from 'react-bootstrap';
import AuthMenu from '../AuthMenu/AuthMenu';


import { useTheme } from "../SwitcherTheme/ThemeContext";
import { darkTheme } from "../SwitcherTheme/theme";

const Header: FC = () => {
  const { isLoggedIn } = useUser()!;
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const { pathname } = useLocation();

  const { theme } = useTheme();


  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width:1024px)' });

  return (
    <>
      <ContainerHeader>
        <NavBar>
          <SettingMobileModalBtn
            onClick={() => {
              if (isLoggedIn) {
                handleShow();
              }
            }}
          >
            <SettingMobModalIcon>
              <use href={`${icons}#icon-settings-mob-modal`}></use>
            </SettingMobModalIcon>
          </SettingMobileModalBtn>

          <Navbar.Brand href="/" className="logo">
          {theme === darkTheme ? (
            <>
<Icon className="logo-icon" id="logo" />
            </>
          ) : (
            <>
             <Icon className="logo-icon" id="Logo" />
            </>
          )}
          </Navbar.Brand>

          {isTabletOrDesktop && pathname === '/' && <SearchMovies />}

          <SwitcherContainerDesk>
            <SwitcherTheme />
            {isLoggedIn && (
              <NavLink to="/favorites">
                <Icon className="icon-favorite" id="heart" />
              </NavLink>
            )}
            <LanguageSelector />
          </SwitcherContainerDesk>

          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </NavBar>

        <SwitcherContainerMob>
          <SwitcherTheme />
          {isLoggedIn && (
            <NavLink to="/favorites">
              <Icon className="icon-favorite" id="heart" />
            </NavLink>
          )}
          <LanguageSelector />
        </SwitcherContainerMob>
      </ContainerHeader>
      {isMobile && <SettingsMobModal close={handleClose} show={show} />}
    </>
  );
};

export default Header;
