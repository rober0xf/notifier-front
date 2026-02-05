import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../Navbar";
import { FooterComponent } from "../Footer";
import { footerConfig } from "../../config";

export const MainLayout = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <FooterComponent {...footerConfig} />
    </div>
  );
};
