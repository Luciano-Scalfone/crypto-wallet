import React from "react";
import { HeaderCoinCarrouselWrapper } from "./HeaderCoinCarrouselStyles";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const HeaderCoinCarrousel = (): JSX.Element => {;
  const colorsLength = (colors.length - 1) * 100;

  return (
    <HeaderCoinCarrouselWrapper carroucelLength={colorsLength} >
      <div
        className="header-coin-carrousel-wrapper__slideshow-slider"
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="header-coin-carrousel-wrapper__slideshow-slider__slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>
    </HeaderCoinCarrouselWrapper>
  );
};

export default HeaderCoinCarrousel;
