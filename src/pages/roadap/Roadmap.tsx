import { memo } from "react";
import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";

//my imports
import RoadmapStyles from "./RoadmapStyles";
import GoBack from "../../components/go_back/GoBack";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import Suggestion from "../../components/suggestion/Suggestion";
import colors from "../../utils/colors";

function Roadmap() {
  const classes = RoadmapStyles();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const suggestions = useAppSelector((state) => state.suggestions);
  const [selected, setSelected] = useState("planned");

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

  const plannedRender = plannedSuggestions.map((item) => (
    <Suggestion data={item} />
  ));
  const inProgressRender = inProgressSuggestions.map((item) => (
    <Suggestion data={item} key={item.id} />
  ));

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
              className={classes.statusContainer}
              key={index}
              onClick={() => setSelected(status.status)}
            >
              <Text as="h5">{status.status}</Text>
            </div>
          ))}
          <div className={classes.tabIndicator} style={indicatorStyles}></div>
        </div>

        <div className={classes.wrapper}>{inProgressRender}</div>
      </div>
    </main>
  );
}

export default Roadmap;
