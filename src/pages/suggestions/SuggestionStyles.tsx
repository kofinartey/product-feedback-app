import { makeStyles } from "@mui/styles";

export default makeStyles({
  Suggestions: {
    // width: "100%",
    backgroundColor: "#F7F8FD",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    width: "100%",
    // padding: "2rem 0",
  },
  top_bar: {
    backgroundColor: "#373F68",
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  //MEDIA QUERIES
  "@media(min-width: 48rem)": {
    wrapper: {
      width: "90%",
      padding: "2rem 0",
    },
  },
});
