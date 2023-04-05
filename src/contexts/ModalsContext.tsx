import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  PropsWithChildren,
} from "react";

type ModalsContextValueType = {
  showSignIn: boolean;
  setShowSignIn: Dispatch<SetStateAction<boolean>>;
  showSignUp: boolean;
  setShowSignUp: Dispatch<SetStateAction<boolean>>;
  showTrayMenu: boolean;
  setShowTrayMenu: Dispatch<SetStateAction<boolean>>;
};

export const ModalsContext = createContext<ModalsContextValueType>({} as ModalsContextValueType);

const ModalsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showTrayMenu, setShowTrayMenu] = useState<boolean>(false);

  return (
    <ModalsContext.Provider
      value={{
        showSignIn,
        setShowSignIn,
        showSignUp,
        setShowSignUp,
        showTrayMenu,
        setShowTrayMenu,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
