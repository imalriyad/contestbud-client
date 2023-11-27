import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/ContestDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/all-contest',
          element:<AllContest></AllContest>
        },
        {
          path:'/contest-details',
          element:<ContestDetails></ContestDetails>
        }
    ])
  },
]);

export default router;
