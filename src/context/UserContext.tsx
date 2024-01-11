import { ReactNode, createContext, useContext, useState } from "react";
import { UserType } from "../types/user";
import { writeUserData } from "../db/writeData";
import { readData } from "../db/readData";
import { deleteUserData } from "../auth/database/deleteFunc";
import { updateData } from "../db/updateData";

interface typeUser {
  isLoggedIn: boolean;
  user: UserType | null;
  createUser: (user: UserType) => void;
  deleteUser: (uid: string) => void;
  readUser: (uid: string) => Promise<any>;
  updateUser: (user: UserType) => void;
  logIn: (user: UserType) => void;
  logOut: () => void;
}

const UserContext = createContext<typeUser | null>(null);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function createUser(user: UserType) {
    console.log(user);
    writeUserData(user);
  }
  function deleteUser(uid: string) {
    deleteUserData(uid);
  }
  function readUser(uid: string) {
    const data = readData(uid);
    return data;
  }
  function updateUser(user: UserType) {
    updateData(user);
  }
  function logIn(user: UserType) {
    setUser(user);
    setIsLoggedIn(true);
  }
  function logOut() {
    setUser(null);
    setIsLoggedIn(false);
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        createUser,
        deleteUser,
        readUser,
        updateUser,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
