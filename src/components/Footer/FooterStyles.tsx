import styled from "styled-components";
import COLORS from "../../themes/colors";

export const FooterWrapper = styled.div.attrs({ className: "footer-wrapper" })`
  background-color: ${COLORS.WHITE};
  box-shadow: 0px -4px 8px rgba(77, 77, 77, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: foot1 / foot1 / foot4 / foot4;
`;
