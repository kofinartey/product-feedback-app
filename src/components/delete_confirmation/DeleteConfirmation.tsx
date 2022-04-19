import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

//my imports
import { useAppDispatch, useAppSelector } from "../../utils/redux-hooks";
import Card from "../card/Card";
import Text from "../text/Text";
import { SuggestionInterface } from "../../types";
import Button from "../button/Button";
import TextInput from "../form_elements/TextInput";
import colors from "../../utils/colors";

type DeleteConfirmationProps = {
  feedback: SuggestionInterface;
  toggleDelete: () => void;
};

function DeleteConfirmation({
  feedback,
  toggleDelete,
}: DeleteConfirmationProps) {
  const classes = makeStyles({
    overlay: {
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 2,
    },
    wrapper: {
      width: "90%",
      maxWidth: "25rem",
      postion: "absolute",
      color: "red",
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      zIndex: 3,
      "& input": {
        margin: "1rem 0",
      },
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    // ""
  })();
  const navigate = useNavigate();
  const [confirmText, setConfirmText] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmText(event.target.value);
  };

  useEffect(() => {
    if (confirmText === `${user.username}/delete`) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [confirmText]);

  const handleDelete = () => {
    dispatch({ type: "DELETE_FEEDBACK", payload: feedback.id });
    navigate("/");
  };

  return (
    <>
      <div className={classes.overlay} onClick={toggleDelete}></div>
      <div className={classes.wrapper}>
        <Card>
          <Text as="h4"> Are you sure?</Text>
          <Text as="p">Removing feedback {feedback.id} cannot be undone.</Text>
          <Text as="p">
            Enter{" "}
            <span style={{ color: colors.danger }}>
              "{user.username}/delete"{" "}
            </span>{" "}
            to confirm.
          </Text>
          <TextInput value={confirmText} onChange={handleChange} />
          <div className={classes.buttonContainer}>
            <Button onClick={toggleDelete}>NO CANCEL</Button>
            <Button
              color="danger"
              onClick={handleDelete}
              disabled={buttonDisabled}
            >
              YES, DELETE
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default DeleteConfirmation;
