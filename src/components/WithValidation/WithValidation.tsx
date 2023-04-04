import React, { useState } from "react";
import { InputTypes, UserTypes } from "../../interfaces/ComponentPropsTypes";
import { WithValidationWrapper } from "./WithValidationStyles";

const WithValidation = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<InputTypes<string>> => {
  const WithValidationInput = ({ ...props }): JSX.Element => {
    const [isValid, setIsValid] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const { type, callback } = props;

    const handleBlur = ({ target }: any) => {
      type === "email" ? emailValidation(target) : updateCredentials(target);

      setIsDirty(true);
    };

    const emailValidation = (target: any) => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      if (emailRegex.test(target?.value)) {
        setIsValid(true);
        callback(target.value);
      } else if (!emailRegex.test(target?.value) && target?.value?.length > 0) {
        setIsValid(false);
        callback('');
      }
    };

    const updateCredentials = (target: any) => {
      //simple password validation, password should have a length of at least 4
      if (target?.value?.length >= 4) {
        setIsValid(true);
        callback(target.value);
      } else if (target?.value?.length < 4 && target?.value?.length > 0) {
        setIsValid(false);
        callback('');
      }
    };

    return (
      <WithValidationWrapper>
        <div
          className={
            !isValid && isDirty
              ? "input-with-validation-wrapper__input-area"
              : ""
          }
        >
          <WrappedComponent {...(props as P)} callback={handleBlur} />
        </div>
      </WithValidationWrapper>
    );
  };

  return WithValidationInput;
};

export default WithValidation;
