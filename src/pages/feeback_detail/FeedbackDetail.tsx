import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
//my imports
import Text from "../../components/text/Text";
import Suggestion from "../../components/suggestion/Suggestion";
import { SuggestionType } from "../../redux/suggestions/suggestionsReducer";
import GoBack from "../../components/go_back/GoBack";
import Button from "../../components/button/Button";
import FeedbackDetailStyles from "./FeedbackDetailStyles";
import Card from "../../components/card/Card";
import Comment from "../../components/comment/Comment";
import TextArea from "../../components/form_elements/TextArea";

function FeedbackDetail() {
  const classes = FeedbackDetailStyles();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const allFeedbacks = useAppSelector((state) => state.suggestions);

  const params = useParams();
  const { feedbackId } = params;

  const feedback = allFeedbacks.find(
    (item) => item.id.toString() === feedbackId
  );
  const comments = feedback?.comments;

  const MAX_CHARACTERS = 250;
  const [newComment, setNewComment] = useState("");
  const [wordsLeft, setWordsLeft] = useState(250);
  //  TODO:  write test for new comment character length
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const entry = event.target.value;
    setNewComment(entry);
    setWordsLeft(MAX_CHARACTERS - entry.length);
  };

  //GENEARL PAGE LAYOUT
  //   <FeedbackDetail>
  //      <nav></nav>
  //      <feedbackSummary/>
  //      <comments></commments>
  //   </FeedbackDetail>

  return (
    <main className={classes.FeedbackDetail}>
      <div className={classes.wrapper}>
        <nav>
          <GoBack />
          <Button color="secondary">Edit Feedback</Button>
        </nav>
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
                <Comment comment={comment} />
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
              <TextArea
                name="comment"
                placeholder="Type your comment here"
                maxLength={250}
                role="textbox"
                onChange={handleChange}
              />
              <Text as="p" data-testid="words-left">
                {wordsLeft} characters left
              </Text>
              <Button>Post Comment</Button>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default FeedbackDetail;
