import React from "react";
import { makeStyles } from "@mui/styles";

type RoadmapTagTypes = {
  status: "planned" | "progress" | "live";
  value: number;
};

function RoadmapTag({ status, value }: RoadmapTagTypes) {
  const styles = makeStyles({
    tag: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "1rem",
      margin: "0.5rem 0",
    },
    group: {
      display: "flex",
      alignItems: "center",
    },
    bullet: {
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "50%",
      marginRight: "1rem",
      backgroundColor:
        status === "planned"
          ? "#F49F85"
          : status === "progress"
          ? "#AD1FEA"
          : status === "live"
          ? "#62BCFA"
          : "",
    },
    value: {
      color: "#979797",
    },
  });
  const classes = styles();
  const text =
    status === "planned"
      ? "Planned"
      : status === "progress"
      ? "In-Progress"
      : status === "live"
      ? "Live"
      : null;
  return (
    <div className={classes.tag}>
      <div className={classes.group}>
        <div className={classes.bullet}></div>
        <p>{text}</p>
      </div>
      <h4 className={classes.value}>{value}</h4>
    </div>
  );
}

export default RoadmapTag;
