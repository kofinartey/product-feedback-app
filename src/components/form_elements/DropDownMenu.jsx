import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import check from "../../assets/shared/icon-check.svg";

export function DropDownItem(props) {
  const styles = makeStyles({
    item: {
      width: "100%",
      color: "#647196",
      borderBottom: "2px solid #F2F4FF",
      padding: "0.7rem 2rem",
      cursor: "pointer",
      transition: "color 0.2s ease-in-out",
      position: "relative",
      "&:hover": {
        color: "#AD1FEA",
      },
      "& img": {
        position: "absolute",
        right: "2rem",
      },
    },
  });
  const classes = styles();

  return (
    <p
      className={classes.item}
      value={props.value}
      onClick={(e) => {
        props.someFunction(e);
        console.log(e.target.innerHTML);
      }}
    >
      {props.children}
      {props.selected === props.children && <img src={check} alt="" />}
    </p>
  );
}

export function DropDownMenu(props) {
  const [open, setOpen] = useState(false);
  const styles = makeStyles({
    select: {
      width: "16rem",
      backgroundColor: "#F7F8FD",
      color: "#647196",
      padding: "0.7rem 2rem",
      position: "relative",
      border: open ? "2px solid #4661E6" : "2px solid white",
      borderRadius: "0.5rem",
      cursor: "pointer",
      transition: "all ease-in-out 0.2s",
      "&:hover": {
        border: "2px solid #4661E6",
      },
      "& img": {
        position: "absolute",
        right: "2rem",
        top: "1.2rem",
        transform: open && "rotate(180deg)",
        transition: "all ease-in-out 0.2s",
      },
    },
    menu: {
      width: "16rem",
      height: open ? "auto" : 0,
      borderRadius: "0.5rem",
      marginTop: "1rem",
      opacity: open ? 1 : 0,
      pointerEvents: !open && "none",
      boxShadow: "0 0 40px rgba(0,0,0,0.15)",
      overflow: "hidden",
      transition: "all ease-in-out 0.3s",
      position: "absolute",
      zIndex: 5,
    },
  });
  const [selected, setSelected] = useState(props.initial);
  const classes = styles();

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      return React.cloneElement(child, {
        someFunction: (e) => {
          setSelected(e.target.innerHTML);
          setOpen(!open);
        },
        selected,
      });
    }
  );

  return (
    <>
      <div className={classes.select} onClick={() => setOpen(!open)}>
        {selected}
        <img src={arrowDown} alt="" />
      </div>

      <div className={classes.menu}>{childrenWithProps}</div>
    </>
  );
}
