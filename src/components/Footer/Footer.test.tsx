import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  let footerComponent: HTMLElement;

  beforeEach(() => {
    footerComponent = render(<Footer />).container;
  });

  it("Should exists", () => {
    const footerComponent = render(<Footer />);
    
    expect(footerComponent).toBeDefined();
  });

  it("Should have a HeaderWrapper component with className 'footer-wrapper'", () => {
    const footerWrapper = footerComponent.querySelector('.footer-wrapper');

    expect(footerWrapper).toBeInTheDocument();
  });
  
  it("Should have an icon component with id 'coin-synch-logo'", () => {
    const footerWrapper = footerComponent.querySelector('#coin-synch-logo');
  
    expect(footerWrapper).toBeInTheDocument();
  });
});
