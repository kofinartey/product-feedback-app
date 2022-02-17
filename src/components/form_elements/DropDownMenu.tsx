import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import check from "../../assets/shared/icon-check.svg";

type DropDownItemsProps = {
  value: string;
  selected: boolean;
  someFunction: (event: React.MouseEvent) => void;
  children: React.ReactNode;
};
export function DropDownItem(props: DropDownItemsProps) {
  const styles = makeStyles({
    item: {
      width: "100%",
      color: "#647196",
      backgroundColor: "white",
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
      role="menuitem"
      onClick={(e) => {
        props.someFunction(e);
      }}
    >
      {props.children}
      {props.selected === props.children && <img src={check} alt="" />}
    </p>
  );
}

type DropDownMenuProps = {
  initial: string;
  children: React.ComponentType;
};
export function DropDownMenu(props: DropDownMenuProps) {
  const [open, setOpen] = useState(false);
  const styles = makeStyles({
    DropDownMenu: {
      position: "relative",
      // zIndex: 1000,
    },
    select: {
      width: "16rem",
      backgroundColor: "#F7F8FD",
      color: "#647196",
      padding: "0.7rem 2rem",
      margin: "1rem 0",
      border: open ? "2px solid #4661E6" : "2px solid white",
      borderRadius: "0.5rem",
      cursor: "pointer",
      position: "relative",
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
    overlay: {
      width: "100%",
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    menu: {
      width: "16rem",
      height: open ? "auto" : 0,
      borderRadius: "0.5rem",
      marginTop: "1rem",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "all" : "none",
      boxShadow: "0 0 40px rgba(0,0,0,0.15)",
      overflow: "hidden",
      transition: "all ease-in-out 0.3s",
      position: "absolute",
      top: "3rem",
    },
  });
  const [selected, setSelected] = useState(props.initial);
  const classes = styles();

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  const childrenWithProps = React.Children.map(
    props.children,
    //React.FunctionalComponent
    (child, index) => {
      return React.cloneElement(child, {
        someFunction: (event: React.MouseEvent) => {
          const myEl = event.target as HTMLElement; //needed to fix ts issue
          setSelected(myEl.innerText);
          setOpen(!open);
        },
        selected,
      });
    }
  );

  return (
    <div className={classes.DropDownMenu}>
      <div
        className={classes.select}
        onClick={() => setOpen(!open)}
        role="menubar"
      >
        <p data-testid="selected">{selected}</p>
        <img src={arrowDown} alt="" />
      </div>
      {open && (
        <div className={classes.overlay} onClick={() => setOpen(!open)}></div>
      )}

      <div className={classes.menu} role="menu">
        {/* {childrenWithProps} */}
        {props.children}
      </div>
    </div>
  );
}
