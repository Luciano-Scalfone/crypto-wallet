import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Home Component", () => {
  it("Should exists", () => {
    const dashboardComponent = render(<Dashboard />);

    expect(dashboardComponent).toBeDefined();
  });
});
