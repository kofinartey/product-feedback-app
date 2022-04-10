import { combineReducers } from "redux";
import suggestionsReducer from "./suggestions/suggestionsReducer";
import { userReducer } from "./user/userReducer";

const allReducers = combineReducers({
  user: userReducer,
  suggestions: suggestionsReducer,
});

export default allReducers;
