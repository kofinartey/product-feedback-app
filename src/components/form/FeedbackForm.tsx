import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

//my imports
import { useAppSelector, useAppDispatch } from "../../utils/redux-hooks";
import Card from "../card/Card";
import addIcon from "../../assets/shared/icon-new-feedback.svg";
import Text from "../text/Text";
import TextInput from "../form_elements/TextInput";
import TextArea from "../form_elements/TextArea";
import Button from "../button/Button";
import CustomSelect from "../custom_select/CustomSelect";
import FeedbackFormStyles from "./FeedbackFormStyles";
import { SuggestionInterface } from "../../types";

const categories = [
  { label: "Feature", value: "feature" },
  { label: "Bug", value: "bug" },
  { label: "Enhancement", value: "enhancement" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
];
const statuses = [
  { label: "Suggestion", value: "suggestion" },
  { label: "Planned", value: "planned" },
  { label: "In-Progress", value: "in-progress" },
  { label: "Live", value: "live" },
];

type FeedbackFormProps = {
  feedback?: SuggestionInterface;
};

function FeedbackForm({ feedback }: FeedbackFormProps) {
  const classes = FeedbackFormStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(feedback ? feedback.title : "");
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState(feedback ? feedback.description : "");
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState(
    feedback
      ? () =>
          categories.find((category) => feedback?.category === category.value)!
      : categories[0]
  );
  const [status, setStatus] = useState(
    feedback
      ? () => statuses.find((status) => feedback.status === status.value)!
      : statuses[0]
  );

  const validate = () => {
    let error;
    if (title.trim() === "") setTitleError(true);
    if (details.trim() === "") setDetailsError(true);
    if (title.trim() === "" || details.trim() === "") {
      error = true;
    }
    return error;
  };

  const handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void = (event) => {
    if (event.target.id === "title") {
      setTitle(event.target.value);
      setTitleError(false);
    }
    if (event.target.id === "detail") {
      setDetails(event.target.value);
      setDetailsError(false);
    }
  };

  const send = () => {
    if (feedback) {
      dispatch({
        type: "EDIT_FEEDBACK",
        payload: {
          id: feedback.id,
          title,
          category: category.value,
          status: status.value,
          description: details,
        },
      });
    } else {
      dispatch({
        type: "ADD_NEW_FEEDBACK",
        payload: {
          id: nanoid(),
          title,
          category: category.value,
          description: details,
        },
      });
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    let error = validate();
    console.log(error);
    if (!error) {
      send();
      navigate("/");
    }
  };
  const handleCancel = () => {
    navigate("/");
  };

  const formTitle = (
    <Text as="h1">
      {feedback ? `Editing '${feedback.title}'` : " Create New Feedback"}
    </Text>
  );
  const errorMessage = <p className={classes.error}>**Can't be empty!</p>;

  // MAIN COMPONENT RETURN METHOD
  // MAIN COMPONENT RETURN METHOD
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <img src={addIcon} className={classes.addIcon} alt="" />
        {formTitle}
        <div className={classes.form__control}>
          <Text as="h5">Feedback Title</Text>
          <Text as="p">Add a short, descriptive headline</Text>
          <TextInput
            value={title}
            onChange={handleChange}
            id="title"
            error={titleError}
          />
        </div>

        <div className={classes.form__control}>
          <Text as="h5">Category</Text>
          <Text as="p">Add a short, descriptive headline</Text>
          <CustomSelect
            options={categories}
            value={category}
            onChange={setCategory}
          />
        </div>

        {feedback && (
          <div className={classes.form__control}>
            <Text as="h5">Update Status</Text>
            <Text as="p">Change feature state</Text>
            <CustomSelect
              options={statuses}
              value={status}
              onChange={setStatus}
            />
          </div>
        )}
        <div className={classes.form__control}>
          <Text as="h5">Feedback Detail</Text>
          <Text as="p">
            Include any specific comments on what should be improved, added,
            etc.
          </Text>
          <TextArea
            id="detail"
            error={detailsError}
            value={details}
            onChange={handleChange}
          ></TextArea>
          {detailsError && errorMessage}
        </div>

        {/* buttons container */}
        <div className={classes.buttons__container}>
          <Button color="tertiary" type="submit">
            {feedback ? "Save Changes" : "Add Feedback"}
          </Button>
          <Button color="primary" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          {feedback && <Button color="danger">Delete</Button>}
        </div>
      </Card>
    </form>
  );
}

export default FeedbackForm;
