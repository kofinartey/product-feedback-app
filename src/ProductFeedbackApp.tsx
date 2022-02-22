import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//my imports
import SuggestionsPage from "./pages/suggestions/SuggestionsPage";
import FeedbackDetail from "./pages/feeback_detail/FeedbackDetail";
import NewFeedback from "./pages/new_feedback/NewFeedback";
function ProductFeedbackApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuggestionsPage />} />
        <Route path=":feedbackId" element={<FeedbackDetail />} />
        <Route path="new" element={<NewFeedback />} />
      </Routes>
    </Router>
  );
}

export default ProductFeedbackApp;
