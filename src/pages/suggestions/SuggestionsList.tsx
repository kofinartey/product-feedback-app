import React from "react";
import Button from "../../components/button/Button";
import SortTab from "../../components/sort_tab/SortTab";
import SuggestionStyles from "./SuggestionStyles";

function SuggestionsList() {
  const classes = SuggestionStyles();
  return (
    <div>
      <div className={classes.top_bar}>
        <SortTab />
        <Button color="primary">+ Add FeedBack</Button>
      </div>
    </div>
  );
}

export default SuggestionsList;
