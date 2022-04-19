import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
//my imports
import { useAppDispatch } from "../../utils/redux-hooks";
import Card from "../../components/card/Card";
import TextArea from "../../components/form_elements/TextArea";
import TextInput from "../../components/form_elements/TextInput";
import GoBack from "../../components/go_back/GoBack";
import Text from "../../components/text/Text";
import addIcon from "../../assets/shared/icon-new-feedback.svg";
import NewFeedbackStyles from "./NewFeedbackStyles";
import Button from "../../components/button/Button";
import CustomSelect from "../../components/custom_select/CustomSelect";

const categories = [
  { label: "Feature", value: "feature" },
  { label: "Bug", value: "bug" },
  { label: "Enhancement", value: "enhancement" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
];

function NewFeedback() {
  const classes = NewFeedbackStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  const validate = () => {
    if (title.trim() === "") setTitleError(true);
    if (details.trim() === "") setDetailsError(true);
  };
  const handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void = (event) => {
    if (event.target.id === "title") setTitle(event.target.value);
    if (event.target.id === "detail") setDetails(event.target.value);
  };

  const handleAddFeedback = (event: React.SyntheticEvent) => {
    event.preventDefault();
    validate();
    dispatch({
      type: "ADD_NEW_FEEDBACK",
      payload: {
        id: nanoid(),
        title,
        category: category.value,
        description: details,
      },
    });
    navigate("/");
  };
  const handleCancel = () => {
    console.log("cancelling");
  };

  const errorMessage = <p className={classes.error}>**Can't be empty!</p>;

  return (
    <main className={classes.NewFeedback}>
      <div className={classes.wrapper}>
        <nav>
          <GoBack />
        </nav>
        <form onSubmit={handleAddFeedback}>
          <Card>
            <img src={addIcon} className={classes.addIcon} alt="" />
            <Text as="h1">Create New Feedback</Text>
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
                Add Feedback
              </Button>
              <Button color="primary" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </main>
  );
}

export default NewFeedback;
