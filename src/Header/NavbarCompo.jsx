"use client";
import { Navbar, Button } from "keep-react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

export const NavbarCompo = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("🎊Successfully Logout!");
      })
      .catch((err) => toast.error(`${err.message.slice(17).replace(")", "")}`));
  };
  const navmenu = (
    <>
      <NavLink className={"hover:text-[#0ECDB9] "}>Home</NavLink>
      <NavLink to={"/all-contest"} className={"hover:text-[#0ECDB9] "}>
        All Contest
      </NavLink>
      <NavLink className={"hover:text-[#0ECDB9] "}>News</NavLink>
      <NavLink className={"hover:text-[#0ECDB9] "}>Blogs</NavLink>
    </>
  );
  return (
    <Navbar fluid={true} className="bg-[#1F2443]  ">
      <Navbar.Container className="flex items-center md:py-2 justify-between ">
        <Navbar.Container className="flex items-center justify-between">
          <img
            src="https://i.ibb.co/Ms0YBtB/contestbud.png"
            className="md:w-[20%] w-[70%]"
            alt=""
          />

          <Navbar.Container
            tag="ul"
            className="lg:flex font-medium text-white mr-8 hidden items-center justify-between gap-8"
          >
            {navmenu}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container
              tag="ul"
              className="flex font-medium flex-col gap-5"
            >
              {navmenu}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          {!user ? (
            <Link to={"/login"}>
              {" "}
              <Button
                size="xs"
                className="bg-[#0ECDB9] text-[#1F2443] hover:bg-transparent hover:border border-[#0ECDB9]  hover:text-white"
              >
                Login
              </Button>
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="dp"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  space-y-2 bg-[#1F2443] rounded-box w-52">
              <button
                 
                  className="justify-between btn btn-sm bg-transparent text-white hover:text-black "
                >
                  {user?.displayName}
                </button>

                <Link to={'dashboard'} className="justify-between cursor-pointer btn btn-sm bg-transparent text-white hover:text-black ">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="justify-between cursor-pointer btn btn-sm bg-transparent text-white hover:text-black "
                >
                  Logout
                </button>
              </ul>
            </div>
          )}

          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
