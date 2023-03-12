import { render } from "@testing-library/react";
import ModalsProvider from "../../contexts/ModalsContext";
import Home from "./Home";

describe("Home Component", () => {
  let homeComponent: HTMLElement;

  beforeEach(() => {
    homeComponent = render(<ModalsProvider><Home /></ModalsProvider>).container;
  });

  it("Should exists", () => {
    expect(homeComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'header-wrapper'", () => {
    const headerWrapper = homeComponent.querySelector('.header-wrapper');

    expect(headerWrapper).toBeInTheDocument();
  });

  it("Should hace a component with className 'main-wrapper'", () => {
    const mainWrapper = homeComponent.querySelector('.main-wrapper');

    expect(mainWrapper).toBeInTheDocument();
  });
});
