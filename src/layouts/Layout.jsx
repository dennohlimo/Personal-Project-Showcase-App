import { Outlet } from "react-router";
import  NavBar  from "../components/common/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
