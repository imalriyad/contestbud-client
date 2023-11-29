import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useUserRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userRole ,isPending,refetch:menuUpDate} = useQuery({
    queryKey: ["userRole"],
    queryFn: async () => {
      const res = await axiosSecure(`/get-user-role?email=${user?.email}`);
      return res.data;
    },
  });

  return [userRole,isPending,menuUpDate];
};

export default useUserRole;
