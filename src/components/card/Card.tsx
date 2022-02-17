import React from "react";
import { makeStyles } from "@mui/styles";

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  const styles = makeStyles({
    Card: {
      width: "100%",
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
  });
  const classes = styles();
  return <div className={classes.Card}>{children}</div>;
}

export default Card;
