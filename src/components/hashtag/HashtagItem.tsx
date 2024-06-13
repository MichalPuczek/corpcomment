type HashtagItemProps = {
  company: string;
  handleSelectCompany: (company: string) => void;
};

export default function HashtagItem({
  company,
  handleSelectCompany,
}: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => handleSelectCompany(company)}>#{company}</button>
    </li>
  );
}
