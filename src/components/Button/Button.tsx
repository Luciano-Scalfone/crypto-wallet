import { ButtonTypes } from "../../interfaces/ComponentPropsTypes";
import { ButtonWrapper } from "./ButtonStyles";

const Button = ({ type, content, callback, size }: ButtonTypes): JSX.Element => {
  return (
    <ButtonWrapper onClick={callback} buttonSize={size} >
      <div className={`button-wrapper__modifier__${type}`}>{content}</div>
    </ButtonWrapper>
  );
};

export default Button;
