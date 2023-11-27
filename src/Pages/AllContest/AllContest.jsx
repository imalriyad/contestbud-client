import useAllContest from "../../Hooks/useAllContest";
import { ContestCard } from "./ContestCard";

const AllContest = () => {
  const [allContest] = useAllContest();

  return (
    <div className="space-y-5 mt-10 px-4">
      {allContest?.map((item) => (
        <ContestCard item={item} key={item._id}></ContestCard>
      ))}
    </div>
  );
};

export default AllContest;
