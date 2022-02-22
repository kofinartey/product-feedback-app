import { makeStyles } from "@mui/styles";

export default makeStyles({
  NewFeedback: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    width: "90%",
    maxWidth: "33.75rem",
    margin: "2rem 0",
    "& nav": {
      marginBottom: "4rem",
    },
    "& h1": {
      margin: "1rem 0",
    },
    "& form": {
      position: "relative",
    },
  },
  addIcon: {
    width: "2.5rem",
    position: "absolute",
    top: "-1rem",
  },

  form__control: {
    margin: "2rem 0",
    "& p": {
      margin: "0.5rem 0",
    },
    "& textarea": {
      height: "8rem",
    },
  },

  buttons__container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& button": {
      width: "100%",
      margin: "0.3rem 0",
    },
  },

  //MEDIA QUERIES
  //MEDIA QUERIES
  "@media(min-width: 48rem)": {
    buttons__container: {
      flexDirection: "row-reverse",
      justifyContent: "flex",
      "& button": {
        width: "unset",
        marginLeft: "1rem",
      },
    },
  },
});
