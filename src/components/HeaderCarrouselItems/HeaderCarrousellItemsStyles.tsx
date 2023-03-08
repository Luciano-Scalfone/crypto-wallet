import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";
import { HeaderCarroucelItemsType } from "../../interfaces/StyledComponents";

export const HeaderCarrouselItemsWrapper = styled.div.attrs({
  className: "header-carrousel-items-wrapper",
})<HeaderCarroucelItemsType>`
  display: inline-block;
  width: 120px;

  & span {
    font: ${() => FONTS.SMALL_LABEL};
    color: ${() => COLORS.SECONDARY800};
  }

  & .header-carrousel-items-wrapper__code {
    margin-right: 8px;
  }

  & .header-carrousel-items-wrapper__exchange {
    margin-right: 8px;
  }

  & .header-carrousel-items-wrapper__var-bid {
    color: ${(props) => props.varBid > 0 ? COLORS.TERTIARY700: COLORS.QUATERNARY700 };
  }
`;
