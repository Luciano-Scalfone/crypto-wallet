import { render } from "@testing-library/react";
import React from "react";
import ModalsProvider from "../../contexts/ModalsContext";
import Header from "./Header";

describe("Header Component", () => {
  let headerComponent: HTMLElement;

  beforeEach(() => {
    headerComponent = render(
      <ModalsProvider>
        <Header />
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(headerComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'header-wrapper'", () => {
    const headerWrapper = headerComponent.querySelector(".header-wrapper");

    expect(headerWrapper).toBeInTheDocument();
  });

  it("Should have an icon component with className 'header-coin-carrousel-wrapper'", () => {
    const headerWrapper = headerComponent.querySelector(
      ".header-coin-carrousel-wrapper"
    );

    expect(headerWrapper).toBeInTheDocument();
  });

  it("Should have two icon components of type 'svg'", () => {
    const headerWrapper = headerComponent.querySelectorAll("svg");

    expect(headerWrapper).toHaveLength(2);
  });

  it("Should have an icon component with id 'coin-synch-logo'", () => {
    const coinSynch = headerComponent.querySelector("#coin-synch-logo");

    expect(coinSynch).toBeInTheDocument();
  });

  it("Should have an icon component with id 'hamburger-menu'", () => {
    const hamburgerMenu = headerComponent.querySelector("#hamburger-menu");

    expect(hamburgerMenu).toBeInTheDocument();
  });
});
