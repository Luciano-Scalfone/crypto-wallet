import React from "react";
import { render } from "@testing-library/react";
import HeaderCoinCarrousel from "./HeaderCoinCarrousel";

const MOCK_CRYPTOS = [
  {
    id: "01",
    code: "BTC",
    name: "Bitcoin",
    ask: "1500",
    bid: "8582",
    var_bid: "+7082",
    exchange: {
      BRL: "23,62",
      USD: "24.499,52",
    },
  },
  {
    id: "01",
    code: "DOG",
    name: "Dogecoin",
    ask: "2000",
    bid: "7230",
    var_bid: "-5230",
    exchange: {
      BRL: "23,62",
      USD: "14.499,52",
    },
  },
];

describe("HeaderCoinCarrousel Component", () => {
  let headerCoinCarrouselComponent: HTMLElement;

  beforeEach(() => {
    headerCoinCarrouselComponent = render(
      <HeaderCoinCarrousel cryptos={MOCK_CRYPTOS} />
    ).container;
  });

  it("Should exists", () => {
    expect(headerCoinCarrouselComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'headerWrapper'", () => {
    const carrouselWrapper = headerCoinCarrouselComponent.querySelector(
      ".header-coin-carrousel-wrapper"
    );

    expect(carrouselWrapper).toBeInTheDocument();
  });

  it("Should have a slider component with className 'header-coin-carrousel-wrapper__slideshow-slider'", () => {
    const slider = headerCoinCarrouselComponent.querySelector(
      ".header-coin-carrousel-wrapper__slideshow-slider"
    );

    expect(slider).toBeInTheDocument();
  });

  it("Should have three component with className 'header-carrousel-items-wrapper'", () => {
    const cryptoItems = headerCoinCarrouselComponent.querySelectorAll(
      ".header-carrousel-items-wrapper"
    );

    expect(cryptoItems).toHaveLength(3);
  });
});
