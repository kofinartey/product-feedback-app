import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Sidepanel from "./MobileMenu";

describe("sidepanel", () => {
  it("initial conditions", () => {
    render(<Sidepanel />, { wrapper: Router });
    const menu = screen.getByRole("menu");

    expect(menu).toHaveStyle({ right: "-17rem" });
  });

  it("should toggle menu when toggler is clicked", () => {
    render(<Sidepanel />, { wrapper: Router });
    const toggler = screen.getByTestId("toggler");

    const menu = screen.getByRole("menu");
    //click the toggler
    userEvent.click(toggler);
    expect(menu).toHaveStyle({ right: "0" });
    //click toggler again
    userEvent.click(toggler);
    expect(menu).toHaveStyle({ right: "-17rem" });
  });
});
