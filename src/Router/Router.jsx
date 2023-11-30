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
import ManageUser from "../Dashboard/ManageUser/ManageUser";
import ManageContest from "../Dashboard/ManageContest/ManageContest";
import CreatorRoute from "../Private/CreatorRoute";
import AddContest from "../Dashboard/Contest Creator/AddContest";
import MyContest from "../Dashboard/Contest Creator/MyContest";
import ParticipitedContest from "../Dashboard/user/ParticipitedContest";
import UpdateInfo from "../Dashboard/user/UpdateInfo";

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
          fetch(
            `https://contest-bud-server.vercel.app/api/v1/get-all-contest/${params.id}`
          ),
      },
      {
        path: "/contest-details/:id",
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://contest-bud-server.vercel.app/api/v1/get-all-contest/${params.id}`
          ),
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "dashboard/manage-user",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/manage-contest",
        element: (
          <AdminRoute>
            <ManageContest></ManageContest>
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/add-contest",
        element: (
          <CreatorRoute>
            <AddContest></AddContest>
          </CreatorRoute>
        ),
      },
      {
        path: "dashboard/my-contest",
        element: (
          <CreatorRoute>
            <MyContest></MyContest>
          </CreatorRoute>
        ),
      },
      {
        path: "dashboard/myparticipated-contest",
        element: (
          <PrivateRoute>
            <ParticipitedContest></ParticipitedContest>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/update-info",
        element: (
          <PrivateRoute>
            <UpdateInfo></UpdateInfo>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
