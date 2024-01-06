
import React from 'react';
import { IoSunny } from 'react-icons/io5';
import { FaRegMoon } from "react-icons/fa";

import { IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from './ThemeContext';
import './SwitcherTheme.css';
import { FaMoon } from "react-icons/fa";

const Switcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <label className={`switch ${theme === 'dark' ? 'dark' : 'light'}`}>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className="slider">
          {theme === 'light' ? (
            <>
              <IoSunny className='sun' />
              <FaRegMoon  className='moon' />
            </>
          ) : (
            <>
              <IoSunnyOutline className='sun' />
              <FaMoon className='moon'/>
            </>
          )}
        </span>
      </label>
    </>
  );
};

export default Switcher;
