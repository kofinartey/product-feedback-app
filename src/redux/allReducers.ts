import { combineReducers } from "redux";
import suggestionsReducer from "./suggestions/suggestionsReducer";

const allReducers = combineReducers({
  suggestions: suggestionsReducer,
});

export default allReducers;
