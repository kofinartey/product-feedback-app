import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";

type DropDownMenuProps = {
  initial: string;
  children: React.ComponentType;
};
export function DropDownMenu(props: DropDownMenuProps) {
  const [open, setOpen] = useState(false);
  const classes = makeStyles({
    DropDownMenu: {
      position: "relative",
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
  })();
  const [selected, setSelected] = useState(props.initial);

  const changeSelected = (event: React.MouseEvent) => {
    const myEl = event.target as HTMLElement; //needed to fix ts issue
    setSelected(myEl.innerText);
    setOpen(!open);
  };

  // This component wraps other children component.
  // It would be used like this:
  //  <DropDownMenu>
  //    <DropDownItem></DropDownItem>
  //    <DropDownItem></DropDownItem>
  //    <DropDownItem></DropDownItem>
  //  </DropDownMenu>

  // I need to pass a function to each of the child components(DropDownItem).
  // To do so, I map over the children, clone each child and pass the function as a prop to them
  // The UI works fine in JS, but I'm not able to specify the type of child Typescript.

  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      return React.cloneElement(child, {
        changeSelected, //i.e the function to pass
        selected, //piece of state to pass
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
        {childrenWithProps}
        {/* {props.children} */}
      </div>
    </div>
  );
}
