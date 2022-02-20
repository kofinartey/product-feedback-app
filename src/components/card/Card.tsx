import React from "react";
import { makeStyles } from "@mui/styles";

type CardProps = {
  children: React.ReactNode;
  style?: object;
};

function Card({ children, style }: CardProps) {
  const CardStyles = makeStyles({
    Card: {
      width: "100%",
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "0.5rem",
      ...style,
    },
  });
  const classes = CardStyles();
  return <div className={classes.Card}>{children}</div>;
}

export default Card;
