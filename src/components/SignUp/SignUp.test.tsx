import { render } from "@testing-library/react";
import ModalsProvider from "../../contexts/ModalsContext";
import SignUp from "./SignUp";

describe("SignIn Component", () => {
  let signUpComponent: HTMLElement;

  beforeEach(() => {
    signUpComponent = render(
      <ModalsProvider>
        <SignUp />
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(signUpComponent).toBeDefined();
  });

  it("Should have a component with className 'sign-up-header-wrapper'", () => {
    const signInWrapper = signUpComponent.querySelector(
      ".sign-up-header-wrapper"
    );

    expect(signInWrapper).toBeInTheDocument();
  });

  it("Should have four input elements component", () => {
    const inputWrapper = signUpComponent.querySelectorAll("input");

    expect(inputWrapper).toHaveLength(5);
  });

  it("Should have a primary button component", () => {
    const buttonWrapper = signUpComponent.querySelector(
      ".button-wrapper__modifier__primary"
    );

    expect(buttonWrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'sign-up-bottom-wrapper'", () => {
    const signInWrapper = signUpComponent.querySelector(
      ".sign-up-bottom-wrapper"
    );

    expect(signInWrapper).toBeInTheDocument();
  });
});
