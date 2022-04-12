import React, { useState } from "react";

//my imports
import { useAppDispatch, useAppSelector } from "../../utils/redux-hooks";
import Text from "../text/Text";
import TextArea from "../form_elements/TextArea";
import Button from "../button/Button";
import { ReplyInterface } from "../../types";
import ReplyStyles from "../comment/CommentStyles"; //shares same styles with comment

type ReplyProps = {
  reply: ReplyInterface;
  suggestionId: string | number;
  commentId: string | number;
  key: number;
};

function Reply({ reply, commentId, suggestionId }: ReplyProps) {
  const classes = ReplyStyles();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyError, setReplyError] = useState(false);

  const toggleReply = () => {
    setReplying(!replying);
    resetInput();
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(event.target.value);
    setReplyError(false);
  };
  const resetInput = () => {
    setReplyError(false);
    setReplyText("");
  };

  const handleReply = () => {
    if (replyText.trim() === "") {
      setReplyError(true);
    } else {
      console.log(replyText);
      dispatch({
        type: "REPLY",
        payload: {
          suggestionId,
          commentId,
          reply: {
            content: replyText,
            replyingTo: reply.user.username,
            user,
          },
        },
      });
      toggleReply();
    }
  };

  return (
    <div className={classes.wrapper}>
      {/* actual reply */}
      <div
        className={classes.Comment}
        onClick={() => replying && setReplying(false)}
      >
        <img
          src={process.env.PUBLIC_URL + `${reply.user.image}`}
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
          <Text as="h5">{reply.user.name}</Text>
          <Text as="p">@{reply.user.username}</Text>
        </div>
        <div className={classes.comment__content}>
          <Text as="p">
            {reply.replyingTo ? <span>@{reply.replyingTo} </span> : ""}
            {reply.content}
          </Text>
        </div>
      </div>

      {/* reply form */}
      {replying && (
        <div className={classes.reply__form}>
          <div className={classes.replyInput}>
            <TextArea value={replyText} onChange={handleChange} />
            {replyError && <p className={classes.error}>**Can't be empty</p>}
          </div>
          <Button onClick={handleReply}>Post Reply</Button>
        </div>
      )}
    </div>
  );
}

export default Reply;
