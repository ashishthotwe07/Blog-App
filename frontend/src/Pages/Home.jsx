import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../Redux/Reducers/PostSlice";

// Function to truncate the post content
const truncateContent = (content, maxLength) => {
  if (content > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

const Home = () => {
  const { loading, error, posts } = useSelector(postsSelector);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to AshishBlogs</h1>
      {loading && <p>Loading posts...</p>}
      {error && <p>Error fetching posts: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 p-4 rounded-lg shadow-lg"
          >
            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />

            {/* Post Title */}
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

            {/* Post Metadata */}
            <p className="text-gray-600 mb-2">
              {post.author} | {post.createdAt}
            </p>

            {/* Post Excerpt */}
            <p className="text-gray-600 mb-4">
              {truncateContent(post.body, 150)}
            </p>

            {/* Read More Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded">
          Explore More Posts
        </button>
      </div>
    </div>
  );
};

export default Home;
