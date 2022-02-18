import React from "react";
import { makeStyles } from "@mui/styles";

type CardProps = {
  children: React.ReactNode;
  styles?: object;
};

function Card({ children, styles }: CardProps) {
  const CardStyles = makeStyles({
    Card: {
      width: "100%",
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "0.5rem",
      ...styles,
    },
  });
  const classes = CardStyles();
  return <div className={classes.Card}>{children}</div>;
}

export default Card;
