import React from "react";
import { makeStyles } from "@mui/styles";

type ButtonProps = {
  color: "primary" | "secondary" | "tertiary" | "danger",
};

function Button({ children, color }: ButtonProps) {
  const styles = makeStyles({
    Button: {
      border: "none",
      color: color ? "white" : "#647196",
      backgroundColor:
        color === "primary"
          ? "#AD1FEA"
          : color === "secondary"
          ? "#4661E6"
          : color === "tertiary"
          ? "#373F68"
          : color === "danger"
          ? "#D73737"
          : "#F2F4FF",
      padding: "0.7rem 2rem",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontSize: "0.875rem",
      cursor: "pointer",
      transition: "all ease-in-out 0.1s",
      "&:hover": {
        opacity: 0.7,
      },
      "&:active": {
        opacity: 0.8,
      },
    },
  });
  const classes = styles();
  return <button className={classes.Button}>{children}</button>;
}

export default Button;
