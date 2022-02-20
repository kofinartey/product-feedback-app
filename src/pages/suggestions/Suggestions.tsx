import React, { useState, useEffect } from "react";
//my imports
import SuggestionStyles from "./SuggestionStyles";
import SidePanel from "../../components/sidepanel/SidePanel";
import SuggestionsList from "./SuggestionsList";
import MobileMenu from "../../components/mobile_menu/MobileMenu";

function Suggestions() {
  const classes = SuggestionStyles();
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, [windowWidth]);

  return (
    <div className={classes.Suggestions}>
      <div className={classes.wrapper}>
        <MobileMenu />
        <SidePanel />
        <SuggestionsList />
      </div>
    </div>
  );
}

export default Suggestions;
