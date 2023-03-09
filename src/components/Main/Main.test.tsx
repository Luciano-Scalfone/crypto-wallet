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

  it("Should have a component with className 'main-wrapper'", () => {
    const mainWrapper = mainComponent.querySelector('.main-wrapper');

    expect(mainWrapper).toBeInTheDocument();
  });

  it("Should have a h5 component", () => {
    const mainTitleComponent = mainComponent.querySelector('h5');

    expect(mainTitleComponent).toBeInTheDocument();
  });

  it("Should have a paragraph component", () => {
    const mainParagraph = mainComponent.querySelector('p');

    expect(mainParagraph).toBeInTheDocument();
  });
});
