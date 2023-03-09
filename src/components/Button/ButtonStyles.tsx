import styled from "styled-components";
import { ButtonWrapperType } from "../../interfaces/StyledComponents";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

export const ButtonWrapper = styled.button.attrs({
  className: "button-wrapper",
})<ButtonWrapperType>`
  all: unset;

  & .button-wrapper__modifier__primary {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    box-sizing: border-box;

    width: ${(props) => props?.buttonSize?.width || "180px"};
    height: ${(props) => props?.buttonSize?.height || "32px"};

    background: ${() => COLORS.PRIMARY500};
    border-radius: 32px;

    font: ${() => FONTS.regular.label};
    color: ${() => COLORS.WHITE};
    text-align: center;
  }

  & .button-wrapper__modifier__secondary {
    display: flex;
    align-items: flex-start;
    padding: 4px 16px;
    box-sizing: border-box;

    background: ${() => COLORS.PRIMARY100};
    border-radius: 4px;

    font: ${() => FONTS.regular.small_label};
    color: ${() => COLORS.PRIMARY500};
    text-align: center;
  }
`;
