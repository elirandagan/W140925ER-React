import { createContext, useContext } from "react";

interface UserContextProps {
  name: string;
  age: number;
  setAge: (age: number) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined,
);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserProvider");
  }

  return context;
};






























