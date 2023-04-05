import React from "react";
import CoinSynch from "../icons/CoinSynch/CoinSynch";
import { FooterWrapper } from "./FooterStyles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <CoinSynch width="95px" height="16px" />
    </FooterWrapper>
  );
};

export default Footer;
