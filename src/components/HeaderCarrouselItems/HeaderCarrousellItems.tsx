import React from "react";
import { HeaderCarrouselItemsTypes } from "../../interfaces/ComponentPropsTypes";
import { HeaderCarrouselItemsWrapper } from "./HeaderCarrousellItemsStyles";

const HeaderCarrouselItems: React.FC<HeaderCarrouselItemsTypes> = ({
  code,
  varBid,
  exchange,
}) => {
  return (
    <HeaderCarrouselItemsWrapper key={code} varBid={varBid}>
      <span className="header-carrousel-items-wrapper__code">{code}</span>
      <span className="header-carrousel-items-wrapper__exchange">
        {exchange}
      </span>
      <span className="header-carrousel-items-wrapper__var-bid">{`${
        varBid > 0 ? "+" + varBid : varBid
      }`}</span>
    </HeaderCarrouselItemsWrapper>
  );
};

export default HeaderCarrouselItems;
