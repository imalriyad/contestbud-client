import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Router";
import MainLayout from "./Layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <MainLayout></MainLayout>
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
