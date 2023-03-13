import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

export const SignInHeaderWrapper = styled.div.attrs({
  className: "sign-in-header-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & .sign-in-wrapper__icon-wrapper {
    align-self: flex-end;
  }

  & .sign-in-wrapper__icon-wrapper svg path {
    background: #323232;
  }

  & .sign-in-wrapper__title-wrapper,
  .sign-in-wrapper__sign-up-wrapper {
    display: flex;
    align-items: center;
    gap: 1ch;
  }

  & .sign-in-wrapper__modal-title {
    font: ${() => FONTS.regular.body};
    color: ${COLORS.TEXT_BASE};
    white-space: nowrap;
    margin: 0;
  }
`;

export const SignInForgotPasswordWrapper = styled.span.attrs({
  className: "sign-in-forgot-password-wrapper",
})`
  align-self: flex-end;
  font: ${() => FONTS.regular.small_label};
  color: ${COLORS.SECONDARY500};
`;

export const SignInButtonWrapper = styled.div.attrs({
  className: "sign-in-button-wrapper",
})`
  width: 100%;
  
  & .button-wrapper {
    width: 100%;
  }
`;

export const SignInBottomWrapper = styled.div.attrs({
  className: "sign-in-bottom-wrapper",
})`
  display: flex;
  align-items: center;
  gap: 1ch;

  & .sign-in-bottom-wrapper__modal-sign-up-link {
    white-space: nowrap;
    font: ${() => FONTS.regular.label};
    color: ${COLORS.TEXT_BASE};
  }
`;
