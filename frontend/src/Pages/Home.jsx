import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../Redux/Reducers/PostSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { posts } = useSelector(postsSelector);

  // Function to get the first 5 recent posts
  const getRecentPosts = () => {
    return posts.slice(0, 5); // Adjust the number as per your requirement
  };

  return (
    <div>
      <div className="hero-section bg-gray-900 text-white py-20">
        {" "}
        {/* Changed background color to gray-900 */}
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg mb-8">
            I write about Software Development, Biotechnology, and
            Bioinformatics. Explore my articles to learn more!
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">
            RECENT BLOGS
          </h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {getRecentPosts().map((post) => (
              <article
                key={post.id}
                className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${post.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <Link
                      className="text-white text-2xl font-bold text-center"
                      to={`post/${post._id}`}
                    >
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </section>
        </article>
      </section>
    </div>
  );
};

export default Home;
