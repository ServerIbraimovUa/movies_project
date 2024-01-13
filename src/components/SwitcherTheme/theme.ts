// theme.ts
export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  }
  
  export const lightTheme: Theme = {
    primaryColor: '#ffffff',
    secondaryColor: '#f0f0f0',
    textColor: '#000000',
  };
  
  export const darkTheme: Theme = {
    primaryColor: '#222222',
    secondaryColor: '#333333',
    textColor: '#ffffff',
  };
  