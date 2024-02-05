import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AdminPanel from "./Pages/AdminPanel";
import PostDetail from "./Pages/PostDetail";
import Categories from "./Pages/Categories";
import AboutPage from "./Pages/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "post/:postId", element: <PostDetail></PostDetail> },
        { path: "/categories", element: <Categories></Categories> },
        { path: "/about", element: <AboutPage /> },
        { path: "/getadminpanel", element: <AdminPanel></AdminPanel> },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
