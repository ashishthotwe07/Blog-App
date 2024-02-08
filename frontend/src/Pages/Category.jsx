import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postsSelector } from "../Redux/Reducers/PostSlice";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const { posts } = useSelector(postsSelector);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleLike = (postId) => {
    const updatedLikedPosts = new Set(likedPosts);
    if (likedPosts.has(postId)) {
      updatedLikedPosts.delete(postId);
    } else {
      updatedLikedPosts.add(postId);
    }
    setLikedPosts(updatedLikedPosts);
  };

  // Function to format timestamp to "Month Date, Year" format
  const formatDate = (timestamp) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="container mx-auto w-4/5 mb-10 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Categories</h1>
      <div className="flex justify-between flex-wrap mb-4">
        {[
          "All",
          "Biotechnology",
          "Bioinformatics",
          "Fitness",
          "Technology",
        ].map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category && "active"
            } py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
            onClick={() => handleCategorySelect(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="relative flex flex-col h-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${post.image})`,
              backgroundSize: "contain",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative flex flex-col justify-between flex-1 px-4 sm:px-6 lg:px-4 py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
           
                  <p className="text-white text-sm">{post.author}</p>
                </div>
                <p className="text-white text-sm">
                  {formatDate(post.createdAt)}
                </p>
              </div>
              <h3 className="text-white text-2xl font-bold text-center mt-4">
                <Link className="absolute inset-0" to={`/post/${post._id}`} />
                {post.title}
              </h3>
              <div className="flex justify-center text-yellow-600 items-center mt-4">
                {post.category}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Category;
