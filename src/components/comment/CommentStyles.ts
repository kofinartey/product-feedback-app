import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

export default makeStyles({
  wrapper: {
    // borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  Comment: {
    margin: "1rem 0 0 0",

    display: "grid",
    gridTemplateColumns: "2.5rem 2fr 1fr",
    //   gridTemplateRows: "1fr 2fr 1fr"
  },

  //TODO: replace after sorting out image
  user_image: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.3)",
    gridColumn: "1/2",
  },
  reply: {
    gridColumn: "3/4",
    justifySelf: "flex-end",
    alignSelf: "center",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  name: {
    gridColumn: "2/3",
    gridRow: "1/2",
    marginLeft: "1rem",
  },

  comment__content: {
    gridColumn: "1/4",
    padding: "1rem 0",
    "& span": {
      fontWeight: "bold",
      color: "#AD1FEA",
    },
  },

  replies: {
    paddingLeft: "2rem",
    borderLeft: "1px solid rgba(0,0,0,0.1)",
  },

  reply__form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
    "& $replyInput":{
      position: "relative",
      width: "100%"
    },
    "& textarea": {
      width: "100%",
      height: "5rem",
    },
    "& button": {
      width: "100%",
      marginTop: "1rem",
    },
  },
replyInput:{},
  error:{
    fontSize: "0.8rem",
    color: colors.danger
  }
,
  //MEDIA QUERIES
  "@media(min-width:48rem)": {
    Comment: {
      margin: "2rem 0",

      gridTemplateColumns: "4rem 4fr",
    },
    name: {
      margin: 0,
    },
    comment__content: {
      gridColumn: "2/6",
    },
    replies: {
      marginLeft: "2rem",
    },
    reply__form: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginLeft: "4rem",
      "& $replyInput": {
        width: "80%",
      },
      "& button": {
        margin: 0,
        width: "unset",
      },
    },
  },
});
