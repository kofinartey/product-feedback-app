import { useParams } from "react-router-dom";

//my imports
import { useAppDispatch, useAppSelector } from "../../utils/redux-hooks";
import styles from "../new_feedback/NewFeedbackStyles"; //share same styles with new feedback
import Text from "../../components/text/Text";
import TextArea from "../../components/form_elements/TextArea";
import TextInput from "../../components/form_elements/TextInput";
import Button from "../../components/button/Button";
import GoBack from "../../components/go_back/GoBack";
import Card from "../../components/card/Card";
import addIcon from "../../assets/shared/icon-plus.svg";

function EditFeedback() {
  const classes = styles();
  let { id } = useParams();
  const AllFeedbacks = useAppSelector((state) => state.suggestions);
  const feedback = AllFeedbacks.find((feed) => feed.id.toString() === id);

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
              <Text as="h5">Update Status</Text>
              <Text as="p">Change feedback state</Text>
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
              <Button color="danger">Delete</Button>
            </div>
          </Card>
        </form>
      </div>
    </main>
  );
}

export default EditFeedback;
