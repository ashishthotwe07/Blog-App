import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postsSelector } from "../Redux/Reducers/PostSlice";

const Home = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const dispatch = useDispatch();

  const { posts } = useSelector(postsSelector);

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

  // Get the latest three posts based on createdAt timestamp
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          From the Latest Blogs
        </h2>
        <p className="text-gray-600">
          Explore the latest articles on fitness, biotechnology, bioinformatics,
          and technology.
        </p>
      </div>
      <div className="grid grid-cols-1 m-10 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${post.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative flex flex-col justify-between h-full px-4 sm:px-6 lg:px-4">
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
          
                  <p className="text-white text-sm">{post.author}</p>
                </div>
                <p className="text-white text-sm">
                  {formatDate(post.createdAt)}
                </p>
              </div>
              <h3 className="text-white text-2xl font-bold text-center">
                <Link className="absolute inset-0" to={`post/${post._id}`} />
                {post.title}
              </h3>
              <div className="flex justify-center items-center mt-2">
                <h5 className="w-6 h-6 absolute top-52 left-10 cursor-pointer filter invert">
                  {post.category}
                </h5>
              </div>
            </div>
          </article>
        ))}
        <a
          href="/category"
          class="inline-flex items-center px-3 py-2 w-40 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
