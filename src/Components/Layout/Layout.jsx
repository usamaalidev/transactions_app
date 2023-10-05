import Navbar from "../Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="w-full flex">
        <Sidebar />
        <div className="content w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
