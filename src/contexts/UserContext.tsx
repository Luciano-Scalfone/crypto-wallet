import { PropsWithChildren, createContext, useState } from "react";

type ContextType = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<ContextType>({} as ContextType);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
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
