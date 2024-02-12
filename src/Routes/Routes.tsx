import App from "@/App";
import AddService from "@/Pages/Admin/AddService";
import AdminDashboard from "@/Pages/Admin/AdminDashboard";
import ServiceList from "@/Pages/Admin/ServiceList";

import Home from "@/Pages/Home";
import AdminLayout from "@/components/Layout/AdminLayout";

import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);
