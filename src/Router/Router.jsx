import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import Login from "../Form/Login";
import Registration from "../Form/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/contest-details/:id",
        element: <ContestDetails></ContestDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/get-all-contest/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element:<Registration></Registration>,
      },
    ],
  },
]);

export default router;
