import React, { useState, useEffect } from "react";
//my imports
import SuggestionPageStyles from "./SuggestionsPageStyles";
import SidePanel from "../../components/sidepanel/SidePanel";
import SuggestionsList from "./SuggestionsList";
import MobileMenu from "../../components/mobile_menu/MobileMenu";

function SuggestionsPage() {
  const classes = SuggestionPageStyles();
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
          <MobileMenu />
          <SidePanel />
        </aside>
        <SuggestionsList />
      </div>
    </div>
  );
}

export default SuggestionsPage;
