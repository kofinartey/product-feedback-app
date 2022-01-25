import React from "react";
import { makeStyles } from "@mui/styles";
import upArrow from "../../assets/shared/icon-arrow-up.svg";

type UpvoteButtonTypes = {
  upvotes: number;
  //   onClick:
};

function UpvoteButton({ upvotes }: UpvoteButtonTypes) {
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
        width: "2.5rem",
        flexDirection: "column",
        padding: "0.5rem",
        "& img": {
          marginRight: 0,
          marginBottom: "0.4rem",
        },
      },
    },
  });
  const classes = styles();
  return (
    <button className={classes.btn}>
      <img src={upArrow} alt="" />
      <p>{upvotes}</p>
    </button>
  );
}

export default UpvoteButton;
