import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

export const InputWrapper = styled.div.attrs({ className: "input-wrapper" })`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    mix-blend-mode: normal;
    border: 1px solid ${COLORS.SECONDARY300};
    border-radius: 6px;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;

  & svg path {
    fill: #323232;
  }

  & .input-wrapper__input-area {
    background-color: transparent;
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
  }

  & .input-wrapper__input-area::placeholder,
  .input-wrapper__input-area::-ms-input-placeholder {
    font: ${() => FONTS.regular.label};
    color: ${COLORS.TEXT_BASE};
  }
`;
