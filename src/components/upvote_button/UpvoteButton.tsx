import React from "react";
import { makeStyles } from "@mui/styles";
import upArrow from "../../assets/shared/icon-arrow-up.svg";

type UpvoteButtonTypes = {
  upvotes: number;
  inRoadmap?: boolean;
  //   onClick:
} & React.ComponentProps<"button">;

function UpvoteButton({ upvotes, inRoadmap, ...rest }: UpvoteButtonTypes) {
  const styles = makeStyles({
    btn: {
      backgroundColor: "#F2F4FE",
      border: "none",
      display: "flex",
      alignItems: "center",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      color: "#3A4374",
      fontSize: "0.8125rem",
      fontWeight: "800",
      transition: "all ease-in-out 0.1s",
      "& img": {
        marginRight: "0.5rem",
      },
      "&:hover": {
        backgroundColor: "#CFD7FF",
      },
      "&:active": {
        backgroundColor: "#4661E6",
        color: "white",
        "& img": {},
      },
    },

    "@media(min-width: 48rem)": {
      btn: {
        // width: "2.5rem",
        flexDirection: !inRoadmap ? "column" : "row",
        padding: "0.5rem",
        "& img": {
          marginRight: !inRoadmap ? 0 : "0.5rem",
          marginBottom: "0.4rem",
        },
      },
    },
  });
  const classes = styles();
  return (
    <button className={classes.btn} {...rest}>
      <img src={upArrow} alt="" />
      <p data-testid="upvotes">{upvotes}</p>
    </button>
  );
}

export default UpvoteButton;
