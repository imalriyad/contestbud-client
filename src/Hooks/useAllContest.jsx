import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllContest = () => {
  const axiosPublic = useAxiosPublic();
  const {data:allContest = [] ,isPending,refetch} = useQuery({
    queryKey: ["AllContest"],
    queryFn: async () => {
      const res = await axiosPublic("/get-all-contest");
      return res.data;
    },
  });
  return [allContest,isPending,refetch]
};

export default useAllContest;
