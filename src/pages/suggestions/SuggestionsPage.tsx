import { useState, useEffect } from "react";
//my imports
import SuggestionPageStyles from "./SuggestionsPageStyles";
import SidePanel from "../../components/sidepanel/SidePanel";
import SuggestionsList from "./SuggestionsList";
import MobileMenu from "../../components/mobile_menu/MobileMenu";

type FilterType =
  | "all"
  | "ui"
  | "ux"
  | "enhancement"
  | "feature"
  | "bug"
  | string;

function SuggestionsPage() {
  const classes = SuggestionPageStyles();
  const [filter, setFilter] = useState<FilterType>("all");

  const changeFilter = (newFilter: FilterType) => {
    console.log("change filter called");
    setFilter(newFilter);
    console.log(newFilter);
  };
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, [windowWidth]);

  return (
    <div className={classes.Suggestions}>
      <div className={classes.wrapper}>
        <aside>
          <MobileMenu filter={filter} changeFilter={changeFilter} />
          <SidePanel filter={filter} changeFilter={changeFilter} />
        </aside>
        <SuggestionsList filter={filter} />
      </div>
    </div>
  );
}

export default SuggestionsPage;
