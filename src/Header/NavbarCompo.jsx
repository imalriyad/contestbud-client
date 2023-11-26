"use client";
import { Navbar, Button } from "keep-react";
import { NavLink } from "react-router-dom";
export const NavbarCompo = () => {
  const navmenu = (
    <>
      <NavLink className={'hover:text-[#05FFE5] '}>Home</NavLink>
      <NavLink className={'hover:text-[#05FFE5] '}>Projects</NavLink>
      <NavLink className={'hover:text-[#05FFE5] '}>News</NavLink>
      <NavLink className={'hover:text-[#05FFE5] '}>Blogs</NavLink>
    </>
  );
  return (
    <Navbar fluid={true} className="bg-[#1F2443] ">
      <Navbar.Container className="flex items-center py-2 justify-between">
        <Navbar.Container className="flex items-center justify-between">
          <img src="https://i.ibb.co/Ms0YBtB/contestbud.png" className="md:w-[20%] w-[70%]" alt="" />

          <Navbar.Container
            tag="ul"
            className="lg:flex text-white mr-8 hidden items-center justify-between gap-8"
          >
            {navmenu}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container
              tag="ul"
              className="flex flex-col gap-5"
            >
              {navmenu}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size={'xs'} className="bg-[#0ECDB9]  text-[#1F2443] hover:bg-[#0ECDB9] ">
            Login
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
