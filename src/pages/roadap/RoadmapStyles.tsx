import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

export default makeStyles({
  Roadmap: {
    display: "flex",
    justifyContent: "center",
  },
  pageWrapper: {
    // height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pagebar: {
    height: "6.25rem",
    width: "100%",
    backgroundColor: colors.darkGrey,
    padding: "1rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusSelectors: {
    width: "100%",
    display: "flex",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    position: "relative",
    "& p": {},
  },
  statusTab: {
    width: "100%",
    height: "4rem",
    display: "flex",
    textAlign: "center",
    color: colors.lightGrey,
    cursor: "pointer",
    transition: "all 0.2s ",
    borderBottom: `1px solid rgba(0,0,0,0.1)`,
    // backgroundColor: "rgba(0,0,0,0.1)",
    "& h5": {
      margin: "auto",
    },
  },
  tabIndicator: {
    height: "0.3rem",
    width: "calc(100% /3)",
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,

    transition: "all 0.3s ease-in-out",
  },
  window: {
    width: "90%",
    minHeight: "100%",
    overflowX: "hidden",
  },

  wrapper: {
    // height: "100%",
    width: "300%",
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
    transition: "left ease-in-out 0.3s",
  },
  view: {
    width: "100%",
    padding: "1rem",
  },

  "@media(min-width: 48rem)": {
    Roadmap: {},
    pageWrapper: {
      width: "95%",
      marginTop: "4rem",
    },
    pagebar: {
      borderRadius: "0.8rem",
    },
    statusSelectors: {
      display: "none",
    },
    window: {
      width: "100%",
      marginTop: "2rem",
    },
    wrapper: {
      width: "100%",
    },
  },

  "@media(min-width: 64rem)": {
    Roadmap: {},
    pageWrapper: {
      width: "80%",
    },
  },
});
