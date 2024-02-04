import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      children: [{ index: true, element: <Home></Home> }],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
