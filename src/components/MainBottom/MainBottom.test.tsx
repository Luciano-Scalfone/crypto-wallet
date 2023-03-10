import { render } from "@testing-library/react";
import MainBottom from "./MainBottom";

describe('MainBottom component', () => {
    let mainComponent: HTMLElement;

    beforeEach(() => {
      mainComponent = render(<MainBottom />).container;
    });
  
    it("Should exists", () => {
      expect(mainComponent).toBeDefined();
    });
  
    it("Should have a component with className 'main-bottom-wrapper'", () => {
      const mainWrapper = mainComponent.querySelector('.main-bottom-wrapper');
  
      expect(mainWrapper).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-bottom-wrapper__span'", () => {
      const spanElement = mainComponent.querySelector('.main-bottom-wrapper__span');
  
      expect(spanElement).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-bottom-wrapper__title'", () => {
      const titleElement = mainComponent.querySelector('.main-bottom-wrapper__title');
  
      expect(titleElement).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-bottom-wrapper__paragraph'", () => {
      const paragraphElement = mainComponent.querySelector('.main-bottom-wrapper__paragraph');
  
      expect(paragraphElement).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-bottom-wrapper__input-label'", () => {
      const labelElement = mainComponent.querySelector('.main-bottom-wrapper__input-label');
  
      expect(labelElement).toBeInTheDocument();
    });
  
    it("Should have a component with className 'main-bottom-wrapper__input'", () => {
      const inputElement = mainComponent.querySelector('.main-bottom-wrapper__input');
  
      expect(inputElement).toBeInTheDocument();
    });

    it("Should have an element with className 'button-wrapper__modifier__primary'", () => {
      const buttonPrimary = mainComponent.querySelector(
        ".button-wrapper__modifier__primary"
      );
  
      expect(buttonPrimary).toBeInTheDocument();
    });
});
