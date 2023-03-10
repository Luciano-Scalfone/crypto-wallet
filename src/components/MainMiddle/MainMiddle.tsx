import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import Bitcoin from "../icons/Bitcoin/Bitcoin";
import Business from "../icons/Business/Business";
import Machine from "../icons/Machine/Machine";
import Union from "../icons/Union/Union";
import MainMiddleWrapper from "./MainMiddleStyles";

const CARDS_CONTENT = [
  {
    iconElement: <Bitcoin width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    iconElement: <Union width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    iconElement: <Business width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    iconElement: <Machine width="31.87px" height="31.88px" />,
    label: "For your company",
    title: "Crypto Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
];

const MainMiddle = (): JSX.Element => {
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
                icon={content.iconElement}
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
