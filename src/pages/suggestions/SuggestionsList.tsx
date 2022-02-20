import React from "react";
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
//my imports
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import SortTab from "../../components/sort_tab/SortTab";
import SuggestionStyles from "./SuggestionStyles";
import suggImg from "../../assets/suggestions/icon-suggestions.svg";
import Suggestion from "../../components/suggestion/Suggestion";

function SuggestionsList() {
  const classes = SuggestionStyles();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const listOfSuggestions = useAppSelector((state) => state.suggestions);

  return (
    <div className={classes.SuggestionsList}>
      {/* bar on top */}
      <div className={classes.top_bar}>
        <div className={classes.suggestions_tab}>
          <img src={suggImg} alt="" />
          <p>0 Suggestions</p>
        </div>
        <SortTab />
        <Button color="primary">+ Add FeedBack</Button>
      </div>
      {/* list of suggestions  */}
      <div>
        {listOfSuggestions.map((suggestion) => (
          <Suggestion key={suggestion.id} data={suggestion} />
        ))}
      </div>
    </div>
  );
}

export default SuggestionsList;
