import { makeStyles } from "@mui/styles";

export default makeStyles({
  Suggestions: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    width: "100%",
    // padding: "2rem 0",
  },
  SuggestionsList: {
    width: "100%",
  },
  list__wrapper: {},
  suggestion__wrapper: {
    padding: "0 2rem",
  },
  empty: {
    textAlign: "center",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
  },
  empty__wrapper: {
    padding: "6rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& img": {
      marginBottom: "3rem",
    },
    "& h4": {
      marginBottom: "2rem",
    },
    "& p": {
      marginBottom: "2rem",
      maxWidth: "18rem",
    },
  },

  top_bar: {
    backgroundColor: "#373F68",
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  suggestions_tab: {
    display: "none",
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "white",
    "& p": {
      marginLeft: "1rem",
    },
  },

  //MEDIA QUERIES
  "@media(min-width: 48rem)": {
    wrapper: {
      width: "90%",
      padding: "2rem 0",
    },
    top_bar: {
      marginTop: "2rem",
      padding: "0.8rem",
      borderRadius: "0.5rem",
    },
    suggestion__wrapper: {
      padding: "0",
    },
    empty__wrapper: {
      "& p": {
        maxWidth: "26rem",
        marginBottom: "4rem",
      },
    },
    suggestions_tab: {
      display: "flex",
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "80%",
      marginTop: "4rem",
      display: "flex",
      gap: "1rem",
      "& aside": {
        width: "25%",
      },
    },
    top_bar: {
      marginTop: 0,
    },
  },
});
