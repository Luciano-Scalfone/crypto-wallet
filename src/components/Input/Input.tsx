import { InputTypes } from "../../interfaces/ComponentPropsTypes";
import { InputWrapper } from "./InputStyles";

const Input = ({ type, placeholder, callback, icons }: InputTypes): JSX.Element => {
  return (
    <InputWrapper>
      {icons?.left}
      <input
        type={type}
        placeholder={placeholder}
        className="input-wrapper__input-area"
      />
      {icons?.right}
    </InputWrapper>
  );
};

export default Input;
