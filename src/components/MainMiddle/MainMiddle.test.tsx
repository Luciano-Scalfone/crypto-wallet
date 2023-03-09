import { render } from "@testing-library/react";
import MainMiddle from "./MainMiddle";

describe('MainMiddle component', () => {
    let mainComponent: HTMLElement;

    beforeEach(() => {
      mainComponent = render(<MainMiddle />).container;
    });
  
    it("Should exists", () => {
      expect(mainComponent).toBeDefined();
    });
  
    it("Should have a component with className 'main-middle-wrapper'", () => {
      const mainWrapper = mainComponent.querySelector('.main-middle-wrapper');
  
      expect(mainWrapper).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-middle-wrapper__span'", () => {
      const spanElement = mainComponent.querySelector('.main-middle-wrapper__span');
  
      expect(spanElement).toBeInTheDocument();
    });
});
