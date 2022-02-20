import suggestions from "../../data.json";

type Action = {
  type: string;
  payload?: string | number;
};

export type SuggestionType = typeof suggestions.productRequests[0];

const suggestionsReducer = (
  state = suggestions.productRequests,
  action: Action
) => {
  return state;
};

export default suggestionsReducer;
