import React from "react";
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
//my imports
import { SuggestionType } from "../../redux/suggestions/suggestionsReducer";
import Suggestion from "../../components/suggestion/Suggestion";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import SortTab from "../../components/sort_tab/SortTab";
import SuggestionPageStyles from "./SuggestionsPageStyles";
import suggImg from "../../assets/suggestions/icon-suggestions.svg";
import empty from "../../assets/suggestions/illustration-empty.svg";
import Text from "../../components/text/Text";

function SuggestionsList() {
  const classes = SuggestionPageStyles();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const listOfSuggestions: SuggestionType[] = useAppSelector(
    (state) => state.suggestions
  );
  const suggestionsNumber = listOfSuggestions.length;

  const renderSuggestions =
    suggestionsNumber === 0 ? (
      <div className={classes.empty}>
        <Card>
          <div className={classes.empty__wrapper}>
            <img src={empty} alt="" />
            <Text as="h4">There is no feedback yet</Text>
            <Text as="p">
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </Text>
            <Button>+ Add Feedback</Button>
          </div>
        </Card>
      </div>
    ) : (
      listOfSuggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} data={suggestion} />
      ))
    );

  return (
    <div className={classes.SuggestionsList}>
      {/* bar on top */}
      <div className={classes.top_bar}>
        <div className={classes.suggestions_tab}>
          <img src={suggImg} alt="" />
          <p>{suggestionsNumber} Suggestions</p>
        </div>
        <SortTab />
        <Button>+ Add FeedBack</Button>
      </div>

      {/* list of suggestions  */}

      {renderSuggestions}
    </div>
  );
}

export default SuggestionsList;
