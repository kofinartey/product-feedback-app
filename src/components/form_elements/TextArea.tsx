import React from "react";
import { makeStyles } from "@mui/styles";

type TextAreaProps = {
  placeholder?: string;
  error?: boolean;
} & React.ComponentProps<"textarea">;

function TextArea({ placeholder, error, ...rest }: TextAreaProps) {
  const classes = makeStyles({
    TextArea: {
      width: "100%",
      backgroundColor: "#F7F8FD",
      height: "5rem",
      color: "#3A4374",
      border: "1px solid white",
      borderColor: error ? "red" : "",
      padding: "0.7rem 1rem",
      borderRadius: "0.5rem",
      fontFamily: "'Jost', sans-serif",
      fontSize: "0.9375rem",

      "&:focus": {
        backgroundColor: "",
        outline: "none",
        border: "1px solid #4661E6",
      },
    },
  })();
  return (
    <textarea
      cols={30}
      rows={10}
      className={classes.TextArea}
      placeholder={placeholder}
      {...rest}
    ></textarea>
  );
}

export default TextArea;
