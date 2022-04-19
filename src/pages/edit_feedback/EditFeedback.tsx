import { useParams } from "react-router-dom";

//my imports
import { useAppDispatch, useAppSelector } from "../../utils/redux-hooks";
import styles from "../new_feedback/NewFeedbackStyles"; //share same styles with new feedback
import GoBack from "../../components/go_back/GoBack";
import FeedbackForm from "../../components/form/FeedbackForm";

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
        <FeedbackForm feedback={feedback} />
      </div>
    </main>
  );
}

export default EditFeedback;
