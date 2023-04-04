import { DebounceInput } from "react-debounce-input";
import { InputTypes } from "../../interfaces/ComponentPropsTypes";
import WithValidation from "../WithValidation/WithValidation";
import { InputWrapper } from "./InputStyles";

const Input: React.FC<InputTypes<string>> = ({
  type,
  placeholder,
  callback,
  icons,
}) => {
  const handleEvents = ({ target }: { target: HTMLInputElement }) => {
    callback(target.value);
  };

  return (
    <InputWrapper>
      {icons?.left}
      <DebounceInput
        type={type}
        placeholder={placeholder}
        className="input-wrapper__input-area"
        onChange={handleEvents}
        onBlur={handleEvents}
        debounceTimeout={1500}
      />
      {icons?.right}
    </InputWrapper>
  );
};

export default WithValidation(Input);
