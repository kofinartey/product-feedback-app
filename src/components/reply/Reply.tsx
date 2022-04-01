import React, { useState } from "react";

//my imports
import Text from "../text/Text";
import TextArea from "../form_elements/TextArea";
import Button from "../button/Button";
import { ReplyInterface } from "../../types";
import ReplyStyles from "../comment/CommentStyles"; //shares same styles with comment

type ReplyProps = {
  reply: ReplyInterface;
  key: number;
};

function Reply({ reply }: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const classes = ReplyStyles();
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
        <div className={classes.reply} onClick={() => setReplying(true)}>
          <Text as="h5" color="secondary">
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
          <TextArea />
          <Button>Post Reply</Button>
        </div>
      )}
    </div>
  );
}

export default Reply;
