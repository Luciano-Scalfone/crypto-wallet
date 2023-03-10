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
});
