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
  
    it("Should have a component with className 'main-middle-wrapper__title'", () => {
      const titleElement = mainComponent.querySelector('.main-middle-wrapper__title');
  
      expect(titleElement).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-middle-wrapper__paragraph'", () => {
      const paragraphElement = mainComponent.querySelector('.main-middle-wrapper__paragraph');
  
      expect(paragraphElement).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-middle-wrapper__cards-wrapper'", () => {
      const cardsWrapperElement = mainComponent.querySelector('.main-middle-wrapper__cards-wrapper');
  
      expect(cardsWrapperElement).toBeInTheDocument();
    });
  
    it("Should have four components with className 'card-item-wrapper'", () => {
      const cardsElements = mainComponent.querySelectorAll('.card-item-wrapper');
  
      expect(cardsElements).toHaveLength(4);
    });
});
