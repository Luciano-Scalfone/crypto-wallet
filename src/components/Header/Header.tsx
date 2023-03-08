import React from "react";
import HeaderCoinCarrousel from "../HeaderCoinCarrousel/Header/HeaderCoinCarrousel";
import CoinSynch from "../icons/CoinSynch/CoinSynch";
import HamburgerMenu from "../icons/HamburgerMenu/HamburgerMenu";
import { HeaderWrapper } from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <section className="header-wrapper__logo-and-menu-section">
        <CoinSynch width={94.48} height={16} />
        <HeaderCoinCarrousel />
        <HamburgerMenu width={18} height={18} />
      </section>
    </HeaderWrapper>
  );
};

export default Header;
