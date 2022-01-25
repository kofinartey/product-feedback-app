import React from "react";
import { makeStyles } from "@mui/styles";

interface TextInputProps {}

function TextInput(props) {
  const styles = makeStyles({
    Input: {
      backgroundColor: "#F7F8FD",
      color: "#3A4374",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
    },
  });

  const classes = styles();
  return <input type="text" name="" id="" className={classes.Input} />;
}

export default TextInput;
