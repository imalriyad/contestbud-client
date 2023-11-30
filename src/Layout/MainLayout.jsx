
import { Outlet } from "react-router-dom";
import { NavbarCompo } from "../Header/NavbarCompo";
import Footer from "../Header/Footer";

const MainLayout = () => {
  return (
    <div>
     <NavbarCompo></NavbarCompo>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
