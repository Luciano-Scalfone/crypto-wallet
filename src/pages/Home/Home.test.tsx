import { render } from "@testing-library/react";
import React from "react";
import Home from "./Home";

describe("Home Component", () => {
  it("Should exists", () => {
    const homeComponent = render(<Home />);

    expect(homeComponent).toBeDefined();
  });
});
