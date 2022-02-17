import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import leftArrow from "../../assets/shared/icon-arrow-left.svg";

type GoBackProps = {
  secondary?: boolean;
};

function GoBack(props: GoBackProps) {
  const styles = makeStyles({
    Back: {
      border: "none",
      color: props.secondary ? "white" : "#647196",
      backgroundColor: "transparent",
      fontWeight: "bold",
      fontSize: "0.875rem",
      //   padding: "1rem",
      cursor: "pointer",
      "& img": {
        marginRight: "1rem",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
  });
  const classes = styles();
  const navigate = useNavigate();
  return (
    <button className={classes.Back} onClick={() => navigate(-1)}>
      <img src={leftArrow} alt="" />
      Go Back
    </button>
  );
}

export default GoBack;
