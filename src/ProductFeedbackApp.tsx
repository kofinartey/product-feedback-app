import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//my imports
import SuggestionsPage from "./pages/suggestions/SuggestionsPage";
import FeedbackDetail from "./pages/feeback_detail/FeedbackDetail";
function ProductFeedbackApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuggestionsPage />} />

        <Route path="feedback/:feedbackId" element={<FeedbackDetail />} />
      </Routes>
    </Router>
  );
}

export default ProductFeedbackApp;
