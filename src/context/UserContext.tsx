import { ReactNode, createContext, useContext, useState } from "react";


interface UserContextType {
  isLoggedIn: boolean;
  userName: string;
  logIn:  (name: string) => void;
  logOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  console.log(isLoggedIn, userName);

   function logIn(name: string) {
     setIsLoggedIn(true);
     setUserName(name)
   }
   function logOut() {
     setIsLoggedIn(false);
     setUserName('')
   }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userName,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
