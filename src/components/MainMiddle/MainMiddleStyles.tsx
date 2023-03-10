import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

const MainMiddleWrapper = styled.section.attrs({
  className: "main-middle-wrapper",
})`
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  & .main-middle-wrapper__span {
    font: ${() => FONTS.bold.body};
    color: ${() => COLORS.PRIMARY500};
  }

  & .main-middle-wrapper__title {
    font: ${() => FONTS.bold.h4};
    color: ${() => COLORS.TEXT_BASE};
    margin: 4px 0 16px 0;
  }

  & .main-middle-wrapper__paragraph {
    font: ${() => FONTS.regular.label_paragraph};
    color: ${() => COLORS.TEXT_BASE};
    margin-top: 0;
    margin-bottom: 13px;
  }

  & .main-middle-wrapper__cards-wrapper {
    width: 100vw;
    margin: 0 -24px;
    box-sizing: border-box;
  }

  & .main-middle-wrapper__slider {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    overflow-x: scroll;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #f7f7f7 100%
    );
    padding: 11px 24px 56px 24px;
    box-sizing: border-box;

    // the code below hides the scroll for Edge and firefox
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  // the code below hides the scroll for chrome, opera and safary
  & .main-middle-wrapper__slider::-webkit-scrollbar {
    display: none;
  }
`;

export default MainMiddleWrapper;
