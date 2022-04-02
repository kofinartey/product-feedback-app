import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";

//my imports
import { SuggestionInterface } from "../../types";
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
  const listOfSuggestions = useAppSelector((state) => state.suggestions);
  const suggestionsNumber = listOfSuggestions.length;
  const navigate = useNavigate();

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
            <Button onClick={() => navigate("/new")}>+ Add Feedback</Button>
          </div>
        </Card>
      </div>
    ) : (
      listOfSuggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className={classes.list__wrapper}
          onClick={(event) => event.stopPropagation()}
        >
          <Link to={`/feedback/${suggestion.id}`}>
            <Suggestion key={suggestion.id} data={suggestion} />
          </Link>
        </div>
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
        <Button onClick={() => navigate("/new")}>+ Add Feedback</Button>
      </div>

      {/* list of suggestions  */}

      {renderSuggestions}
    </div>
  );
}

export default SuggestionsList;
