// Context API
// import { useFeedbackItemsContext } from "../../lib/hooks";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// Components
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  // Context API
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          handleSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
