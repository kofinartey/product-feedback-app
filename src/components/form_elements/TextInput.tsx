import React from "react";
import { makeStyles } from "@mui/styles";
type TextInputProps = {
  error?: string;
} & React.ComponentProps<"input">;

function TextInput({ error }: TextInputProps) {
  const styles = makeStyles({
    Input: {
      width: "100%",
      backgroundColor: "#F7F8FD",
      color: "#3A4374",
      border: "1px solid white",
      padding: "0.7rem 1rem",
      borderRadius: "0.5rem",
      fontSize: "0.9375rem",

      "&:focus": {
        backgroundColor: "",
        outline: "none",
        border: error ? "1px solid #D73737" : "1px solid #4661E6",
      },
    },
    error: {
      color: "#D73737",
      fontSize: "0.875rem",
    },
  });
  const classes = styles();
  return (
    <div>
      <input type="text" name="" id="" className={classes.Input} />
      {error && <p className={classes.error}>Can't be empty</p>}
    </div>
  );
}

export default TextInput;
