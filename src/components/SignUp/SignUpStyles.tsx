import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";
import { InputWrapperType } from "../../interfaces/StyledComponents";

export const SignUpHeaderWrapper = styled.div.attrs({
  className: "sign-up-header-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & .sign-up-wrapper__icon-wrapper {
    align-self: flex-end;
  }

  & .sign-up-wrapper__icon-wrapper svg path {
    background: #323232;
  }

  & .sign-up-wrapper__title-wrapper,
  .sign-up-wrapper__sign-up-wrapper {
    display: flex;
    align-items: center;
    gap: 1ch;
  }

  & .sign-up-wrapper__modal-title {
    font: ${() => FONTS.regular.body};
    color: ${COLORS.TEXT_BASE};
    white-space: nowrap;
    margin: 0;
  }
`;

export const SignupConfirmPasswordWrapper = styled.div.attrs({
  className: "sign-up-confirm-password-wrapper",
})<InputWrapperType>`
  width: 100%;

  & .input-with-validation-wrapper {
    border: ${(props) =>
      !props.isSamePassword && `1px solid ${COLORS.QUATERNARY500}`};
    border-radius: 6px;
  }
`;

export const SignupCheckboxWrapper = styled.label.attrs({
  className: "sign-up-checkbox-wrapper",
})`

  // code extracted from https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
  
  font: ${() => FONTS.regular.small_label};
  color: ${COLORS.TEXT_BASE};
  position: relative;
  display: flex;
  gap: 16px;

  & .sign-up-checkbox-wrapper__checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .sign-up-checkbox-wrapper__custom-checkbox {
    min-width: 16px;
    height: 16px;
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.PRIMARY500};
    border-radius: 4px;
  }

  & input:checked ~ .sign-up-checkbox-wrapper__custom-checkbox {
    background-color: ${COLORS.PRIMARY300};
  }

  & .sign-up-checkbox-wrapper__custom-checkbox:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .sign-up-checkbox-wrapper__custom-checkbox:after {
    display: block;
  }

  & .sign-up-checkbox-wrapper__custom-checkbox:after {
    left: 5px;
    width: 5px;
    height: 10px;
    border: solid ${COLORS.WHITE};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: ${COLORS.PRIMARY300};
  }
`;

export const SignupButtonWrapper = styled.div.attrs({
  className: "sign-up-button-wrapper",
})`
  width: 100%;

  & .button-wrapper {
    width: 100%;
  }
`;

export const SignUpBottomWrapper = styled.div.attrs({
  className: "sign-up-bottom-wrapper",
})`
  display: flex;
  align-items: center;
  gap: 1ch;

  & .sign-up-bottom-wrapper__modal-sign-in-link {
    white-space: nowrap;
    font: ${() => FONTS.regular.label};
    color: ${COLORS.TEXT_BASE};
  }
`;
