import { memo, useEffect } from "react";
import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";

//my imports
import RoadmapStyles from "./RoadmapStyles";
import { capFirstLetter } from "../../helper-functions/capFirstLetter";
import GoBack from "../../components/go_back/GoBack";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import RoadmapSuggestion from "../../components/roadmap_suggestion/RoadmapSuggestion";
import colors from "../../utils/colors";

function Roadmap() {
  const classes = RoadmapStyles();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const suggestions = useAppSelector((state) => state.suggestions);
  const [selected, setSelected] = useState("planned");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const statusList = [
    { status: "planned", color: colors.orange },
    { status: "in-progress", color: colors.purple },
    { status: "live", color: colors.blue },
  ];

  const plannedSuggestions = suggestions.filter(
    (suggest) => suggest.status === "planned"
  );
  const inProgressSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === "in-progress"
  );
  const liveSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === "live"
  );

  const plannedRender = (
    <div>
      <Text as="h3">Planned ({plannedSuggestions.length}) </Text>
      <Text as="p">Ideas prioritized for research</Text>
      {plannedSuggestions.map((item) => (
        <RoadmapSuggestion data={item} key={item.id} />
      ))}
    </div>
  );

  const inProgressRender = (
    <div>
      <Text as="h3">In-Progress ({inProgressSuggestions.length})</Text>
      <Text as="p">Features currently being develepoed</Text>
      {inProgressSuggestions.map((item) => (
        <RoadmapSuggestion data={item} key={item.id} />
      ))}
    </div>
  );

  const liveRender = (
    <div>
      <Text as="h3">Live ({liveSuggestions.length})</Text>
      <Text as="p">Released features</Text>
      {liveSuggestions.map((item) => (
        <RoadmapSuggestion data={item} key={item.id} />
      ))}
    </div>
  );

  const indicatorStyles = {
    left:
      selected === "live"
        ? "66.66%"
        : selected === "in-progress"
        ? "33.33%"
        : 0,
    backgroundColor:
      selected === "live"
        ? colors.blue
        : selected === "in-progress"
        ? colors.purple
        : colors.orange,
  };

  //apply to wrapper
  const slidingStyles = {
    left:
      windowWidth > 768
        ? 0
        : selected === "live"
        ? "-200%"
        : selected === "in-progress"
        ? "-100%"
        : 0,
  };

  /*  page layout
  <main>
    <page-bar />
    <status selector />
    <wrapper>
        <div>
            individual feedbacks
        </div>
    </wrapper>
  </main> */

  // main component return method
  return (
    <main className={classes.Roadmap}>
      <div className={classes.pageWrapper}>
        <div className={classes.pagebar}>
          <div>
            <GoBack secondary />
            <h2>Roadmap</h2>
          </div>
          <Button> +Add Feedback</Button>
        </div>
        {/* status selector */}
        <div className={classes.statusSelectors}>
          {statusList.map((status, index) => (
            <div
              className={classes.statusTab}
              key={index}
              onClick={() => setSelected(status.status)}
            >
              <Text as="h5">{capFirstLetter(status.status)}</Text>
            </div>
          ))}
          <div className={classes.tabIndicator} style={indicatorStyles}></div>
        </div>

        <div className={classes.window}>
          <div className={classes.wrapper} style={slidingStyles}>
            <div className={classes.view}>{plannedRender}</div>
            <div className={classes.view}>{inProgressRender}</div>
            <div className={classes.view}>{liveRender}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Roadmap;
