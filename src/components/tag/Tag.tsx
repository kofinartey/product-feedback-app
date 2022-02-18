import React from "react";
import { makeStyles } from "@mui/styles";

type TagProps = {
  children: React.ReactNode;
  active?: boolean;
} & React.ComponentProps<"button">;

function Tag(props: TagProps) {
  const styles = makeStyles({
    tag: {
      backgroundColor: props.active ? "#4661E6" : "#F2F4FE",
      border: "none",
      display: "flex",
      alignItems: "center",
      padding: "0.5rem 1rem",
      margin: "0.5rem 0.5rem 0.5rem 0",
      borderRadius: "0.5rem",
      color: props.active ? "white" : "#4661E6",
      fontSize: "0.8125rem",
      fontWeight: "600",
      transition: "all ease-in-out 0.1s",
      "& img": {
        marginRight: "0.5rem",
      },
      "&:hover": {
        backgroundColor: !props.active && "#CFD7FF",
      },
      "&:active": {
        backgroundColor: "#4661E6",
        color: "white",
      },
    },
  });
  const classes = styles();
  return <button className={classes.tag}>{props.children}</button>;
}

export default Tag;
