import React from "react";
import { render } from "@testing-library/react";
import HeaderCarrouselItems from "./HeaderCarrousellItems";

const MOCK_LATEST_CRYPTO = {
  code: "BTC",
  varBid: -7000,
  exchange: "R$23,52",
};

describe("HeaderCarrouselItems Component", () => {
  let headerCarrouselItems: HTMLElement;

  beforeEach(() => {
    headerCarrouselItems = render(
      <HeaderCarrouselItems
        code={MOCK_LATEST_CRYPTO.code}
        varBid={MOCK_LATEST_CRYPTO.varBid}
        exchange={MOCK_LATEST_CRYPTO.exchange}
      />
    ).container;
  });

  it("Should exists", () => {
    expect(headerCarrouselItems).toBeDefined();
  });

  it("Should have a HeaderCarrouselItemsWrapper component with className 'header-carrousel-items-wrapper'", () => {
    const wrapper = headerCarrouselItems.querySelector(
      ".header-carrousel-items-wrapper"
    );

    expect(wrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'header-carrousel-items-wrapper__code'", () => {
    const code = headerCarrouselItems.querySelector(
      ".header-carrousel-items-wrapper__code"
    );

    expect(code).toBeInTheDocument();
  });

  it("Should have a component with className 'header-carrousel-items-wrapper__var-bid'", () => {
    const bidVariation = headerCarrouselItems.querySelector(
      ".header-carrousel-items-wrapper__var-bid"
    );

    expect(bidVariation).toBeInTheDocument();
  });

  it("Should have a component with className 'header-carrousel-items-wrapper__exchange'", () => {
    const exchange = headerCarrouselItems.querySelector(
      ".header-carrousel-items-wrapper__exchange"
    );

    expect(exchange).toBeInTheDocument();
  });
});
