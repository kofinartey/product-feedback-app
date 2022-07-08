import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import allReducers from "../redux/allReducers";

//custom render that includes provider
const renderWithState = (
  ui,
  {
    initialState,
    store = createStore(allReducers, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>;
      </Router>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

//export everything
export * from "@testing-library/react";

//override render method
export { renderWithState as render };
