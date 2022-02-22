import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductFeedbackApp from "./ProductFeedbackApp";
import ProductFeedbackAppStyles from "./ProductFeedbackAppStyles";

function App() {
  const classes = ProductFeedbackAppStyles();
  return (
    <Provider store={store}>
      <div className={classes.ProductFeedbackApp}>
        <ProductFeedbackApp />
      </div>
    </Provider>
  );
}

export default App;
