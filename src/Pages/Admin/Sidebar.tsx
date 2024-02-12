import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-slate-400 h-screen sticky top-0 left-0 pt-10 overflow-auto">
      <nav className="flex flex-col gap-y-2 justify-center p-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-slate-500 rounded-md hover:bg-slate-600 flex p-2 items-center gap-x-2 transition-all truncate",
              {
                "bg-dark-grey text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" /> Dashboard
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn("bg-slate-500 rounded-md hover:bg-slate-600 p-2", {
              "bg-dark-grey text-white": isActive,
            })
          }
        >
          Add Service
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn("bg-slate-500 rounded-md hover:bg-slate-600 p-2", {
              "bg-dark-grey text-white": isActive,
            })
          }
        >
          Service List
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
