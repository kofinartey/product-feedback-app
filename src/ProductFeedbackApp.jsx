import React from "react";
import Button from "./components/button/Button";
import {
  DropDownItem,
  DropDownMenu,
} from "./components/form_elements/DropDownMenu";
import TextInput from "./components/form_elements/TextInput";
import GoBack from "./components/go_back/GoBack";
import Tag from "./components/tag/Tag";
import UpvoteButton from "./components/upvote_button/UpvoteButton";

function ProductFeedbackApp() {
  return (
    <div>
      <h1>Product Feedback App</h1>
      <Button color="primary">Button 1</Button>
      <Button color="secondary">Button 2</Button>
      <Button color="tertiary">Button 2</Button>
      <Button color="danger">Button 2</Button>
      <Button>Default</Button>
      <br />
      <br />
      <GoBack />
      <br />
      <UpvoteButton upvotes={79} />
      <UpvoteButton upvotes={122} />
      <Tag>All</Tag>
      <Tag active={true}>Enhancement</Tag>
      <br />
      <TextInput />
      <TextInput error={true} />
      <br />
      <br />
      <DropDownMenu initial="Feature">
        <DropDownItem value="Feature">Feature</DropDownItem>
        <DropDownItem>UI</DropDownItem>
        <DropDownItem>UX</DropDownItem>
        <DropDownItem>Enhancement</DropDownItem>
        {/* <DropDownItem>Bug</DropDownItem> */}
      </DropDownMenu>
    </div>
  );
}

export default ProductFeedbackApp;
