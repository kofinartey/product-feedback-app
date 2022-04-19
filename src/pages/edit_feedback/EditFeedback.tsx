import { useState } from "react";
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
import CustomSelect from "../../components/custom_select/CustomSelect";
import FeedbackForm from "../../components/form/FeedbackForm";

const categories = [
  { label: "Feature", value: "feature" },
  { label: "Bug", value: "bug" },
  { label: "Enhancement", value: "enhancement" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
];

function EditFeedback() {
  const classes = styles();
  let { id } = useParams();
  const AllFeedbacks = useAppSelector((state) => state.suggestions);
  const feedback = AllFeedbacks.find((feed) => feed.id.toString() === id);

  const [title, setTitle] = useState(feedback?.title);
  const [details, setDetails] = useState(feedback?.description);
  const [category, setCategory] = useState(
    () => categories.find((category) => feedback?.category === category.value)!
  );

  return (
    <main className={classes.NewFeedback}>
      <div className={classes.wrapper}>
        <nav>
          <GoBack />
        </nav>
        <FeedbackForm feedback={feedback} />
      </div>
    </main>
  );
}

export default EditFeedback;
