import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useUserRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userRole ,isPending} = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure(`/get-all-user?email=${user?.email}`);
      return res.data;
    },
  });

  return [userRole,isPending];
};

export default useUserRole;
