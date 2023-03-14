import { createContext, useState } from "react";

export const UserContext = createContext<any | undefined>(undefined);

const UserProvider = ({ children }: any): JSX.Element => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
