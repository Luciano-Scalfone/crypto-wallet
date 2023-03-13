import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

export const WithValidationWrapper = styled.div.attrs({
  className: "input-with-validation-wrapper",
})`
  width: 100%;
  
  & .input-with-validation-wrapper__input-area {
    border: 1px solid ${() => COLORS.QUATERNARY500};
    border-radius: 6px;
  }
  
  & .input-with-validation-wrapper__span {
    font: ${() => FONTS.regular.label};
    color: ${() => COLORS.QUATERNARY500};
  }
`;
