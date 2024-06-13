import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type TFeedbackItem } from "../../lib/types";

type FeedbackItemsProps = {
  feedback: TFeedbackItem;
};

export default function FeedbackItem({ feedback }: FeedbackItemsProps) {
  // STATE 1 : toogle feedback open / closed
  const [open, setOpen] = useState(false);
  // STATE 2 : feedback upvote count
  const [upvoteCount, setUpvoteCount] = useState(feedback.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedback.badgeLetter}</p>
      </div>
      <div>
        <p>{feedback.company}</p>
        <p>{feedback.text}</p>
      </div>
      <p>{feedback.daysAgo === 0 ? "NEW" : `${feedback.daysAgo}d`}</p>
    </li>
  );
}
