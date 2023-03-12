import { render } from "@testing-library/react";
import React from "react";
import ModalsProvider from "../../contexts/ModalsContext";
import Main from "./Main";

describe("Main Component", () => {
  let mainComponent: HTMLElement;

  beforeEach(() => {
    mainComponent = render(
      <ModalsProvider>
        <Main />
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(mainComponent).toBeDefined();
  });

  it("Should have a component with className 'main-wrapper'", () => {
    const mainWrapper = mainComponent.querySelector(".main-wrapper");

    expect(mainWrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'main-top-wrapper'", () => {
    const mainTopWrapper = mainComponent.querySelector(".main-top-wrapper");

    expect(mainTopWrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'main-middle-wrapper'", () => {
    const mainMiddleWrapper = mainComponent.querySelector(
      ".main-middle-wrapper"
    );

    expect(mainMiddleWrapper).toBeInTheDocument();
  });
});
