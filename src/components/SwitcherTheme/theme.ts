
export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;

    headerBackground: string;
    mainBackground: string;
    HomeBackground: string;

    textTitle: string;
  }
  
  export const lightTheme: Theme = {
    headerBackground: 'var(--violet-clr)',
    mainBackground: ' var(--bg-clr-light-theme)',
    HomeBackground: 'var(--light-violet-clr)',

    textTitle: 'var(--text-clr-black)',
    




    primaryColor: '#ffffff',
    secondaryColor: '#f0f0f0',
    textColor: '#000000',
  };
  
  export const darkTheme: Theme = {
    headerBackground: 'var(--dark-clr)',
    mainBackground: ' var(--text-clr-black)',
    HomeBackground: 'var(--dark-clr)',

    textTitle: 'var(--text-clr-white)',



    primaryColor: '#222222',
    secondaryColor: '#333333',
    textColor: '#ffffff',
    
  };
  