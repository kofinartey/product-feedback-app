import suggestions from "../../data.json";
import { SuggestionInterface } from "../../types";

type Action = {
  type: string;
  payload?: string | number;
};

const suggestionsReducer = (
  // state = [],
  state: SuggestionInterface[]  = suggestions.productRequests,
  action: Action
) => {
  return state;
};

export default suggestionsReducer;
