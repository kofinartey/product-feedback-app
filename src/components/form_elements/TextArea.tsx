import React from "react";
import { makeStyles } from "@mui/styles";

type TextAreaProps = {
  placeholder?: string;
} & React.ComponentProps<"textarea">;

function TextArea({ placeholder, ...rest }: TextAreaProps) {
  const classes = makeStyles({
    TextArea: {
      backgroundColor: "#F7F8FD",
      height: "5rem",
      color: "#3A4374",
      border: "1px solid white",
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
