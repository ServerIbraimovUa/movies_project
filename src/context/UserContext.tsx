import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  isLoggedIn: boolean;
  user: User;
  logIn: (user: User) => void;
  logOut: () => void;
}

export type User = {
  uid: string;
  username: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ uid: "", username: "" });

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const { user } = JSON.parse(currentUser);
      setIsLoggedIn(true);
      setUser(user);
    }
    setLoading(false);
  }, []);

  function logIn(user: User) {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ user, isLoggedIn: true })
    );
  }

  function logOut() {
    setIsLoggedIn(false);
    setUser({ uid: "", username: "" });
    localStorage.removeItem("currentUser");
  }

  if (loading) {
    return null;
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
