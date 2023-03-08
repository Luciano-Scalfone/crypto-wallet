import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header Component", () => {
  let headerComponent: HTMLElement;

  beforeEach(() => {
    headerComponent = render(<Header />).container;
  });

  it("Should exists", () => {
    expect(headerComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'headerWrapper'", () => {
    const headerWrapper = headerComponent.querySelector('.header-wrapper');

    expect(headerWrapper).toBeInTheDocument();
  });
});
