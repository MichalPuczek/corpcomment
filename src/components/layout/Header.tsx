// import { useFeedbackItemsContext } from "../../lib/hooks";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// Components
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  // ----- CONTEXT API -----
  // const { handleAddToList } = useFeedbackItemsContext();
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  return (
    <header>
      (
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddToList={addItemToList} />)
    </header>
  );
}
