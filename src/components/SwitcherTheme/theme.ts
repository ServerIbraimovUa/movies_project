
export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    bgHomeColor: string;
    textHomeColor: string;
    mainBgColor: string;
  }
  
  export const lightTheme: Theme = {
    


    bgHomeColor: 'var(--light-violet-clr)',
    primaryColor: '#ffffff',
    secondaryColor: '#f0f0f0',
    textColor: '#000000',
    textHomeColor: 'var(--text-clr-black:)',
    mainBgColor: 'var(--text-clr-white)',
  };
  
  export const darkTheme: Theme = {


    bgHomeColor: 'var(--dark-clr)',
    primaryColor: '#222222',
    secondaryColor: '#333333',
    textColor: '#ffffff',
    textHomeColor: 'var(--text-clr-white)',
    mainBgColor: 'var(--text-clr-black)',
  };
  