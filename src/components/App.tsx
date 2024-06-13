// Context
// import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
// Components
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      {/* <FeedbackItemsContextProvider> */}
      <Container />
      <HashtagList />
      {/* </FeedbackItemsContextProvider> */}
    </div>
  );
}

export default App;
