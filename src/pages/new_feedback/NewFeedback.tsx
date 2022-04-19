//my imports
import GoBack from "../../components/go_back/GoBack";
import NewFeedbackStyles from "./NewFeedbackStyles";
import FeedbackForm from "../../components/form/FeedbackForm";

function NewFeedback() {
  const classes = NewFeedbackStyles();

  return (
    <main className={classes.NewFeedback}>
      <div className={classes.wrapper}>
        <nav>
          <GoBack />
        </nav>
        <FeedbackForm />
      </div>
    </main>
  );
}

export default NewFeedback;
