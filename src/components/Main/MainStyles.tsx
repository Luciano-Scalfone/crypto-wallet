import styled from "styled-components";
import COLORS from "../../themes/colors";

const MainWrapper = styled.main.attrs({ className: 'main-wrapper' })`
    background-color: ${COLORS.WHITE};
    grid-area: body1 / body1 / body4 / body4;
`;

export default MainWrapper;
