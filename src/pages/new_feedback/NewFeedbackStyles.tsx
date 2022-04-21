import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

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
  
});
