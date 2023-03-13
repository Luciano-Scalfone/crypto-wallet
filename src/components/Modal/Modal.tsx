import React from "react";
import { ModalWrapper } from "./ModalStyles";

const WithModal = <P extends object>(
  WrappedComponent: React.ComponentType<P & any>
): React.FC<P> => {
  const WithModalStyles = (): JSX.Element => {
    return (
      <ModalWrapper>
        <section className="modal-wrapper__modal">
          <WrappedComponent />
        </section>
      </ModalWrapper>
    );
  };

  return WithModalStyles;
};

export default WithModal;
