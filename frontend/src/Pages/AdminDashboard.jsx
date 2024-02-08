import React, { useState, useRef, useEffect } from "react";
import CreatePost from "./CreatePostForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  fetchPosts,
  postsSelector,
} from "../Redux/Reducers/PostSlice";

export default function AdminDashboard() {
  const [showMenu, setShowMenu] = useState(null);
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const createPostRef = useRef(null);

  const dispatch = useDispatch();
  const { posts } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleEdit = (postId) => {
    const selectedPost = posts.find((post) => post._id === postId);
    setSelectedPost(selectedPost);
    setShowCreatePostForm(true);
    setShowMenu(null);
  };

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
    setShowMenu(null);
  };

  const handleMenuToggle = (postId) => {
    setShowMenu(showMenu === postId ? null : postId);
  };

  const toggleCreatePostForm = () => {
    setShowCreatePostForm((prev) => !prev);
    setSelectedPost(null);
  };

  const handleCloseCreatePostForm = () => {
    setShowCreatePostForm(false);
    setSelectedPost(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <button
          type="button"
          onClick={toggleCreatePostForm}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {showCreatePostForm ? "Close" : "Create Posts"}
        </button>
      </div>

      {showCreatePostForm && (
        <div ref={createPostRef}>
          <CreatePost
            initialData={selectedPost}
            onClose={handleCloseCreatePostForm}
          />
        </div>
      )}

      <div style={{ display: showCreatePostForm ? "none" : "block" }}>
        <h2 className="m-0 font-bold">Your posts</h2>
        {posts.map((post) => (
          <div
            key={post._id}
            className="flex gap-3 bg-white border mb-4 mt-7 border-gray-300 rounded-xl overflow-hidden items-center justify-start relative"
          >
            <div className=" w-36 h-32 flex-shrink-0">
              <img
                className="w-full h-full"
                loading="lazy"
                src={post.image}
                alt={post.title}
              />
            </div>
            <div className="flex flex-col gap-2 w-2/3 py-2">
              <p className="text-xl font-bold">{post.title}</p>
              <p className="text-gray-500">{post.category}</p>
            </div>
            <div className="absolute right-2 top-2">
              <div className="relative">
                <button
                  onClick={() => handleMenuToggle(post._id)}
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
                {showMenu === post._id && (
                  <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-1">
                    <button
                      onClick={() => handleEdit(post._id)}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
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
    </div>
  );
}
