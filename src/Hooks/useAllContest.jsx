import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllContest = () => {
  const axiosPublic = useAxiosPublic();
  const {data:allContest = []} = useQuery({
    queryKey: ["AllContest"],
    queryFn: async () => {
      const res = await axiosPublic("/get-all-contest");
      return res.data;
    },
  });
  return [allContest]
};

export default useAllContest;
