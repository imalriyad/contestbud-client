import SectionTile from "../SectionTile";
import { ContestCard } from "../AllContest/ContestCard";
import useAuth from "../../Hooks/useAuth";

const Topcontest = () => {
    const {topContest} = useAuth()
  return (
    <div>
      <div className="mt-8">
        <SectionTile
          heading={"Trending Contest"}
          subHeading={
            "Discover the cream of the crop in our thriving community of contests from our vibrant user base"
          }
        ></SectionTile>
      </div>
      <div className="px-4 mt-6 space-y-6">
        {topContest?.map((item) => (
          <ContestCard item={item} key={item._id}></ContestCard>
        ))}
      </div>
    </div>
  );
};

export default Topcontest;
