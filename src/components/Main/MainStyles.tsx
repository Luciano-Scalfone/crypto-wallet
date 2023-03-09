import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

const MainWrapper = styled.main.attrs({ className: "main-wrapper" })`
  background-color: ${COLORS.WHITE};
  grid-area: body1 / body1 / body4 / body4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 24px;

  & .main-wrapper__title {
    font: ${() => FONTS.bold.h5};
    color: ${() => COLORS.PRIMARY500};
    height: fit-content;
    text-align: center;
    margin: 0;
  }

  & .main-wrapper__paragraph {
    font: ${() => FONTS.regular.label_paragraph};
    color: ${() => COLORS.TEXT_BASE};
    height: fit-content;
    text-align: center;
    margin: 8px 0 24px 0;
  }

  & .main-wrapper__buttons-set {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-top: 24px;

    width: 236px;
    height: 22px;
  }

  & .main-wrapper__wave-component {
    position: absolute;
    height: 180px;
    width: 100%;
    left: -147;
    top: 407px;
    overflow: hidden;
  }
`;

export default MainWrapper;
