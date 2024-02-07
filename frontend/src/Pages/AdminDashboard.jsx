import React, { useState } from "react";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      content: "Content of Blog 1",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Content of Blog 2",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
  ]);
  const [showMenu, setShowMenu] = useState(null);

  const handleEdit = (id) => {
    // Logic for editing a blog
    console.log("Editing blog with ID:", id);
    setShowMenu(null);
  };

  const handleDelete = (id) => {
    // Logic for deleting a blog
    setBlogs(blogs.filter((blog) => blog.id !== id));
    setShowMenu(null);
  };

  const handleMenuToggle = (id) => {
    setShowMenu(showMenu === id ? null : id);
  };

  return (
    <div className="max-w-4xl  mx-auto mt-8">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Create Posts
        </button>
      </div>
      <h2 className="m-0 font-bold">Your posts</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex gap-3 bg-white border mb-4 mt-7  border-gray-300 rounded-xl overflow-hidden items-center justify-start relative"
        >
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              loading="lazy"
              src={blog.image}
              alt={blog.title}
            />
          </div>
          <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">{blog.title}</p>
            <p className="text-gray-500">{blog.content}</p>
          </div>
          <div className="absolute right-2 top-2">
            <div className="relative">
              <button
                onClick={() => handleMenuToggle(blog.id)}
                className="focus:outline-none"
              >
                <svg
                  className="w-4 h-4 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 11a2 2 0 114 0 2 2 0 01-4 0zM9 11a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {showMenu === blog.id && (
                <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-1">
                  <button
                    onClick={() => handleEdit(blog.id)}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
