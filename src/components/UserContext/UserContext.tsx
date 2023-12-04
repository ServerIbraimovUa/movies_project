import { FC, createContext, useContext, useState } from "react";


interface IProps {
  children: React.ReactNode;
}
const defaultContext = {
    //add your custom context
}
const UserContext = createContext(defaultContext);

export const useUser = () => useContext(UserContext);

export const UserProvider: FC<IProps> = ({ children }) => {
    //example
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    
    //example, how to use
    // const { isLoggedIn, username, logIn, logOut } = useUser();

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
