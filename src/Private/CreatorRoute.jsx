/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";

const CreatorRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [userRole, isPending] = useUserRole();

  if (isLoading || isPending) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed border-black rounded-full animate-spin border-mainColor"></div>
    );
  }
  if (user && userRole?.role ==='creator') {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default CreatorRoute;