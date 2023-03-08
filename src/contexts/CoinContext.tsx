import { createContext, useEffect, useState } from "react";
import { Type } from "typescript";

export const CoinContext = createContext<Array<Type> | undefined>(undefined);

const CoinProvider = ({ children }: any): JSX.Element => {
    const [ coins, setCoins ] = useState([]);

    return <CoinContext.Provider value={coins} >{children}</CoinContext.Provider>;
}

export default CoinProvider;
