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
