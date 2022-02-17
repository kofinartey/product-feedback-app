import React, { useState } from "react";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";
import SidePanelStyles from "./SidePanelStyles";
import Card from "../card/Card";
import Tag from "../tag/Tag";

function Sidepanel() {
  const classes = SidePanelStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.SidePanel}>
      <div className={classes.overlay}></div>
      <div className={classes.gradient_section}>
        <div>
          <p>Frontend Mentor</p>
          <p>Feedback Board</p>
        </div>
        <img
          src={open ? close : hamburger}
          onClick={() => setOpen(!open)}
          alt=""
        />
      </div>
      <div className={classes.menu}>
        <div className={classes.tags}>
          <Card>
            <Tag>All</Tag>
            <Tag>UI</Tag>
            <Tag>UX</Tag>
            <Tag>Enhancement</Tag>
            <Tag>Bug</Tag>
            <Tag>Feature</Tag>
          </Card>
        </div>
        <div className={classes.roadmap}></div>
      </div>
    </div>
  );
}

export default Sidepanel;
