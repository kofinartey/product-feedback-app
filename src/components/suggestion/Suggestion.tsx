import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
//my imports
import { capFirstLetter } from "../../helper-functions/capFirstLetter";
import { SuggestionInterface } from "../../types";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import UpvoteButton from "../upvote_button/UpvoteButton";
import commentIcon from "../../assets/shared/icon-comments.svg";

type SuggestionProps = {
  data: SuggestionInterface;
};

function Suggestion({ data }: SuggestionProps) {
  const classes = makeStyles({
    suggestion: {
      // padding: "0 2rem",
      margin: "1rem 0",
    },
    wrapper: {
      // padding: "1rem",
      display: "grid",
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateColumns: "1fr 1fr",
      // gap: "0.5rem",
      "& $title": {
        gridRow: "1/2",
        gridColumn: "1/3",
        color: "#3A4374",
      },
      "& $description": {
        gridRow: "2/3",
        gridColumn: "1/3",
        color: "#647196",
        fontSize: "0.8125rem",
      },
      "& $tag": {
        gridRow: "3/4",
        gridColumn: "1/3",
      },
      "& $upvote": {
        gridRow: "4/5",
        gridColumn: "1/2",
      },
    },
    title: {},
    description: {},
    tag: {},
    upvote: {},
    comments: {
      width: "3rem",
      color: "#3A4374",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      justifySelf: "flex-end",
      "& img": {
        width: "1.5rem",
      },
      "& h4": {
        opacity: data?.comments ? 1 : 0.3,
      },
    },

    "@media(min-width:48rem)": {
      suggestion: {
        padding: 0,
      },
      wrapper: {
        gridTemplateColumns: "1fr 6fr 1fr",
        gridTemplateRows: "repeat(3, 2rem)",
        gap: 0,
        "& $title": {
          gridRow: "1/2",
          gridColumn: "2/3",
        },
        "& $description": {
          gridColumn: "2/3",
          fontSize: "1rem",
        },
        "& $tag": {
          //   gridRow: "2/3",
          gridColumn: "2/3",
        },
        "& $upvote": {
          gridRow: "1/4",
          gridColumn: "1/2",
        },
        "& $comments": {
          gridColumn: "3/4",
          gridRow: "1/4",
        },
      },
    },
  })();

  const [totalNumberOfComments, setTotalNumberofComments] = useState(0);

  // calculate toal number of comments. ie. comments + replies
  useEffect(() => {
    function calcTotalComments() {
      data.comments.map((comment) => {
        setTotalNumberofComments((curState) => curState + 1);
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            setTotalNumberofComments((curState) => curState + 1);
          });
        }
      });
    }
    calcTotalComments();
  }, []);

  return (
    <div className={classes.suggestion}>
      <Card>
        <div className={classes.wrapper}>
          <h4 className={classes.title}>{data?.title}</h4>
          <p className={classes.description}>{data?.description}</p>

          <div className={classes.tag}>
            <Tag>{capFirstLetter(data?.category)}</Tag>
          </div>

          <div
            className={classes.upvote}
            onClick={(event) => event.stopPropagation()}
          >
            <UpvoteButton upvotes={data?.upvotes} />
          </div>

          <div className={classes.comments}>
            <img src={commentIcon} alt="" />
            <h4>{totalNumberOfComments}</h4>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Suggestion;
