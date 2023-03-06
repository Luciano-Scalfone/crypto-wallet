import React from "react";
import CoinSynch from "../icons/CoinSynch/CoinSynch";
import HamburgerMenu from "../icons/HamburgerMenu/HamburgerMenu";
import { HeaderWrapper } from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <CoinSynch width={94.48} height={16} />
      <HamburgerMenu width={24} height={24} />
    </HeaderWrapper>
  );
};

export default Header;
