import React from "react";
import { Link } from "react-router-dom";
//my imports
import RoadmapTag from "../roadmap_tag/RoadmapTag";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import SidePanelStyles from "./SidePanelStyles";

function SidePanel() {
  const classes = SidePanelStyles();
  return (
    <aside className={classes.SidePanel}>
      <div className={classes.gradient}>
        <h4>Frontend Mentor</h4>
        <small>Feedback Board</small>
      </div>
      <Card styles={{ display: "flex", flexWrap: "wrap" }}>
        <Tag>All</Tag>
        <Tag>UI</Tag>
        <Tag>UX</Tag>
        <Tag>Enhancement</Tag>
        <Tag>Bug</Tag>
        <Tag>Feature</Tag>
      </Card>
      <Card>
        <div className={classes.roadmap__top}>
          <h4>Roadmap</h4>
          <Link to="#">View</Link>
        </div>
        <RoadmapTag status="planned" value={2} />
        <RoadmapTag status="progress" value={2} />
        <RoadmapTag status="live" value={2} />
      </Card>
    </aside>
  );
}

export default SidePanel;
