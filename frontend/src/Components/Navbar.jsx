import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { fetchPosts } from "../Redux/Reducers/PostSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-semibold text-lg">
            <span className="text-3xl md:text-2xl lg:text-3xl font-extrabold">
              Ashish<span className="text-blue-500">Blogs</span>
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="text-white hover:text-gray-300">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/archives" className="text-white hover:text-gray-300">
                Archives
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
            />
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
