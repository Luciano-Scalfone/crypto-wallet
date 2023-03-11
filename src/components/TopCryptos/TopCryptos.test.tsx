import { render } from "@testing-library/react";
import TopCryptos from "./TopCryptos";

describe("TopCryptos component", () => {
  let topCryptosComponent: HTMLElement;

  beforeEach(() => {
    topCryptosComponent = render(<TopCryptos />).container;
  });

  it("Should exists", () => {
    expect(topCryptosComponent).toBeDefined();
  });

  it("Should have an element with className 'top-cryptos-wrapper'", () => {
    const topCryptosWrapper = topCryptosComponent.querySelector(
      ".top-cryptos-wrapper"
    );

    expect(topCryptosWrapper).toBeInTheDocument();
  });

  it("Should have an element with className 'top-cryptos-wrapper__title'", () => {
    const topCryptosTitle = topCryptosComponent.querySelector(
      ".top-cryptos-wrapper__title"
    );

    expect(topCryptosTitle).toBeInTheDocument();
  });

  it("Should have three elements with className 'button-wrapper__modifier__text-only'", () => {
    const buttonComponent = topCryptosComponent.querySelector(
      ".button-wrapper__modifier__text-only"
    );

    expect(buttonComponent).toBeInTheDocument();
  });
});
