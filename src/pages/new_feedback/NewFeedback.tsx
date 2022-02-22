import React from "react";
//my imports
import Card from "../../components/card/Card";
import TextArea from "../../components/form_elements/TextArea";
import TextInput from "../../components/form_elements/TextInput";
import GoBack from "../../components/go_back/GoBack";
import Text from "../../components/text/Text";
import addIcon from "../../assets/shared/icon-new-feedback.svg";
import NewFeedbackStyles from "./NewFeedbackStyles";
import Button from "../../components/button/Button";

function NewFeedback() {
  const classes = NewFeedbackStyles();
  return (
    <main className={classes.NewFeedback}>
      <div className={classes.wrapper}>
        <nav>
          <GoBack />
        </nav>
        <form>
          <Card>
            <img src={addIcon} className={classes.addIcon} alt="" />
            <Text as="h1">Create New Feedback</Text>
            <div className={classes.form__control}>
              <Text as="h5">Feedback Title</Text>
              <Text as="p">Add a short, descriptive headline</Text>
              <TextInput />
            </div>

            <div className={classes.form__control}>
              <Text as="h5">Category</Text>
              <Text as="p">Add a short, descriptive headline</Text>
              <TextArea></TextArea>
            </div>
            <div className={classes.form__control}>
              <Text as="h5">Feedback Detail</Text>
              <Text as="p">
                Include any specific comments on what should be improved, added,
                etc.
              </Text>
              <TextArea></TextArea>
            </div>

            {/* buttons container */}
            <div className={classes.buttons__container}>
              <Button color="tertiary">Add Feedback</Button>
              <Button color="primary">Cancel</Button>
            </div>
          </Card>
        </form>
      </div>
    </main>
  );
}

export default NewFeedback;
