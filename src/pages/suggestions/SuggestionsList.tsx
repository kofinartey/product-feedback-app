import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { motion } from "framer-motion";

//my imports
import { SuggestionInterface } from "../../types";
import Suggestion from "../../components/suggestion/Suggestion";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import SortTab from "../../components/sort_tab/SortTab";
import suggImg from "../../assets/suggestions/icon-suggestions.svg";
import empty from "../../assets/suggestions/illustration-empty.svg";
import Text from "../../components/text/Text";
import SuggestionPageStyles from "./SuggestionsPageStyles";

//framer motion variants
const listWrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const suggestionWrapperVariants = {
  hidden: { y: -20 },
  visible: { y: 0 },
};

type FilterType =
  | "all"
  | "ui"
  | "ux"
  | "enhancement"
  | "feature"
  | "bug"
  | string;

type SortModeType =
  | "Most Upvotes"
  | "Least Upvotes"
  | "Most Comments"
  | "Least Comments";

type SuggestionListProps = {
  filter: FilterType;
};

function SuggestionsList({ filter }: SuggestionListProps) {
  const classes = SuggestionPageStyles();
  const [sortMode, setSortMode] = useState<SortModeType>("Most Upvotes");
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const listOfSuggestions = useAppSelector((state) => state.suggestions);
  const suggestionsNumber = listOfSuggestions.length;
  const navigate = useNavigate();

  const selectSort = (item: SortModeType) => {
    setSortMode(item);
  };

  // all, ui, ux, feature, bug, enhancement
  const UIList = listOfSuggestions.filter(
    (suggestion) => suggestion.category === "ui"
  );
  const UXList = listOfSuggestions.filter(
    (suggestion) => suggestion.category === "ux"
  );
  const FeatureList = listOfSuggestions.filter(
    (suggestion) => suggestion.category === "feature"
  );
  const bugList = listOfSuggestions.filter(
    (suggestion) => suggestion.category === "bug"
  );
  const enhancementList = listOfSuggestions.filter(
    (suggestion) => suggestion.category === "enhancement"
  );

  const renderList = () => {
    //predetermine list based of filter
    let list: SuggestionInterface[];
    switch (filter) {
      case "ui":
        list = UIList;
        break;
      case "ux":
        list = UXList;
        break;
      case "feature":
        list = FeatureList;
        break;
      case "bug":
        list = bugList;
        break;
      case "enhancement":
        list = enhancementList;
        break;
      default:
        list = listOfSuggestions;
    }

    //sort out list based on sort mode
    if (list) {
      // @ts-ignore
      list.sort((a, b) => {
        switch (sortMode) {
          case "Most Upvotes":
            return b.upvotes - a.upvotes;
          case "Least Upvotes":
            return a.upvotes - b.upvotes;
          case "Most Comments":
            return b.comments.length - a.comments.length;
          case "Least Comments":
            return a.comments.length - b.comments.length;
        }
      });
    }

    return list.length > 0 ? (
      list.map((suggestion) => (
        <motion.div
          key={suggestion.id}
          className={classes.suggestion__wrapper}
          onClick={(event) => event.stopPropagation()}
          variants={suggestionWrapperVariants}
        >
          <Link to={`/${suggestion.id}`}>
            <Suggestion key={suggestion.id} data={suggestion} />
          </Link>
        </motion.div>
      ))
    ) : (
      <div className={classes.empty}>
        <Card>
          <div className={classes.empty__wrapper}>
            <img src={empty} alt="" />
            <Text as="h4">
              There is no {filter !== "all" ? filter.toUpperCase() : ""}{" "}
              feedback yet
            </Text>
            <Text as="p">
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </Text>
            <Button onClick={() => navigate("/new")}>+ Add Feedback</Button>
          </div>
        </Card>
      </div>
    );
  };

  //Main return function
  return (
    <div className={classes.SuggestionsList}>
      {/* bar on top */}
      <div className={classes.top_bar}>
        <div className={classes.suggestions_tab}>
          <img src={suggImg} alt="" />
          <p>{suggestionsNumber} Suggestions</p>
        </div>
        <SortTab selectSort={selectSort} />
        <Button onClick={() => navigate("/new")}>+ Add Feedback</Button>
      </div>

      <motion.div
        className={classes.list__wrapper}
        variants={listWrapperVariants}
        initial="hidden"
        animate="visible"
      >
        {renderList()}
      </motion.div>
    </div>
  );
}

export default SuggestionsList;
