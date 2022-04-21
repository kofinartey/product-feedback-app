import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

//my imports
import { useAppDispatch, useAppSelector } from "../../utils/redux-hooks";
import Text from "../../components/text/Text";
import CustomSelect from "../../components/custom_select/CustomSelect";
import Suggestion from "../../components/suggestion/Suggestion";
import GoBack from "../../components/go_back/GoBack";
import Button from "../../components/button/Button";
import FeedbackDetailStyles from "./FeedbackDetailStyles";
import Card from "../../components/card/Card";
import Comment from "../../components/comment/Comment";
import TextArea from "../../components/form_elements/TextArea";

//framer motion variants
const wrapperVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: { opacity: 1, y: 0 },
};

function FeedbackDetail() {
  const classes = FeedbackDetailStyles();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const allFeedbacks = useAppSelector((state) => state.suggestions);

  const params = useParams();
  const { feedbackId } = params;

  const feedback = allFeedbacks.find(
    (item) => item.id.toString() === feedbackId
  )!;

  const comments = feedback?.comments;

  const MAX_CHARACTERS = 250;
  const [newComment, setNewComment] = useState("");
  const [newCommentError, setNewCommentError] = useState(false);
  const [wordsLeft, setWordsLeft] = useState(MAX_CHARACTERS);
  //  TODO:  write test for new comment character length

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const entry = event.target.value;
    setNewComment(entry);
    setWordsLeft(MAX_CHARACTERS - entry.length);
    setNewCommentError(false);
  };

  const reset = () => {
    setNewComment("");
    setWordsLeft(MAX_CHARACTERS);
  };

  const handleAddNewComment = () => {
    if (newComment.trim() === "") {
      setNewCommentError(true);
    } else {
      dispatch({
        type: "ADD_NEW_COMMENT",
        payload: {
          suggestionId: feedback!.id,
          comment: {
            content: newComment,
            id: "swwrw",
            user,
            replies: [],
          },
        },
      });
      reset();
    }
  };

  //GENEARL PAGE LAYOUT
  //   <FeedbackDetail>
  //      <nav></nav>
  //      <feedbackSummary/>
  //      <comments></commments>
  //      <addNewComment/>
  //   </FeedbackDetail>

  return (
    <main className={classes.FeedbackDetail}>
      <motion.div
        className={classes.wrapper}
        variants={wrapperVariant}
        initial="hidden"
        animate="visible"
      >
        <nav>
          <GoBack />
          <Link to={`/edit/${feedback!.id}`}>
            <Button color="secondary">Edit Feedback</Button>
          </Link>
        </nav>

        {/* feedbackSummary */}
        <Suggestion data={feedback!} />

        {/* comments section */}
        <motion.section
          className={classes.comments__section}
          variants={childVariant}
        >
          <Card>
            <div>
              <Text as="h3">{feedback?.comments?.length} Comments</Text>
            </div>
            {/* render comments */}
            {comments?.map((comment) => (
              <Fragment key={comment.id}>
                <Comment comment={comment} suggestionId={feedback!.id} />
                {/* <hr /> */}
              </Fragment>
            ))}
          </Card>
        </motion.section>

        {/* add new comment section */}
        <motion.section
          className={classes.new__comment}
          variants={childVariant}
        >
          <Card>
            <Text as="h4">Add Comment</Text>
            <div className={classes.input__wrapper}>
              <div className={classes.textInput}>
                <TextArea
                  name="comment"
                  value={newComment}
                  placeholder="Type your comment here"
                  maxLength={250}
                  role="textbox"
                  onChange={handleChange}
                  error={newCommentError}
                />
                {newCommentError && <p>**Can't be empty</p>}
              </div>
              <Text as="p" data-testid="words-left">
                {wordsLeft} characters left
              </Text>
              <Button onClick={handleAddNewComment}>Post Comment</Button>
            </div>
          </Card>
        </motion.section>
      </motion.div>
    </main>
  );
}

export default FeedbackDetail;
