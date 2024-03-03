import { createGlobalStyle } from 'styled-components';
import { device } from './deviceSize';
import './index.css';

export const GlobalStyle = createGlobalStyle`

:root{
    // COLORS
    /* LIGHT THEME */
    --dark-violet-clr: #9040F6;
    --violet-clr: #ECDEFF;
    --light-violet-clr: #F4EBFF;
    --bg-clr-light-theme: rgba(113, 0, 255, 0.05);

    --text-clr-black: #2F2E30;
    --text-clr-grey: #61646B;
    --text-clr-white: #FBF8FF;
    --text-clr-red: #f85d52;

    --violet-disabled-clr: #CFC5DC;

    /* DARK THEME */
    --dark-clr: #1C1C1C;
    --grey-bg-clr: #61646B;
    --grey-disabled-clr: #E4E4E4;

     /* HOVER ACTIVE*/
    //LIGHT
    --violet-hover: #6d0fe4;
    --violet-click: #4A00A8;
    --violet-disabled-clr: #CFC5DC;
    --grey-hover: #c7c7c7;
    

    //DARK
    --black-bg-btn-hover: #2E0044;
    --grey-hover: #c7c7c7;


/* SHADOW */
// DARK
    --shadow: box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);

    // FONTS
    --font-size: 20px;
    --line-height: 1.2;
    --regular-font-weight: 400;
    --medium-font-weight: 500;
    --semi-bold-font-weight: 600;
    --bold-font-weight: 700;

    --main-font: "Zen Maru Gothic", serif;
    --second-font: "Work Sans", sans-serif;
    
    // Animation
     --hover-focus-trans: 350ms cubic-bezier(0.4, 0, 0.2, 1);
}
    
    /* RESET STYLES */
    a {
  text-decoration: none;
  color: inherit;
}


button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
}

a, button, input, select, option {
   cursor: pointer;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

p {
  margin: 0;
}

/* STANDART STYLES */
    
    body {
    margin: 0; 
    font-family: var(--main-font);
    font-weight: var(--regular-font-weight);
    font-style: normal;
    font-size: var(--font-size);
    line-height: var(--line-height);
    
    color: var(--text-clr-black);
    background-color: var(--bg-clr-light-theme);   
}

#root {
  display: flex;
  flex-direction: column;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

main {
  flex-grow: 1;
}

 .is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.no-scroll {
  overflow: hidden;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.main-container, .info-container {
  width: 100%;
  margin: 0 auto; 
 
  
  @media ${device.mobile} {
        max-width: 398px;
       
        }
  
  @media ${device.tablet} {
        max-width: 962px;
        }

    @media ${device.desktop} {        
        max-width: 1280px;       
      }
}

.info-container{
  padding-top: 42px;
  height: 100vh;
}
`;
