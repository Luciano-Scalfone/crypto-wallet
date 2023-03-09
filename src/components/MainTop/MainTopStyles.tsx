import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

const MainTopWrapper = styled.section.attrs({ className: "main-top-wrapper" })`
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;

  & .main-top-wrapper__title {
    font: ${() => FONTS.bold.h5};
    color: ${() => COLORS.PRIMARY500};
    height: fit-content;
    text-align: center;
    margin: 0;
  }

  & .main-top-wrapper__paragraph {
    font: ${() => FONTS.regular.label_paragraph};
    color: ${() => COLORS.TEXT_BASE};
    height: fit-content;
    text-align: center;
    margin: 8px 0 24px 0;
  }

  & .main-top-wrapper__buttons-set {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-top: 24px;

    width: 236px;
    height: 22px;
  }

  & .waves-wrapper {
    margin: 0px -24px;
  }
`;

export default MainTopWrapper;
