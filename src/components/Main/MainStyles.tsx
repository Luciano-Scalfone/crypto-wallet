import styled from "styled-components";
import COLORS from "../../themes/colors";

const MainWrapper = styled.main.attrs({ className: "main-wrapper" })`
  background-color: ${COLORS.WHITE};
  grid-area: body1 / body1 / body4 / body4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 24px 0 24px;
  gap: 56px;
`;

export default MainWrapper;
