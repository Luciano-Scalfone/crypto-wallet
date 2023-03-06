import styled from "styled-components";
import COLORS from "../../themes/colors";

export const HeaderWrapper = styled.div.attrs({ className: "headerWrapper" })`
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 19px 0 16px;

  grid-area: head1 / head1 / head4 / head4;
  left: 0%;
  min-height: 81px;
  position: absolute;
  right: 0%;
  top: 0%;
`;
