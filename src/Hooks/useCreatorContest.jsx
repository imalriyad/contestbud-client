import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCreatorContest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: myCreatedContest = [], refetch } = useQuery({
    queryKey: ["creatorContest"],
    queryFn: async () => {
      const res = await axiosPublic(`/get-my-created-contest?email=${user?.email}`);
      return res.data;
    },
  });
  return [myCreatedContest, refetch];
};

export default useCreatorContest;
