import { render } from "@testing-library/react";
import ModalsProvider from "../../contexts/ModalsContext";
import TrayMenu from "./TrayMenu";

describe("TrayMenu component", () => {
  let trayMenuComponent: HTMLElement;

  beforeEach(() => {
    trayMenuComponent = render(
      <ModalsProvider>
        <TrayMenu />
      </ModalsProvider>
    ).container;
  });

  it("Should exists", () => {
    expect(trayMenuComponent).toBeDefined();
  });

  it("Should have an element with className 'tray-menu-wrapper'", () => {
    const trayWrapper =
      trayMenuComponent.querySelector(".tray-menu-wrapper");

    expect(trayWrapper).toBeInTheDocument();
  });

  it("Should have an element with className 'tray-menu-wrapper__tray-menu'", () => {
    const trayMenuWrapper =
      trayMenuComponent.querySelector(".tray-menu-wrapper__tray-menu");

    expect(trayMenuWrapper).toBeInTheDocument();
  });

  it("Should have three span elements with className 'tray-menu-wrapper__links'", () => {
    const spansWrapper =
      trayMenuComponent.querySelectorAll("span.tray-menu-wrapper__links");

    expect(spansWrapper).toHaveLength(3);
  });

  it("Should have a signup button element with className 'button-wrapper__modifier__primary'", () => {
    const buttonWrapper =
      trayMenuComponent.querySelector(".button-wrapper__modifier__primary");

    expect(buttonWrapper).toBeInTheDocument();
    expect(buttonWrapper?.textContent).toBe('Sign up');
  });
});
