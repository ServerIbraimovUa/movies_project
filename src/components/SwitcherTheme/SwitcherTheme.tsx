import React from "react";

import { IoSunny, IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { darkTheme } from "./theme";
import Container from './SwitcherTheme.styled';

const SwitcherTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <label className={`switch ${theme === darkTheme ? "dark" : "light"}`}>
        <input
          type="checkbox"
          checked={theme === darkTheme}
          onChange={toggleTheme}
        />
        <span className="slider">
          {theme === darkTheme ? (
            <>
              <IoSunnyOutline className="sun" />
              <FaMoon className="moon" />
            </>
          ) : (
            <>
              <IoSunny className="sun" />
              <FaRegMoon className="moon" />
            </>
          )}
        </span>
      </label>
    </Container>
  );
};

export default SwitcherTheme;
