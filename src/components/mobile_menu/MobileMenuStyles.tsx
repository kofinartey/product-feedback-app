import { makeStyles } from "@mui/styles";

export default makeStyles({
  MobileMenu: {
    // width: "100%",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    pointerEvents: "none",
    zIndex: -1,
  },
  gradient: {
    height: "4.5rem",
    color: "white",
    background: "linear-gradient(to right,#28A7ED, #A337F6, #E84D70 )",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p:nth-of-type(1)": {
      fontWeight: "bold",
    },
    "& img": {
      cursor: "pointer",
    },
  },
  menu: {
    backgroundColor: "#F7F8FD",
    padding: "1.5rem",
    position: "absolute",
    width: "17rem",
    bottom: 0,
    top: "4.5rem",
    // right: 0,
    right: "-17rem",
    transition: "right 0.3s ease-in-out",
    overflow: "hidden",
  },
  tags: {
    width: "100%",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  roadmap: {
    marginTop: "2rem",
    "& $roadmap__top": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1.5rem ",
    },
  },
  roadmap__top: {},

  // // MEDIA QUERIES
  // // MEDIA QUERIES
  "@media(min-width: 48rem)": {
    MobileMenu: {
      display: "none",
    },
  },
});
