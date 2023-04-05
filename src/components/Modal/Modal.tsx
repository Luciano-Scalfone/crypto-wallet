import React from "react";
import { ModalWrapper } from "./ModalStyles";

const WithModal = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const WithModalStyles = ({ ...props }) => {
    return (
      <ModalWrapper>
        <section className="modal-wrapper__modal">
          <WrappedComponent {...(props as P)} />
        </section>
      </ModalWrapper>
    );
  };

  return WithModalStyles;
};

export default WithModal;
