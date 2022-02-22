import React, { useState } from "react";
import Button from "../button/Button";
import TextArea from "../form_elements/TextArea";
import TextInput from "../form_elements/TextInput";
//my imports
import Text from "../text/Text";
import CommentStyles from "./CommentStyles";

type CommentProps = {
  comment: {
    id?: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
    replyingTo?: string;
    replies?: CommentProps[];
  };
};

function Comment({ comment }: CommentProps) {
  const classes = CommentStyles();
  const [replying, setReplying] = useState(false);

  // COMMENT LAYOUT
  //    <wrapper>
  //        <comment>
  //        <replies>
  //        <reply input>
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
        <div className={classes.reply} onClick={() => setReplying(true)}>
          <Text as="h5" color="secondary">
            Reply
          </Text>
        </div>
        <div className={classes.name}>
          <Text as="h5">{comment.user.name}</Text>
          <Text as="p">@{comment.user.username}</Text>
        </div>

        <div className={classes.comment__content}>
          <Text as="p">
            {comment.replyingTo ? <span>@{comment.replyingTo} </span> : ""}
            {comment.content}
          </Text>
        </div>
      </div>

      {/* replies */}
      <div className={classes.replies}>
        {comment.replies &&
          comment.replies.map((reply) => (
            <Comment comment={reply} key={reply.content} />
          ))}
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

export default Comment;
