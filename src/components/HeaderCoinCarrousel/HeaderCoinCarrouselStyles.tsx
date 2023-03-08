import styled from "styled-components";
import COLORS from "../../themes/colors";
import { HeaderCoinCarroucelType } from "../../interfaces/StyledComponents";

export const HeaderCoinCarrouselWrapper = styled.div.attrs({
  className: "header-coin-carrousel-wrapper",
})<HeaderCoinCarroucelType>`
  align-self: flex-end;
  border-top: 1px solid ${COLORS.SECONDARY200};
  bottom: 0%;
  box-sizing: border-box;
  flex: 1;
  height: 24px;
  left: 0%;
  overflow: hidden;
  padding: 0 5px;
  position: absolute;
  transform: tranlate(0, -100%);
  width: 100%;

  & .header-coin-carrousel-wrapper__slideshow-slider {
    animation: moveSlideShow 10s ease-in infinite;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @keyframes moveSlideShow {
    0% {
      transform: translateX(0);
    };
    100% {
      transform: translateX(
        -${(HeaderCoinCarroucelType) => HeaderCoinCarroucelType.carroucelLength}px
      );
    }
  }
`;
