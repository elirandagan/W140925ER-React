import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = (props: UserProviderProps) => {
  const { children } = props;

  const [age, setAge] = useState<number>(18);
  const name = "Eliran";

  return (
    <UserContext.Provider value={{ age, setAge, name }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
