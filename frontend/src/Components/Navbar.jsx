import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import { fetchPosts } from "../Redux/Reducers/PostSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      // If the screen size is increased (to a large screen),
      // hide the navigation links by setting showLinks to false
      if (window.innerWidth > 768) {
        // Change 768 to your desired breakpoint
        setShowLinks(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <>
      <div className="flex flex-wrap h-full">
        <section className="relative mx-auto">
          {/* Navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link
                to={"/"}
                className="text-3xl font-bold font-heading"
                href="#"
              >
                {/* Logo Here. */}
                AshBlogs
              </Link>
              {/* Nav Links */}
              <ul
                className={`md:flex ${
                  showLinks ? "flex flex-col items-baseline mr-10 " : "hidden"
                } px-4 mx-auto font-semibold font-heading space-x-12`}
              >
                <li>
                  <Link to={"/"} className="hover:text-gray-200" href="#">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/category"}
                    className="hover:text-gray-200"
                    href="#"
                  >
                    Category
                  </Link>
                </li>

                <li>
                  <Link to={"/about"} className="hover:text-gray-200" href="#">
                    About
                  </Link>
                </li>
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex  space-x-5 items-center">
                {/* Sign In / Register */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Responsive navbar */}

            <a
              className="navbar-burger self-center mr-12 md:hidden"
              href="#"
              onClick={toggleLinks}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Navbar;
