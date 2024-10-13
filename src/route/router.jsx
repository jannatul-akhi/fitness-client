import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ErrorPage from "../shared/ErrorPage";
import Booking from "../pages/Dashboard/Booking";
import Review from "../pages/Dashboard/Review";
import BookingList from "../pages/Dashboard/BookingList";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import OrderList from "../pages/Admin/OrderList";
import AddService from "../pages/Admin/AddService";
import MakeAdmin from "../pages/Admin/MakeAdmin";
import ManageServices from "../pages/Admin/ManageServices";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "booking-list",
        element: <BookingList />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "profile",
        element: <Profile />,
        //loader: ({params})=>fetch(`http://localhost:3000/user-data/${params.id}`)
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <PrivateRoute><AdminLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "order-list",
        element: <OrderList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },
      {
        path: "manage-service",
        element: <ManageServices />,
      },
    ],
  },
]);

export default router;
