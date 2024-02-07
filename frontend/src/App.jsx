import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import AdminDashboard from "./Pages/AdminDashboard";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/category", element: <Category /> },
        { path: "/collections", element: <Collection /> },
        { path: "/about", element: <About /> },
        { path: "/admin", element: <AdminDashboard /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}
