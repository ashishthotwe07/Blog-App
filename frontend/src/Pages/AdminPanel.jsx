import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, postsSelector } from "../Redux/Reducers/PostSlice";
import CreatePost from "./CreatePostForm";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const { posts } = useSelector(postsSelector);
 
  const handleCreatePostClick = () => {
    setShowForm(!showForm);
  };



  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleUpdate = (postId) => {
    console.log("Update post with ID:", postId);
  };

  return (
    <div className="container mx-auto mt-8 px-4" >
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="flex justify-end mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleCreatePostClick}
        >
          {showForm ? "Close Form" : "Create Post"}
        </button>
      </div>

      {showForm && <CreatePost />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.author}</p>
              <div className="optionsss">
                <button type="button" onClick={() => handleDelete(post._id)}>
                  Delete
                </button>
                <button type="button" onClick={() => handleUpdate(post._id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
