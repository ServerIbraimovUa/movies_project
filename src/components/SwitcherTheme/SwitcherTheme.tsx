
// import React from 'react';
// import { IoSunny } from 'react-icons/io5';
// import { FaRegMoon } from "react-icons/fa";

// import { IoSunnyOutline } from 'react-icons/io5';
// import { useTheme } from './ThemeContext';
// import './SwitcherTheme.css';
// import { FaMoon } from "react-icons/fa";

// const Switcher = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <>
//       <label className={`switch ${theme === 'dark' ? 'dark' : 'light'}`}>
//         <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
//         <span className="slider">
//           {theme === 'light' ? (
//             <>
//               <IoSunny className='sun' />
//               <FaRegMoon  className='moon' />
//             </>
//           ) : (
//             <>
//               <IoSunnyOutline className='sun' />
//               <FaMoon className='moon'/>
//             </>
//           )}
//         </span>
//       </label>
//     </>
//   );
// };

// export default Switcher;






// App.js
// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';

// const Container = styled.div`
//   background-color: ${props => props.theme.primaryColor};
//   color: ${props => props.theme.textColor};
//   padding: 20px;
// `;

// const Button = styled.button`
//   background-color: ${props => props.theme.secondaryColor};
//   color: ${props => props.theme.textColor};
//   border: none;
//   padding: 10px;
//   cursor: pointer;
// `;

// const SwitcherTheme = () => {
//   const [theme, setTheme] = React.useState(lightTheme);

//   const toggleTheme = () => {
//     setTheme(theme === lightTheme ? darkTheme : lightTheme);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Button onClick={toggleTheme}>Змінити тему</Button>
//         <h1>Додаток для зміни теми</h1>
//         {/* Додайте ваші компоненти тут */}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default SwitcherTheme;






import React from 'react';
import styled from 'styled-components';
import { IoSunny, IoSunnyOutline } from 'react-icons/io5';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import { darkTheme } from './theme';
import './SwitcherTheme.css';

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  padding: 20px;
`;
// const SunIcon = styled(IoSunny)`
//   margin-left: ${props => (props.theme.mode === 'dark' ? '30px' : '10px')};
//   margin-top: 10px;
//   fill: #9040F6;
//   color: #9040F6;
// `;

// const MoonIcon = styled(FaRegMoon)`
//   margin-left: ${props => (props.theme.mode === 'dark' ? '10px' : '30px')};
//   margin-top: 10px;
//   fill: #9040F6;
//   color: #9040F6;
// `;
// const SunIcondark = styled(IoSunnyOutline)`
//   margin-left: ${props => (props.theme.mode === 'dark' ? '30px' : '10px')};
//   margin-top: 10px;
//   fill: #9040F6;
//   color: #9040F6;
// `;

// const MoonIcondark = styled(FaMoon)`
//   margin-left: ${props => (props.theme.mode === 'dark' ? '10px' : '30px')};
//   margin-top: 10px;
//   fill: #9040F6;
//   color: #9040F6;
// `;


const SwitcherTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <label className={`switch ${theme === darkTheme ? 'dark' : 'light'}`}>
        <input type="checkbox" checked={theme === darkTheme} onChange={toggleTheme} />
        <span className="slider">
          {theme.primaryColor === 'light' ? (
            <>
              <IoSunny className='sun' />
              <FaRegMoon className='moon' />
            </>
          ) : (
            <>
              <IoSunnyOutline className='sun' />
              <FaMoon className='moon' />
            </>
          )}
        </span>
      </label>
    </Container>
  );
};

export default SwitcherTheme;

