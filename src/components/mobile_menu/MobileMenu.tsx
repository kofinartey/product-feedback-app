import React, { useState } from "react";
import { Link } from "react-router-dom";
//my imports
import { useAppSelector } from "../../utils/redux-hooks";
import { capFirstLetter } from "../../helper-functions/capFirstLetter";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import MobileMenuStyles from "./MobileMenuStyles";
import RoadmapTag from "../roadmap_tag/RoadmapTag";

type FilterType =
  | "all"
  | "ui"
  | "ux"
  | "enhancement"
  | "feature"
  | "bug"
  | string;

type MobileMenuProps = {
  filter: FilterType;
  changeFilter: (a: FilterType) => void;
};

function MobileMenu({ filter, changeFilter }: MobileMenuProps) {
  const classes = MobileMenuStyles();
  const [open, setOpen] = useState(false);

  //get all suggestions and group them
  const suggetions = useAppSelector((state) => state.suggestions);
  const planned = suggetions.filter(
    (suggestion) => suggestion.status === "planned"
  );
  const inProgress = suggetions.filter(
    (suggestion) => suggestion.status === "in-progress"
  );
  const live = suggetions.filter((suggestion) => suggestion.status === "live");

  // list tags
  const tags = ["all", "ui", "ux", "enhancement", "bug", "feature"];
  const tagsRender = tags.map((tag) => (
    <Tag
      onClick={() => {
        changeFilter(tag);
        setOpen(false);
      }}
      key={tag}
      active={filter === tag ? true : false}
    >
      {capFirstLetter(tag)}
    </Tag>
  ));

  return (
    <div className={classes.MobileMenu}>
      {/* overlay */}
      <div
        className={classes.overlay}
        style={{
          opacity: open ? 0.5 : 0,
          pointerEvents: open ? "all" : "none",
        }}
        onClick={() => setOpen(!open)}
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
          <Card style={{ display: "flex", flexWrap: "wrap" }}>
            {tagsRender}
          </Card>
        </div>
        <div className={classes.roadmap}>
          <Card>
            <div className={classes.roadmap__top}>
              <h4>Roadmap</h4>
              <Link to="#">View</Link>
            </div>
            <RoadmapTag status="planned" value={planned.length} />
            <RoadmapTag status="in-progress" value={inProgress.length} />
            <RoadmapTag status="live" value={live.length} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
