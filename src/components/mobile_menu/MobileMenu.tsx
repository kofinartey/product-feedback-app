import React, { useState } from "react";
import { Link } from "react-router-dom";
//my imports

import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import MobileMenuStyles from "./MobileMenuStyles";
import RoadmapTag from "../roadmap_tag/RoadmapTag";

function MobileMenu() {
  const classes = MobileMenuStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.MobileMenu}>
      {/* overlay */}
      <div
        className={classes.overlay}
        style={{ opacity: open ? 0.5 : 0 }}
      ></div>

      {/* part with multi-colored gradient */}
      <div className={classes.gradient}>
        <div>
          <p>Frontend Mentor</p>
          <small>Feedback Board</small>
        </div>
        <img
          src={open ? close : hamburger}
          onClick={() => setOpen(!open)}
          alt=""
          data-testid="toggler"
        />
      </div>

      {/* section for tags and roadmap */}
      <div
        className={classes.menu}
        style={open ? { right: open ? 0 : "-17rem" } : {}}
        role="menu"
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

export default MobileMenu;
