import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { useTheme } from "../SwitcherTheme/ThemeContext";
import { ThemeProvider } from "styled-components";
import Header from "../Header/Header";


import './Layout.css';
import SwitcherTheme from '../SwitcherTheme/SwitcherTheme';

import styled from 'styled-components';
import icons from '../../assets/images/sprite.svg';
import { SettingMobModalIcon, SettingMobileModalBtn } from './Layout.styled';
import SettingsMobModal from '../SettingsMobModal/SettingsMobModal';

const ContainerHeader = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
`;

const Layout: FC = () => {

  const { isLoggedIn } = useUser()!;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>

      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
      <SettingsMobModal close={handleClose} show={show} />
      </>

  );
};

export default Layout;
