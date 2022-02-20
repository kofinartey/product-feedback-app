import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductFeedbackApp from "./ProductFeedbackApp";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductFeedbackApp />
      </div>
    </Provider>
  );
}

export default App;
