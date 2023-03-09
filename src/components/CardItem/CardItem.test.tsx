import { render } from "@testing-library/react";
import HamburgerMenu from "../icons/HamburgerMenu/HamburgerMenu";
import CardItem from "./CardItem";

const CARDS_MOCK = {
  icon: <HamburgerMenu width="24px" height="24px" />,
  label: "For your company",
  title: "Crypto Solutions",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  index: 1,
};

describe("MainMiddle component", () => {
  let cardItem: HTMLElement;

  beforeEach(() => {
    cardItem = render(<CardItem {...CARDS_MOCK} />).container;
  });

  it("Should exists", () => {
    expect(cardItem).toBeDefined();
  });

  it("Should have a component with className 'card-item-wrapper'", () => {
    const cardItemWrapper = cardItem.querySelector(".card-item-wrapper");

    expect(cardItemWrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'card-item-wrapper__span'", () => {
    const spanElement = cardItem.querySelector(".card-item-wrapper__span");

    expect(spanElement).toBeInTheDocument();
  });

  it("Should have a component with className 'card-item-wrapper__title'", () => {
    const titleElement = cardItem.querySelector(".card-item-wrapper__title");

    expect(titleElement).toBeInTheDocument();
  });

  it("Should have a component with className 'card-item-wrapper__paragraph'", () => {
    const paragraphElement = cardItem.querySelector(
      ".card-item-wrapper__paragraph"
    );

    expect(paragraphElement).toBeInTheDocument();
  });
});
