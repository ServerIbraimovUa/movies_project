import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.css';
import { useTheme } from '../SwitcherTheme/ThemeContext';
import { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';

const Layout: FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default Layout;
