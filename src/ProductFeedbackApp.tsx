import React from "react";
import Button from "./components/button/Button";
import { DropDownItem, DropDownMenu } from "./components/dropdown/DropDownMenu";
import TextInput from "./components/form_elements/TextInput";
import GoBack from "./components/go_back/GoBack";
import Tag from "./components/tag/Tag";
import UpvoteButton from "./components/upvote_button/UpvoteButton";
import Suggestions from "./pages/suggestions/Suggestions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileMenu from "./components/mobile_menu/MobileMenu";

function ProductFeedbackApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suggestions />} />
      </Routes>
    </Router>
  );
}

export default ProductFeedbackApp;
