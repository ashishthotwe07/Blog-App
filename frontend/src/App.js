import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Navbar></Navbar> },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
