import React from "react";
import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

type ButtonProps = {
  color?: "primary" | "secondary" | "tertiary" | "danger";
  // children: "string";
} & React.ComponentProps<"button">;

function Button({ children, color, ...rest }: ButtonProps) {
  const styles = makeStyles({
    Button: {
      border: "none",
      color: rest.disabled ? "rgba(0,0,0,0.2)" : "white",
      backgroundColor: rest.disabled
        ? "rgba(0,0,0,0.1)"
        : color === "primary"
        ? "#373F68"
        : color === "secondary"
        ? "#4661E6"
        : color === "tertiary"
        ? "#AD1FEA"
        : color === "danger"
        ? "#D73737"
        : "#AD1FEA", //use tcolor if not specified
      padding: "0.7rem 1rem",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontSize: "0.8125rem",
      cursor: rest.disabled ? "default" : "pointer",
      transition: "all ease-in-out 0.1s",
      "&:hover": {
        opacity: 0.7,
      },
      "&:active": {
        opacity: 0.8,
      },
    },
    "media(min-width:48rem)": {
      Button: {
        fontSize: "0.875rem",
      },
    },
  });
  const classes = styles();
  return (
    <button className={classes.Button} {...rest}>
      {children}
    </button>
  );
}

export default Button;
