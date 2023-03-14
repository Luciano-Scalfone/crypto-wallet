import styled from "styled-components";
import COLORS from "../../themes/colors";
import FONTS from "../../themes/fonts";

export const TrayMenuWrapper = styled.div.attrs({
  className: "tray-menu-wrapper",
})`
  background-color: rgba(51, 48, 62, 0.7);
  position: absolute;

  display: flex;
  justify-content: flex-end;

  height: 100vh;
  width: 100%;
  transform: translate(0, -56px);

  & .tray-menu-wrapper__tray-menu {
    box-sizing: border-box;

    position: absolute;
    width: 224px;
    height: 100%;
    transform: translate(0, -24px);

    background: ${() => COLORS.WHITE};

    border-width: 1px 0px;
    border-style: solid;
    border-color: ${() => COLORS.SECONDARY300};
    padding: 42px 62px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  & .tray-menu-wrapper__links {
    font: ${() => FONTS.regular.label};
  }

  & .button-wrapper {
    width: 100%;
  }
`;
