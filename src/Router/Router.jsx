import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import PrivateRoute from "../Private/PrivateRoute";
import Payment from "../Payment/Payment";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Dashboard/Dashboard";
import AdminRoute from "../Private/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-contest",
        element: <AllContest></AllContest>,
      },
      {
        path: "/cheakout/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/get-all-contest/${params.id}`),
      },
      {
        path: "/contest-details/:id",
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/get-all-contest/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "dashboard/manage-user",
        element:<AdminRoute></AdminRoute>
      },
      {
        path: "dashboard/manage-contest",
        element:<AdminRoute></AdminRoute>
      },
    ],
  },
]);

export default router;
