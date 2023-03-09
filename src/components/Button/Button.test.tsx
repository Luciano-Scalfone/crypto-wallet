import { render } from "@testing-library/react";
import Button from "./Button";

const BUTTON_MOCK = {
  type: "primary",
  content: "primary button",
  callback: () => true,
};

describe("Button component", () => {
  let buttonComponent: HTMLElement;

  beforeEach(() => {
    buttonComponent = render(
      <Button
        type="primary"
        content={BUTTON_MOCK.content}
        callback={BUTTON_MOCK.callback}
      />
    ).container;
  });

  it("Should exists", () => {
    expect(buttonComponent).toBeDefined();
  });

  it("Should have an element with className 'button-wrapper'", () => {
    const buttonWrapper = buttonComponent.querySelector(".button-wrapper");

    expect(buttonWrapper).toBeInTheDocument();
  });

  it("Should have an element with className 'button-wrapper__modifier__primary' when type 'primary' is passed", () => {
    const buttonPrimary = buttonComponent.querySelector(
      ".button-wrapper__modifier__primary"
    );

    expect(buttonPrimary).toBeInTheDocument();
  });
});
