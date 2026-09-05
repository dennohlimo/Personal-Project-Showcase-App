import { Outlet } from "react-router";
import  NavBar  from "../components/common/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
