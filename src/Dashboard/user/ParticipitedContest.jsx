import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { ContestCard } from "../../Pages/AllContest/ContestCard";

const ParticipitedContest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: participitedContest } = useQuery({
    queryKey: ["participitedContest"],
    queryFn: async () => {
      const res = await axiosPublic.get(`get-paid-contest/${user?.email}`);
      return res.data;
    },
  });
  const joinedContest = participitedContest?.map((item) => item.joingContest);

  return (
    <div>
      <div>
        <div className="px-4 space-y-4 py-4">
          <h1 className="text-2xl md:text-4xl">
            Totoal {joinedContest?.length} Contest Found
          </h1>
          {joinedContest?.map((item) => (
            <ContestCard item={item} key={item._id}></ContestCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipitedContest;
