import styled from "styled-components";
import COLORS from "../../../themes/colors";
import { HeaderCoinCarroucelType } from "../../../interfaces/StyledComponents";

export const HeaderCoinCarrouselWrapper = styled.div.attrs({
  className: "header-coin-carrousel-wrapper",
})<HeaderCoinCarroucelType>`
  align-self: flex-end;
  border-top: 1px solid ${COLORS.SECONDARY200};
  bottom: 0%;
  flex: 1;
  height: 24px;
  left: 0%;
  overflow: hidden;
  position: absolute;
  transform: tranlate(0, -100%);
  width: 100%;

  & .header-coin-carrousel-wrapper__slideshow-slider {
    animation: moveSlideShow 15s linear infinite;
    white-space: nowrap;
  }

  & .header-coin-carrousel-wrapper__slideshow-slider__slide {
    display: inline-block;
    height: 15px;
    width: 100%;
    border-radius: 40px;
    margin: auto;
  }

  @keyframes moveSlideShow {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        -${(HeaderCoinCarroucelType) => HeaderCoinCarroucelType.carroucelLength}%
      );
    }
  }
`;
