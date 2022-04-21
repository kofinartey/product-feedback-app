import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Listbox } from "@headlessui/react";

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
      <div className={classes.wrapper}>
        <nav>
          <GoBack />
          <Link to={`/edit/${feedback!.id}`}>
            <Button color="secondary">Edit Feedback</Button>
          </Link>
        </nav>

        {/* feedbackSummary */}
        <Suggestion data={feedback!} />

        {/* comments section */}
        <section className={classes.comments__section}>
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
        </section>

        {/* add new comment section */}
        <section className={classes.new__comment}>
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
        </section>
      </div>
    </main>
  );
}

export default FeedbackDetail;
