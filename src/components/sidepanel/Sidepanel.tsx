import React, { useState } from "react";
import { Link } from "react-router-dom";
//my imports

import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import SidePanelStyles from "./SidePanelStyles";
import RoadmapTag from "../roadmap_tag/RoadmapTag";

function Sidepanel() {
  const classes = SidePanelStyles();
  const [open, setOpen] = useState(true);
  return (
    <div className={classes.SidePanel}>
      <div
        className={classes.overlay}
        style={{ opacity: open ? 0.5 : 0 }}
      ></div>
      <div className={classes.gradient_section}>
        <div>
          <p>Frontend Mentor</p>
          <small>Feedback Board</small>
        </div>
        <img
          src={open ? close : hamburger}
          onClick={() => setOpen(!open)}
          alt=""
        />
      </div>
      <div
        className={classes.menu}
        style={open ? { right: open ? 0 : "-17rem" } : {}}
      >
        <div className={classes.tags}>
          <Card styles={{ display: "flex", flexWrap: "wrap" }}>
            <Tag>All</Tag>
            <Tag>UI</Tag>
            <Tag>UX</Tag>
            <Tag>Enhancement</Tag>
            <Tag>Bug</Tag>
            <Tag>Feature</Tag>
          </Card>
        </div>
        <div className={classes.roadmap}>
          <Card>
            <div className={classes.roadmap__top}>
              <h4>Roadmap</h4>
              <Link to="#">View</Link>
            </div>
            <RoadmapTag status="planned" value={2} />
            <RoadmapTag status="progress" value={2} />
            <RoadmapTag status="live" value={2} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
