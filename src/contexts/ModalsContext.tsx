import { createContext, useState } from "react";

export const ModalsContext = createContext<any | undefined>(undefined);

const ModalsProvider = ({ children }: any): JSX.Element => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <ModalsContext.Provider
      value={{ showSignIn, setShowSignIn, showSignUp, setShowSignUp }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
