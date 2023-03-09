import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

const MainMiddleWrapper = styled.section.attrs({ className: "main-middle-wrapper" })`
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & .main-middle-wrapper__span {
    font: ${() => FONTS.bold.body};
    color: ${() => COLORS.PRIMARY500};
  }
`;

export default MainMiddleWrapper;
