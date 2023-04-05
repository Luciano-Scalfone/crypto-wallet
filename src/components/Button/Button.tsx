import { ButtonTypes } from "../../interfaces/ComponentPropsTypes";
import { ButtonWrapper } from "./ButtonStyles";

const Button: React.FC<ButtonTypes> = ({
  type,
  content,
  callback,
  size,
  disabled,
  icon,
}) => {
  return (
    <ButtonWrapper onClick={callback} buttonSize={size} disabled={disabled}>
      <div className={`button-wrapper__modifier__${type}`}>
        {content}
        {icon}
      </div>
    </ButtonWrapper>
  );
};

export default Button;
