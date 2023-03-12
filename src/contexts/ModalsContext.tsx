import { createContext, useState } from "react";

export const ModalsContext = createContext<any | undefined>(undefined);

const ModalsProvider = ({ children }: any): JSX.Element => {
    const [ showSignIn, setShowSignIn ] = useState<any>(false);

    return <ModalsContext.Provider value={{showSignIn, setShowSignIn}} >{children}</ModalsContext.Provider>;
}

export default ModalsProvider;
