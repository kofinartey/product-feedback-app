import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

//my imports
import { capFirstLetter } from "../../helper-functions/capFirstLetter";
import Card from "../card/Card";
import Tag from "../tag/Tag";
import Text from "../text/Text";
import UpvoteButton from "../upvote_button/UpvoteButton";
import commentIcon from "../../assets/shared/icon-comments.svg";
import RoadmapTag from "../roadmap_tag/RoadmapTag";
import { SuggestionInterface } from "../../types";
import colors from "../../utils/colors";
import RoadmapSuggestionStyles from "./RoadmapSuggestionStyles";

interface RoadmapSuggestionProps {
  data: SuggestionInterface;
}

function RoadmapSuggestion({ data }: RoadmapSuggestionProps) {
  const classes = RoadmapSuggestionStyles();

  const borderStyles = {
    borderTop: "0.4rem solid ",
    borderColor:
      data.status === "planned"
        ? colors.orange
        : data.status === "in-progress"
        ? colors.purple
        : colors.blue,
  };
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
  }, [data]);

  return (
    <div className={classes.RoadmapSuggestion}>
      <Card style={borderStyles}>
        <div className={classes.wrapper}>
          <RoadmapTag status={data.status} />
          <h4 className={classes.title}>{data?.title}</h4>
          <Text as="p" textColor="grey">
            {data?.description}
          </Text>
          <Tag>{capFirstLetter(data?.category)}</Tag>

          <div className={classes.bottomContainer}>
            <UpvoteButton upvotes={data?.upvotes} inRoadmap={true} />
            <div className={classes.comments}>
              <img src={commentIcon} alt="" />
              <h4>{totalNumberOfComments}</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RoadmapSuggestion;
