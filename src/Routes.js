import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
]);

const Routes = () => {
  return (
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  );
};

export default Routes;
