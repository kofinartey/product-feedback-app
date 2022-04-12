import React, { useState } from "react";

//my imports
import Button from "../button/Button";
import TextArea from "../form_elements/TextArea";
import Text from "../text/Text";
import { CommentInterface } from "../../types";
import CommentStyles from "./CommentStyles";
import Reply from "../reply/Reply";
import { useAppDispatch, useAppSelector } from "../../utils/redux-hooks";

type CommentProps = {
  comment: CommentInterface;
  suggestionId: string | number;
};

function Comment({ comment, suggestionId }: CommentProps) {
  const classes = CommentStyles();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [replyText, setReplyText] = useState("");
  const [replyError, setReplyError] = useState(false);
  const [replying, setReplying] = useState(false);

  const handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void = (event) => {
    setReplyText(event.target.value);
    setReplyError(false);
  };
  const toggleReply = () => {
    setReplying(!replying);
    resetInput();
  };
  const resetInput = () => {
    setReplyError(false);
    setReplyText("");
  };
  const handleReplyComment = () => {
    if (replyText.trim() === "") {
      setReplyError(true);
    } else {
      dispatch({
        type: "REPLY",
        payload: {
          suggestionId,
          commentId: comment.id,
          reply: {
            content: replyText,
            replyingTo: comment.user.username,
            user,
          },
        },
      });
      toggleReply();
    }
  };

  // COMMENT LAYOUT
  //    <wrapper>
  //        <comment>
  //        <reply input>
  //        <replies>
  //    <wrapper>

  return (
    <div className={classes.wrapper}>
      {/* actual comment */}
      <div
        className={classes.Comment}
        onClick={() => replying && setReplying(false)}
      >
        <img
          src={process.env.PUBLIC_URL + `${comment.user.image}`}
          className={classes.user_image}
          alt=""
        />
        {/* <div className={classes.user_image}></div> */}
        <div className={classes.reply} onClick={toggleReply}>
          <Text as="h5" color="blue">
            Reply
          </Text>
        </div>
        <div className={classes.name}>
          <Text as="h5">{comment.user.name}</Text>
          <Text as="p">@{comment.user.username}</Text>
        </div>

        <div className={classes.comment__content}>
          <Text as="p">{comment.content}</Text>
        </div>
      </div>

      {/* reply form */}
      {replying && (
        <div className={classes.reply__form}>
          <div className={classes.replyInput}>
            <TextArea
              value={replyText}
              onChange={handleChange}
              error={replyError}
            />
            {replyError && <p className={classes.error}>**Can't be empty</p>}
          </div>
          <Button onClick={handleReplyComment}>Post Reply</Button>
        </div>
      )}

      {/* replies */}
      <div className={classes.replies}>
        {comment.replies &&
          comment.replies.map((reply, index) => (
            <Reply
              key={index}
              reply={reply}
              suggestionId={suggestionId}
              commentId={comment.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Comment;
