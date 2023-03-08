import { render } from "@testing-library/react";
import React from "react";
import Main from "./Main";

describe("Main Component", () => {
  let mainComponent: HTMLElement;

  beforeEach(() => {
    mainComponent = render(<Main />).container;
  });

  it("Should exists", () => {
    expect(mainComponent).toBeDefined();
  });

  it("Should hace a component with className 'main-wrapper'", () => {
    const mainWrapper = mainComponent.querySelector('.main-wrapper');

    expect(mainWrapper).toBeInTheDocument();
  });
});
