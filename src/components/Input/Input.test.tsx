import { render } from "@testing-library/react";
import Input from "./Input";

const MOCK_PROPS = {
  type: 'mock-props',
  placeholder: "mock-props",
  callback: () => true,
  icons: { left: <></>, right: <></> },
};

describe("SignIn Component", () => {
  let inputComponent: HTMLElement;

  beforeEach(() => {
    inputComponent = render(<Input {...MOCK_PROPS} />).container;
  });

  it("Should exists", () => {
    expect(inputComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'input-wrapper'", () => {
    const inputWrapper = inputComponent.querySelector(".input-wrapper");

    expect(inputWrapper).toBeInTheDocument();
  });

  it("Should have a input component ", () => {
    const inputWrapper = inputComponent.querySelector("input");

    expect(inputWrapper).toBeInTheDocument();
  });
});
