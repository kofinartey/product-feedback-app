import { makeStyles } from "@mui/styles";

export default makeStyles({
  RoadmapSuggestion: {
    margin: "2rem 0",
    width: "100%",
    // width: "25rem",
  },
  wrapper: {},
  title: {},
  description: {},
  tag: {},
  upvote: {},
  comments: {
    display: "flex",
    alignItems: "center",
    "& h4": {
      marginLeft: "0.5rem",
    },
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});
