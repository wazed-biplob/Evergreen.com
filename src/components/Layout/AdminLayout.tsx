import Sidebar from "@/Pages/Admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 border">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 border">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
