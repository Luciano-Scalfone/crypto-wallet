import { render } from "@testing-library/react";
import ModalsProvider from "../../contexts/ModalsContext";
import MainTop from "./MainTop";

describe("MainTop component", () => {
  let mainComponent: HTMLElement;

  beforeEach(() => {
    mainComponent = render(
      <ModalsProvider>
        <MainTop />
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(mainComponent).toBeDefined();
  });

  it("Should have a component with className 'main-top-wrapper'", () => {
    const mainWrapper = mainComponent.querySelector(".main-top-wrapper");

    expect(mainWrapper).toBeInTheDocument();
  });

  it("Should have a h5 component", () => {
    const mainTitleComponent = mainComponent.querySelector("h5");

    expect(mainTitleComponent).toBeInTheDocument();
  });

  it("Should have a paragraph component", () => {
    const mainParagraph = mainComponent.querySelector("p");

    expect(mainParagraph).toBeInTheDocument();
  });

  it("Should have an element with className 'button-wrapper__modifier__primary'", () => {
    const buttonPrimary = mainComponent.querySelector(
      ".button-wrapper__modifier__primary"
    );

    expect(buttonPrimary).toBeInTheDocument();
  });

  it("Should have three elements with className 'button-wrapper__modifier__secondary'", () => {
    const buttonSecondary = mainComponent.querySelectorAll(
      ".button-wrapper__modifier__secondary"
    );

    expect(buttonSecondary).toHaveLength(3);
  });
});
