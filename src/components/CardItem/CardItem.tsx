import { CardItemTypes } from "../../interfaces/ComponentPropsTypes";
import CardItemWrapper from "./CardItemStyles";

const CardItem = ({
  icon,
  label,
  title,
  content,
  index,
}: CardItemTypes): JSX.Element => {
  return (
    <CardItemWrapper key={index}>
      <div>{icon}</div>
      <span className="card-item-wrapper__span">{label}</span>
      <h5 className="card-item-wrapper__title">{title}</h5>
      <p className="card-item-wrapper__paragraph">{content}</p>
    </CardItemWrapper>
  );
};

export default CardItem;
