import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

export default makeStyles({
  FeedbackDetail: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",
    "& nav": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  wrapper: {
    width: "90%",
  },

  comments__section: {
    padding: "1rem 0",
  },
  new__comment: {
    margin: "1rem 0",
    "& h4": {
      marginBottom: "2rem",
    },
  },
  input__wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRs: "1fr 1fr",
    // flexDirection: "column",

    "& $textInput": {
      marginBottom: "1rem",
      gridColumn: "1/3",
      "& p": {
        fontSize: "0.8rem",
        color: colors.danger,
      },
    },
    "& button": {
      justifySelf: "flex-end",
    },
    "& p": {
      alignSelf: "center",
    },
  },
  textInput: {},

  //MEDIA QUERIES
  "@media(min-width: 48rem)": {},
  "@media(min-width: 64rem)": {
    wrapper: {
      width: "70%",
    },
  },
  "@media(min-width: 90rem)": {
    wrapper: {
      width: "50%",
    },
  },
});
