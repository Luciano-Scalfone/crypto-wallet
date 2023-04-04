import { CardItemTypes } from "../../interfaces/ComponentPropsTypes";
import CardItem from "../CardItem/CardItem";
import Bitcoin from "../icons/Bitcoin/Bitcoin";
import Business from "../icons/Business/Business";
import Machine from "../icons/Machine/Machine";
import Union from "../icons/Union/Union";
import MainMiddleWrapper from "./MainMiddleStyles";

const CARDS_CONTENT: CardItemTypes[] = [
  {
    icon: <Bitcoin width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    icon: <Union width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    icon: <Business width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    icon: <Machine width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
];

const MainMiddle: React.FC = () => {
  return (
    <MainMiddleWrapper>
      <span className="main-middle-wrapper__span">Lorem ipsum</span>
      <h4 className="main-middle-wrapper__title">Lorem ipsum</h4>
      <p className="main-middle-wrapper__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <div className="main-middle-wrapper__cards-wrapper">
        <div className="main-middle-wrapper__slider">
          {CARDS_CONTENT.map((content, index) => {
            return (
              <CardItem
                icon={content.icon}
                label={content.label}
                title={content.title}
                content={content.content}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </MainMiddleWrapper>
  );
};

export default MainMiddle;
