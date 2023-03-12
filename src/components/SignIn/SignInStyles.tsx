import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

export const SignInWrapper = styled.div.attrs({ className: "sign-in-wrapper" })`
  background-color: rgba(93, 102, 112, 0.9);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & .sign-in-wrapper__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    width: 272px;

    background-color: ${COLORS.WHITE};
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  & .sign-in-wrapper__icon-and-title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  & .sign-in-wrapper__icon-wrapper,
  .sign-in-wrapper__modal-forgot-password {
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

  & .sign-in-wrapper__modal-email-input,
  .sign-in-wrapper__modal-password-input {
    display: flex;
    gap: 8px;
    background: #ffffff;
    mix-blend-mode: normal;
    border: 1px solid ${COLORS.SECONDARY300};
    border-radius: 6px;
    width: 100%;
    height: 48px;
    padding: 16px;
    box-sizing: border-box;
  }

  & .sign-in-wrapper__modal-email-input svg path,
  .sign-in-wrapper__modal-password-input svg path {
    fill: #323232;
  }

  & .sign-in-wrapper__modal-input-area {
    background-color: transparent;
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
  }

  & .sign-in-wrapper__modal-input-area::placeholder,
  .sign-in-wrapper__modal-input-area::-ms-input-placeholder,
  .sign-in-wrapper__modal-sign-up-link {
    font: ${() => FONTS.regular.label};
    color: ${COLORS.TEXT_BASE};
  }

  & .sign-in-wrapper__modal-sign-up-link {
    white-space: nowrap;
  }

  & .sign-in-wrapper__modal-forgot-password {
    font: ${() => FONTS.regular.small_label};
    color: ${COLORS.SECONDARY500};
  }

  & .button-wrapper {
    width: 100%;
  }

  & .sign-in-wrapper__sign-up-wrapper svg {
    margin-top: 5px;
  }
`;
