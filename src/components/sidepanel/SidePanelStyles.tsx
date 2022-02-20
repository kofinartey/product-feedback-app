import { makeStyles } from "@mui/styles";

export default makeStyles({
  SidePanel: {
    display: "none",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },
  wrapper: {},
  gradient: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white",
    background: "linear-gradient(to right,#28A7ED, #A337F6, #E84D70 )",
    borderRadius: "0.5rem",
  },
  roadmap__top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },

  //MEDIA QUERIES
  //MEDIA QUERIES
  "@media(min-width: 48rem) ": {
    SidePanel: {
      display: "grid",
    },
  },

  "@media(min-width: 64rem) ": {
    SidePanel: {
      display: "flex",
      flexDirection: "column",
    },
  },
});
