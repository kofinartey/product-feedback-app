import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
//my imports
import Card from "../card/Card";
import upArrow from "../../assets/shared/icon-arrow-up.svg";
import check from "../../assets/shared/icon-check.svg";

type SortTabProps = {};

function SortTab(props: SortTabProps) {
  const [open, setOpen] = useState(false);

  const styles = makeStyles({
    SortTab: {
      position: "relative",
    },
    tab: {
      color: "white",
      display: "flex",
      alignItems: "center",
    },
    filter__options: {
      backgroundColor: "white",
      borderRadius: "1rem",
      width: "14rem",
      position: "absolute",
      top: "2rem",
      "& p": {
        color: "#647196",
        borderBottom: "2px solid #F2F4FF",
        padding: "0.7rem 2rem",
        cursor: "pointer",
        "&:nth-of-type(4)": {
          borderBottom: "none",
        },
      },
    },
  });
  const classes = styles();
  return (
    <div className={classes.SortTab}>
      <div className={classes.tab}>
        <p>Sort by: </p>
        <p>{} </p>
        <img src={upArrow} alt="" />
      </div>
      <div className={classes.filter__options}>
        <p>Most Upvotes</p>
        <p>Least Upvotes</p>
        <p>Most Comments</p>
        <p>Least Comments</p>
      </div>
    </div>
  );
}

export default SortTab;
