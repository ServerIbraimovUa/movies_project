import React from "react";
import styled from "styled-components";
import { IoSunny, IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { darkTheme } from "./theme";
import "./SwitcherTheme.css";

const Container = styled.div`
  /* background-color: ${(props) => props.theme.primaryColor}; */
  /* color: ${(props) => props.theme.textColor}; */

  //padding: 20px;
`;

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
          {theme.primaryColor === "light" ? (
            <>
              <IoSunny className="sun" />
              <FaRegMoon className="moon" />
            </>
          ) : (
            <>
              <IoSunnyOutline className="sun" />
              <FaMoon className="moon" />
            </>
          )}
        </span>
      </label>
    </Container>
  );
};

export default SwitcherTheme;
