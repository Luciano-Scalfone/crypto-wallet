import styled from "styled-components";
import COLORS from "../../themes/colors";

export const HeaderWrapper = styled.div.attrs({ className: "header-wrapper" })`
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);

  grid-area: head1 / head1 / head4 / head4;
  height: 81px;
  left: 0%;
  position: absolute;
  right: 0%;
  top: 0%;

  & .header-wrapper__logo-and-menu-section {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 20px 19px 0 16px;
    position: relative;
  }
`;
