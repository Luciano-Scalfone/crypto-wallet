import styled from "styled-components";
import COLORS from "../../themes/colors";

export const ModalWrapper = styled.div.attrs({ className: "modal-wrapper" })`
  background-color: rgba(93, 102, 112, 0.9);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-wrapper__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    width: 272px;

    background-color: ${COLORS.WHITE};
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;
