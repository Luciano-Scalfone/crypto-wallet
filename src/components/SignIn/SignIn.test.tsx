import { render } from "@testing-library/react";
import ModalsProvider from "../../contexts/ModalsContext";
import SignIn from "./SignIn";

describe("SignIn Component", () => {
  let signInComponent: HTMLElement;

  beforeEach(() => {
    signInComponent = render(
      <ModalsProvider>
        <SignIn />
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(signInComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'sign-in-wrapper'", () => {
    const signInWrapper = signInComponent.querySelector(".sign-in-wrapper");

    expect(signInWrapper).toBeInTheDocument();
  });
});
