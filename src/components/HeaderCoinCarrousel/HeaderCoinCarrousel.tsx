import React from "react";
import HeaderCarrouselItems from "../HeaderCarrouselItems/HeaderCarrousellItems";
import { HeaderCoinCarrouselWrapper } from "./HeaderCoinCarrouselStyles";

const HeaderCoinCarrousel = ({ cryptos }: any): JSX.Element => {
  const cryptosLength = cryptos?.length * 145;

  return (
    <HeaderCoinCarrouselWrapper carroucelLength={cryptosLength}>
      <div className="header-coin-carrousel-wrapper__slideshow-slider">
        {cryptos?.map((crypto: any, index: number) => (
          <HeaderCarrouselItems
            key={crypto.code + index}
            code={crypto.code}
            varBid={Number(crypto.var_bid)}
            exchange={`R$${crypto.exchange.BRL}`}
          />
        ))}
      </div>
    </HeaderCoinCarrouselWrapper>
  );
};

export default HeaderCoinCarrousel;
