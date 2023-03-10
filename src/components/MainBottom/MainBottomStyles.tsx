import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

const MainBottomWrapper = styled.section.attrs({
  className: "main-bottom-wrapper",
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background: #d9d9d9;
  padding: 56px 24px;
  margin: 0 -24px;
  background: linear-gradient(
    0.25turn,
    ${() => COLORS.PRIMARY500},
    ${() => COLORS.PRIMARY700}
  );

  & .main-bottom-wrapper__span {
    font: ${() => FONTS.bold.body};
    color: ${() => COLORS.PRIMARY200};
  }

  & .main-bottom-wrapper__title {
    font: ${() => FONTS.bold.h4};
    color: ${() => COLORS.WHITE};
    margin: 0;
    margin-bottom: 8px;
  }

  & .main-bottom-wrapper__paragraph {
    font: ${() => FONTS.regular.label_paragraph};
    color: ${() => COLORS.WHITE};
    margin-top: 0;
    margin-bottom: 40px;
  }

  & .main-bottom-wrapper__input-label {
    font: ${() => FONTS.regular.label};
    color: ${() => COLORS.WHITE};
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  & .main-bottom-wrapper__input {
    padding-left: 15px;
    mix-blend-mode: normal;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 40px;
    border: none;
    outline: none;
  }
`;

export default MainBottomWrapper;
