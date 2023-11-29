import { NavLink, Outlet } from "react-router-dom";
import { FaEdit,FaHome } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";


import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const [userRole] = useUserRole();
  const { user } = useAuth();
  //   console.log(user && userRole.role === "admin");
  return (
    <div className="md:flex justify-between gap-4">
      <div className="bg-success min-w-fit menu menu-vertical space-y-2 md:min-h-screen md:pb-0 pb-4 flex flex-col text-white">
      
        <NavLink
              className={
                "font-medium btn text-sm px-4 mt-6 flex gap-2 items-center"
              }
              to={"/"}
            >
              Home <FaHome className="text-lg" />
            </NavLink>


              {/* Admin only */}
        {user && userRole?.role === "admin" ? (
          <>
            <NavLink
              className={
                "font-medium btn text-sm px-4 mt-6 flex gap-2 items-center"
              }
              to={"dashboard/manage-user"}
            >
              Manage User <FaUserPen className="text-lg" />
            </NavLink>
            <NavLink
              className={"font-medium btn px-4 flex gap-2 text-sm items-center"}
              to={"dashboard/manage-contest"}
            >
              Manage Contest <FaEdit className="text-lg" />
            </NavLink>
          </>
        ) : (
          ""
        )}

        {/* Contest Creator only */}

        {user && userRole?.role === "creator"?<>
          <NavLink
            className={
              "font-medium btn text-sm px-4 mt-6 flex gap-2 items-center"
            }
            to={"dashboard/add-contest"}
          >
            Add Contest <FaUserPen className="text-lg" />
          </NavLink>
          <NavLink
            className={"font-medium btn px-4 flex gap-2 text-sm items-center"}
            to={"dashboard/my-created-contest"}
          >
            My Created Contest <FaEdit className="text-lg" />
          </NavLink>
          <NavLink
            className={"font-medium btn px-4 flex gap-2 text-sm items-center"}
            to={"dashboard/contest-submitted-page"}
          >
            Contest Submitted Page
            <FaEdit className="text-lg" />
          </NavLink>
        </> :''}
        
        {/* Normal User */}
      {  user && userRole?.role === "user"?  <>
          <NavLink
            className={
              "font-medium btn text-sm px-4 mt-6 flex gap-2 items-center"
            }
            to={"dashboard/myparticipated-contest"}
          >
            My Participated Contest
            <FaUserPen className="text-lg" />
          </NavLink>
          <NavLink
            className={"font-medium btn px-4 flex gap-2 text-sm items-center"}
            to={"dashboard/my-winning-ontest-page"}
          >
            My Created Contest <FaEdit className="text-lg" />
          </NavLink>
          <NavLink
            className={"font-medium btn px-4 flex gap-2 text-sm items-center"}
            to={"dashboard/my-profile"}
          >
            My Profile
            <FaEdit className="text-lg" />
          </NavLink>
        </>:''}
      
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
