import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

export default makeStyles({
  Roadmap: {
    display: "flex",
    justifyContent: "center",
  },
  pageWrapper: {
    width: "100%",
  },
  pagebar: {
    height: "6.25rem",
    backgroundColor: colors.darkGrey,
    padding: "1rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    width: "90%",
  },
  statusSelectors: {
    display: "flex",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    position: "relative",
    "& p": {},
  },
  statusContainer: {
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
    // left: "9rem",
    transition: "all 0.3s ease-in-out",
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
  },

  "@media(min-width: 64rem)": {
    Roadmap: {},
    pageWrapper: {
      width: "80%",
    },
  },
});
