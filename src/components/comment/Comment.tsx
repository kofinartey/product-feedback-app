import React, { useState } from "react";
import Button from "../button/Button";
import TextArea from "../form_elements/TextArea";
import TextInput from "../form_elements/TextInput";
//my imports
import Text from "../text/Text";
import CommentStyles from "./CommentStyles";

type CommentProps = {
  comment: {
    id: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
    // replies?: CommentProps[];
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
      <div className={classes.Comment}>
        {/* <img src={process.env.PUBLIC_URL + `${comment.user.image}`} alt="" /> */}
        <div className={classes.user_image}></div>
        <div className={classes.reply} onClick={() => setReplying(!replying)}>
          <Text as="h5" color="secondary">
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

      {/* replies */}

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
