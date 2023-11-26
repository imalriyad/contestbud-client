
import { Outlet } from "react-router-dom";
import { NavbarCompo } from "../Header/NavbarCompo";

const MainLayout = () => {
  return (
    <div>
     <NavbarCompo></NavbarCompo>
      <Outlet />
    </div>
  );
};

export default MainLayout;
