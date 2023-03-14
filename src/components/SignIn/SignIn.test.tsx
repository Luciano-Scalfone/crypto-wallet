import { render } from "@testing-library/react";
import ModalsProvider from "../../contexts/ModalsContext";
import UserProvider from "../../contexts/UserContext";
import renderWithRouter from "../../helpers/renderWithRouter";
import SignIn from "./SignIn";

describe("SignIn Component", () => {
  let signInComponent: HTMLElement;

  beforeEach(() => {
    signInComponent = renderWithRouter(
      <ModalsProvider>
        <UserProvider>
          <SignIn />
        </UserProvider>
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(signInComponent).toBeDefined();
  });

  it("Should have a component with className 'sign-in-header-wrapper'", () => {
    const signInWrapper = signInComponent.querySelector(
      ".sign-in-header-wrapper"
    );

    expect(signInWrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'sign-in-forgot-password-wrapper'", () => {
    const signInWrapper = signInComponent.querySelector(
      ".sign-in-forgot-password-wrapper"
    );

    expect(signInWrapper).toBeInTheDocument();
    expect(signInWrapper?.textContent).toBe("Forgot password?");
  });

  it("Should have a primary button component", () => {
    const signInWrapper = signInComponent.querySelector(
      ".button-wrapper__modifier__primary"
    );

    expect(signInWrapper).toBeInTheDocument();
  });

  it("Should have a component with className 'sign-in-bottom-wrapper'", () => {
    const signInWrapper = signInComponent.querySelector(
      ".sign-in-bottom-wrapper"
    );

    expect(signInWrapper).toBeInTheDocument();
  });
});
