import { render, screen,fireEvent } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";

import UpvoteButton from "./UpvoteButton";



describe ("Upvote button", () =>{
    render(<UpvoteButton upvotes={1}/>)
    const button = screen.getByRole("button")
    const upvotesText = screen.getByTestId("upvotes")
    console.log(button)
    it("initial conditions", () =>{
        expect(upvotesText).toHaveTextContent(1)
    })
    it("should increment upvotes on click", () =>{
        userEvent.click(button)
        expect(upvotesText).toHaveTextContent(2)
    })
   
})
