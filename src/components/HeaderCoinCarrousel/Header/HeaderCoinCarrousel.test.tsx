import React from "react";
import { render } from "@testing-library/react";
import HeaderCoinCarrousel from "./HeaderCoinCarrousel";

describe("HeaderCoinCarrousel Component", () => {
  let headerCoinCarrouselComponent: HTMLElement;

  beforeEach(() => {
    headerCoinCarrouselComponent = render(<HeaderCoinCarrousel />).container;
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
});
