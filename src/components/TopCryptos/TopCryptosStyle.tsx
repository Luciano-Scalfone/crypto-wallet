import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";
import { HeaderCarroucelItemsType } from "../../interfaces/StyledComponents";

export const TopCryptosWrapper = styled.section.attrs({
  className: "top-cryptos-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${() => COLORS.TEXT_BASE};

  & .top-cryptos-wrapper__title {
    font: ${() => FONTS.bold.h5};
    margin: 24px 0 40px 0;
  }

  & .top-cryptos-wrapper__table-wrapper {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  & .top-cryptos-wrapper__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: capitalize;
  }

  & .top-cryptos-wrapper__column:first-child {
    flex: 1;
  }

  & .top-cryptos-wrapper__column:last-child .top-cryptos-wrapper__body-element {
    display: flex;
    flex-direction: row-reverse;
    flex: 1;
  }

  & .top-cryptos-wrapper__header-element {
    color: ${() => COLORS.SECONDARY500};
    font: ${() => FONTS.regular.label};
    padding: 0 24px 8px 24px;
  }

  & .top-cryptos-wrapper__view-more-wrapper {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  & .top-cryptos-wrapper__view-more-wrapper__view-toggle {
    overflow: hidden;
    height: 184px;
  }
`;

export const FakeTableBodyCellWrapper = styled.div.attrs({
  className: "top-cryptos-wrapper__body-element",
})`
  color: ${() => COLORS.TEXT_BASE};
  font: ${() => FONTS.regular.body};
  white-space: nowrap;
  padding: 8px 24px;
  display: flex;
  gap: 8px;

  &:nth-child(odd) {
    background-color: ${() => COLORS.SECONDARY100};
  }

  & .top-cryptos-wrapper__body-svg-element {
    transform: rotate(180deg);
  }
`;
