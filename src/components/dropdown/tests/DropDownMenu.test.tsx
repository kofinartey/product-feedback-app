import { render, screen } from "@testing-library/react";
import App from "../../../App";
import userEvent from "@testing-library/user-event";

describe("Dropdown Menu", () => {
  test("initial conditions", () => {
    render(<App />);
    const dropDown = screen.getByRole("menu");
    const dropDownItem = screen.getAllByRole("menuitem");
    expect(dropDown).toBeInTheDocument();
    expect(dropDown).toHaveStyle({ opacity: "0" });
  });

  test("should toggle when select or dropdown item is clicked", () => {
    render(<App />);
    const dropDown = screen.getByRole("menu");
    const toggler = screen.getByRole("menubar");
    const dropDownItems = screen.getAllByRole("menuitem");
    //menu shows when clicked
    userEvent.click(toggler);
    expect(toggler).toHaveStyle({ border: "2px solid #4661E6" });
    expect(dropDown).toHaveStyle({ opacity: "1" });

    //menu hides when an option is selected
    userEvent.click(dropDownItems[0]);
    expect(dropDown).toHaveStyle({ opacity: 0 });
  });

  test("selected option changes when dropDownItem is clicked", () => {
    render(<App />);
    const select = screen.getByRole("menubar");
    const dropDownItems = screen.getAllByRole("menuitem");
    const selectedOption = screen.getByTestId("selected");

    userEvent.click(select);
    userEvent.click(dropDownItems[1]);

    expect(selectedOption).toHaveTextContent("UI");
  });
});
