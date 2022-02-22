import { screen, render } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import FeedbackDetail from "./FeedbackDetail";
import { Provider } from "react-redux";

test("comment form initial conditions", () => {
  render(<FeedbackDetail />);
  const textArea = screen.getByRole("textbox");
  const wordsLeft = screen.getByTestId("words-left");
  expect(wordsLeft).toHaveTextContent("250 characters left");
});

test("words left changes after entering a character", () => {
  render(<FeedbackDetail />);
  const textArea = screen.getByRole("textbox");
  const wordsLeft = screen.getByTestId("words-left");
  //enter a characte
  userEvent.clear(textArea);
  userEvent.type(textArea, "a");

  expect(wordsLeft).toHaveTextContent("249 characters left");

  //clear input
  userEvent.clear(textArea);
  expect(wordsLeft).toHaveTextContent("250 characters left");
});
