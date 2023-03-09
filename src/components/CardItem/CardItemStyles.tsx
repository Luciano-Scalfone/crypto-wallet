import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

const CardItemWrapper = styled.aside.attrs({ className: "card-item-wrapper" })`
  display: inline-block;
  padding: 24px;
  gap: 16px;
  min-width: 200px;
  height: 260px;

  background: ${COLORS.WHITE};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  & .card-item-wrapper__span {
    font: ${() => FONTS.bold.label};
    color: ${() => COLORS.PRIMARY500};
  }

  & .card-item-wrapper__title {
    font: ${() => FONTS.bold.h5};
    color: ${() => COLORS.TEXT_BASE};
    margin: 4px 0 8px 0;
  }

  & .card-item-wrapper__paragraph {
    font: ${() => FONTS.regular.label_paragraph};
    color: ${() => COLORS.TEXT_BASE};
    margin: 0;
  }
`;

export default CardItemWrapper;
