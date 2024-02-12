import { createGlobalStyle } from 'styled-components';
import WorkSansRegular from '../assets/fonts/WorkSans/WorkSans-Regular.ttf';
import WorkSansMedium from '../assets/fonts/WorkSans/WorkSans-Medium.ttf';
import WorkSansSemiBold from '../assets/fonts/WorkSans/WorkSans-SemiBold.ttf';
import ZenMaruRegular from '../assets/fonts/ZenMaruGothic/ZenMaruGothic-Regular.ttf';
import ZenMaruMedium from '../assets/fonts/ZenMaruGothic/ZenMaruGothic-Medium.ttf';
import ZenMaruBold from '../assets/fonts/ZenMaruGothic/ZenMaruGothic-Bold.ttf';
import { device } from './deviceSize';

export const GlobalStyle = createGlobalStyle`

:root{
    // COLORS
    /* LIGHT THEME */
    --dark-violet-clr: #9040F6;
    --violet-clr: #ECDEFF;
    --light-violet-clr: #F4EBFF;
    --bg-clr-light-theme: #F5F5F5;

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
    --violet-hover: #6d0fe4;
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

    --zen-maru-font-regular: ${ZenMaruRegular};
    --zen-maru-font-medium: ${ZenMaruMedium};
    --zen-maru-font-bold: ${ZenMaruBold};

    --work-sans-font-regular: ${WorkSansRegular};
    --work-sans-font-medium: ${WorkSansMedium};
    --work-sans-font-semi-bold: ${WorkSansSemiBold};
    
}


/* FONTS */

@font-face {
    font-family: 'WorkSans-Regular',sans-serif;
    src: url(${WorkSansRegular}) format('truetype'),
    }
    @font-face {
    font-family: 'WorkSans-Medium',sans-serif;
    src: url(${WorkSansMedium}) format('truetype'),
    }
    @font-face {
    font-family: 'WorkSans-SemiBold',sans-serif;
    src: url(${WorkSansSemiBold}) format('truetype'),
    }
    @font-face {
    font-family: 'ZenMaruGothic-Regular',sans-serif;
    src: url(${ZenMaruRegular}) format('truetype'),
    }
     @font-face {
    font-family: 'ZenMaruGothic-Medium',sans-serif;
    src: url(${ZenMaruMedium}) format('truetype'),
    }
     @font-face {
    font-family: 'ZenMaruGothic-Bold',sans-serif;
    src: url(${ZenMaruBold}) format('truetype'),
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
    overflow-x: hidden;
    font-family: 'ZenMaru-Gothic', 'WorkSans', sans-serif;
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

.container {
  width: 100%;
  margin: 0 auto; 
  overflow-x: hidden;
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
`;
