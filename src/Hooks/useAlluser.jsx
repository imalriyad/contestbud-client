import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useAlluser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allUser,refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure("/get-all-user");
      return res.data;
    },
  });

  return [allUser,refetch];
};

export default useAlluser;
