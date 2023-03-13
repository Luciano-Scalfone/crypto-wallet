import { DebounceInput } from "react-debounce-input";
import { InputTypes } from "../../interfaces/ComponentPropsTypes";
import WithValidation from "../WithValidation/WithValidation";
import { InputWrapper } from "./InputStyles";

const Input = ({ type, placeholder, callback, icons }: InputTypes): JSX.Element => {
  return (
    <InputWrapper>
      {icons?.left}
      <DebounceInput
        type={type}
        placeholder={placeholder}
        className="input-wrapper__input-area"
        onChange={callback}
        onBlur={callback}
        debounceTimeout={1500}
      />
      {icons?.right}
    </InputWrapper>
  );
};

export default WithValidation(Input);
