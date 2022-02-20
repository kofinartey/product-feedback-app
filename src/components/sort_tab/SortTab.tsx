import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
//my imports
import Card from "../card/Card";
import downArrow from "../../assets/shared/icon-arrow-down.svg";
import check from "../../assets/shared/icon-check.svg";

type SortTabProps = {};

function SortTab(props: SortTabProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Most Upvotes");
  const styles = makeStyles({
    SortTab: {
      position: "relative",
      cursor: "pointer",
      width: "14rem",
    },
    tab: {
      color: "white",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        opacity: "0.7",
      },
      "& img": {
        transform: open && "rotate(180deg)",
        transition: "transform ease-in-out 0.3s",
        filter: "brightness(500%)",
        // position: "absolute",
        // right: "1rem",
      },
    },
    selected: {
      margin: " 0 0.5rem",
      fontWeight: "bold",
      //   color: "#F2F4FE",
    },
    filter__options: {
      backgroundColor: "white",
      borderRadius: "1rem",
      width: "14rem",
      position: "absolute",
      top: "4rem",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      overflow: "hidden",
      "& $option": {
        color: "#647196",
        borderBottom: "2px solid #F2F4FF",
        padding: "0.7rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        "&:nth-of-type(4)": {
          borderBottom: "none",
        },
        "&:hover": {
          color: "#C75AF6",
        },
      },
    },
    option: {},
  });
  const classes = styles();

  const options = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  return (
    <div className={classes.SortTab}>
      <div className={classes.tab} onClick={() => setOpen(!open)}>
        <p>Sort by : </p>
        <p className={classes.selected}> {selected} </p>
        <img src={downArrow} alt="" />
      </div>
      {open && (
        <div className={classes.filter__options}>
          {options.map((option) => (
            <div
              className={classes.option}
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(!open);
              }}
            >
              <p>{option}</p>
              {selected === option && <img src={check} alt="" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortTab;
