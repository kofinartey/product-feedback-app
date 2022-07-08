import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//my imports
import { useAppSelector } from "../../utils/redux-hooks";
import RoadmapTag from "../roadmap_tag/RoadmapTag";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import SidePanelStyles from "./SidePanelStyles";
import { capFirstLetter } from "../../helper-functions/capFirstLetter";

type FilterType =
  | "all"
  | "ui"
  | "ux"
  | "enhancement"
  | "feature"
  | "bug"
  | string;

type SidePanelProps = {
  filter: FilterType;
  changeFilter: (a: FilterType) => void;
};

function SidePanel({ filter, changeFilter }: SidePanelProps) {
  const classes = SidePanelStyles();
  const suggetions = useAppSelector((state) => state.suggestions);

  const planned = suggetions.filter(
    (suggestion) => suggestion.status === "planned"
  );
  const inProgress = suggetions.filter(
    (suggestion) => suggestion.status === "in-progress"
  );
  const live = suggetions.filter((suggestion) => suggestion.status === "live");

  const tags = ["all", "ui", "ux", "enhancement", "bug", "feature"];
  const tagsRender = tags.map((tag) => (
    <Tag
      onClick={() => changeFilter(tag)}
      key={tag}
      active={filter === tag ? true : false}
    >
      {capFirstLetter(tag)}
    </Tag>
  ));

  return (
    <div className={classes.SidePanel}>
      <div className={classes.gradient}>
        <h4>Frontend Mentor</h4>
        <small>Feedback Board</small>
      </div>
      <Card style={{ display: "flex", flexWrap: "wrap" }}>{tagsRender}</Card>
      <Card>
        <div className={classes.roadmap__top}>
          <h4>Roadmap</h4>
          <Link to="/roadmap">View</Link>
        </div>
        <RoadmapTag status="planned" value={planned.length} />
        <RoadmapTag status="in-progress" value={inProgress.length} />
        <RoadmapTag status="live" value={live.length} />
      </Card>
    </div>
  );
}

export default SidePanel;
